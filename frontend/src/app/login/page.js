'use client';

import InputComponent from '@/components/FormElements/InputComponent';
import ComponentLevelLoader from '@/components/Loader/componentlevel';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GlobalContext } from '@/context';
import { loginFormControls } from '@/utils';

const initialFormData = {
  name: '',
  email: '',
  password: '',
  role: 'customer',
};

export default function Login() {
  const [formData, setFormData] = useState(initialFormData);
  const {
    isAuthUser,
    setIsAuthUser,
    user,
    setUser,
    componentLevelLoader,
    setComponentLevelLoader,
  } = useContext(GlobalContext);
  
  const router = useRouter();
  console.log(formData);
  function isValidForm() {
    return formData &&
      formData.email &&
      formData.email.trim() !== '' &&
      formData.password &&
      formData.password.trim() !== ''
      ? true
      : false;
  }
  console.log(isValidForm());

  async function handleLogin() {
    setComponentLevelLoader({ loading: true, id: '' });
    const res = await login(formData);

    console.log(res);
    if (res.success) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsAuthUser(true);
      setUser(res?.finalData?.user);
      setFormData(initialFormdata);
      Cookies.set('token', res?.finalData?.token);
      localStorage.setItem('user', JSON.stringify(res?.finalData?.user));
      setComponentLevelLoader({ loading: false, id: '' });
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setIsAuthUser(false);
      setComponentLevelLoader({ loading: false, id: '' });
    }
  }


  return (
    <div
      className="bg-white relative"
    >
      <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-6 lg:flex-row">
        <div className="flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row">
          <div className="w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12">
            <div className="flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-">
              <p className="w-full text-4xl font-bold text-center font-sans serif">
                Login
              </p>
              <div className="w-full mt-16 mr-0 mb-0 ml-0 relative space-y-8">
                {loginFormControls.map((controlItem) =>
                  controlItem.componentType === 'input' ? (
                    <InputComponent
                      label={controlItem.label}
                      placeholder={controlItem.placeholder}
                      type={controlItem.type}
                    />
                  ) : null
                )}
                <button
                  className="disabled:opacity-50 inline-flex w-full items-center justify-center px-6 py-3 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium tracking-wide"
                  style={{
                    background: '#7A001A',
                    borderRadius: 6,
                  }}
                  disabled={!isValidForm()}
                  onClick={handleLogin}
                >
                  {componentLevelLoader && componentLevelLoader.loading ? (
                    <ComponentLevelLoader
                      text={'Logging In'}
                      color={'#ffffff'}
                      loading={
                        componentLevelLoader && componentLevelLoader.loading
                      }
                    />
                  ) : (
                    'Login'
                  )}
                </button>
                <div className="flex flex-col gap-1.5">
                  <p>New to website ?</p>
                  <button
                    className="inline-flex w-full items-center justify-center px-6 py-3 text-lg 
                     text-white transition-all duration-200 ease-in-out focus:shadow font-medium tracking-wide
                     "
                    style={{
                      background: '#7A001A',
                      borderRadius: 6,
                    }}
                    onClick={() => router.push('/register')}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
