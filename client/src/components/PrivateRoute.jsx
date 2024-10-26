import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const hasPaid = localStorage.getItem('hasPaid'); // Check if the user has paid

  return hasPaid ? children : <Navigate to="/" />; // If not paid, redirect to homepage or payment page
}

export default PrivateRoute;
