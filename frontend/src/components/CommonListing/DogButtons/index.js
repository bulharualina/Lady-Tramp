'use client';

import ComponentLevelLoader from '@/components/Loader/componentlevel';
import { usePathname, useRouter } from 'next/navigation';
import { GlobalContext } from '@/context';
import { useContext } from 'react';
import { addToCart } from '@/services/cart';
import { deleteADog } from '@/services/dog';
import { toast } from 'react-toastify';

export default function DogButton({ item }) {
  const pathName = usePathname();

  const {
    setCurrentUpdatedDog,
    setComponentLevelLoader,
    componentLevelLoader,
    user,
    setShowCartModal,
  } = useContext(GlobalContext);
  const router = useRouter();

  const isAdminView = pathName.includes('admin-view');

  async function handleDeleteDog(item) {
    setComponentLevelLoader({ loading: true, id: item._id });
    const res = await deleteADog(item._id);

    if (res.success) {
      setComponentLevelLoader({ loading: false, id: '' });
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      router.refresh();
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: '' });
    }
  }

  async function handleAddToCart(getItem) {
    setComponentLevelLoader({ loading: true, id: getItem._id });

    const res = await addToCart({ dogID: getItem._id, userID: user._id });
    if (res.success) {
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: '' });
      setShowCartModal(true);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setComponentLevelLoader({ loading: false, id: '' });
      setShowCartModal(true);
    }
    console.log(res);
  }

  return isAdminView ? (
    <>
      <button
        onClick={() => {
          setCurrentUpdatedDog(item);
          router.push('/admin-view/add-dog');
        }}
        className="mt-1.5 flex w-full justify-center px-5 py-2 text-xs font-semibold tracking-wide text-white"
        style={{
          background: '#7A001A',
          borderRadius: 6,
        }}
      >
        Update
      </button>
      <button
        onClick={() => handleDeleteDog(item)}
        className="mt-1.5 flex w-full justify-center px-5 py-2 text-xs font-semibold tracking-wide text-white"
        style={{
          background: '#7A001A',
          borderRadius: 6,
        }}
      >
        {componentLevelLoader &&
        componentLevelLoader.loading &&
        item._id === componentLevelLoader.id ? (
          <ComponentLevelLoader
            text={'Deleting Dog'}
            color={'#ffffff'}
            loading={componentLevelLoader && componentLevelLoader.loading}
          />
        ) : (
          'DELETE'
        )}
      </button>
    </>
  ) : (
    <>
      <button
        onClick={() => handleAddToCart(item)}
        className="mt-1.5 flex w-full justify-center px-5 py-3 text-xs font-medium tracking-wide text-white"
        style={{
          background: '#7A001A',
          borderRadius: 6,
        }}
      >
        {componentLevelLoader &&
        componentLevelLoader.loading &&
        componentLevelLoader.id === item._id ? (
          <ComponentLevelLoader
            text={'Adding to cart'}
            color={'#ffffff'}
            loading={componentLevelLoader && componentLevelLoader.loading}
          />
        ) : (
          'Add To Cart'
        )}
      </button>
    </>
  );
}
