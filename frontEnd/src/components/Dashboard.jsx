import { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';

export default function Dashboard() {
  const { userData } = useContext(SessionContext);
  console.log(userData)


  return (
    <>
      <h1>
        {userData ? `Welcome ${userData.email}` : 'Welcome to Helpdesk'}
      </h1>
    </>
  );
}