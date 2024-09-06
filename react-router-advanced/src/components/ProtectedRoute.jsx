
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Import useAuth

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Use the custom hook

  return isAuthenticated ? element : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default ProtectedRoute;
