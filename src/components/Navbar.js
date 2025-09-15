import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Edvise AI
        </Link>

        {/* Show Signup and Login only on Landing Page */}
        {location.pathname === "/" && (
          <div className="space-x-4">
            <Link to="/register" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
              Signup
            </Link>
            <Link to="/login" className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
