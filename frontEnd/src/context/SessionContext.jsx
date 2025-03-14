import { createContext, useEffect, useState } from 'react';

export const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [userData, setUserData] = useState('');

  useEffect(() => {
    async function getSessionData() {
      const response = await fetch('http://localhost:8080/api/user/session');

      const data = await response.json();

      setUserData(data.session);
    }
    getSessionData();
  }, []);

  return (
    <SessionContext.Provider value={{ userData, setUserData }}>
      {children}
    </SessionContext.Provider>
  );
}