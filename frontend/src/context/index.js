"use client";
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [showNavModal, setShowNavModal] = useState(false);
  const [pageLevelLoader, setPageLevelLoader] = useState(true);
  const [isAuthUser, setIsAuthUser] = useState(null);
  const [componentLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: '',
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (Cookies.get('token') !== undefined) {
      setIsAuthUser(true);
      const userData = JSON.parse(localStorage.getItem('user')) || {};
      const getCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      setUser(userData);
      setCartItems(getCartItems);
    } else {
      setIsAuthUser(false);
      setUser({}); //unauthenticated user
    }
  }, [Cookies]);


  return (
    <GlobalContext.Provider value={{ showNavModal, setShowNavModal, isAuthUser, setIsAuthUser, user, setUser, componentLevelLoader, setComponentLevelLoader }}>
      {children}
    </GlobalContext.Provider>
  );
}
