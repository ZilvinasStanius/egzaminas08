import { useEffect, useState } from 'react';

export default function useSession() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function getSessionData() {
      const response = await fetch('http://localhost:8080/api/user/session');

      const data = await response.json();

      setUserData(data.session);

      console.log(data);
    }
    getSessionData();
  }, []);

  return { userData };
}