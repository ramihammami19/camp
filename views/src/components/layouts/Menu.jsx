import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStore } from "../../stores/userStore";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCampground, faCar, faHouseFlag } from "@fortawesome/free-solid-svg-icons"; // Import the necessary icons

const Menu = () => {
  const navigate = useNavigate();
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser]);

  return (
    <header className="bg-white py-2 border-b">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <Link to="/" className="flex items-center">
              <FontAwesomeIcon icon={faCampground} className="mr-2" /> 
            </Link>
          </div>

          {!user ? (
            <Link
              to="/auth/login"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <FontAwesomeIcon icon={faUser} className="text-gray-400 w-5" />
              <span className="hidden lg:inline ml-1">Sign in</span>
            </Link>
          ) : (
            <Link className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300">
              <FontAwesomeIcon icon={faUser} className="text-gray-400 w-5" />
              <button
                onClick={() => {
                  import("../../services/auth.service").then(async (module) => {
                    await module.logout();
                    setUser(null);
                    navigate("/auth/login");
                    toast.success("Good bye");
                  });
                }}
                className="hidden lg:inline ml-1"
              >
                Logout
              </button>
            </Link>
          )}
          {user && (
            <div>
              <Link
                to="/user/profile"
                className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <FontAwesomeIcon icon={faUser} className="text-gray-400 w-5" />
                <span className="hidden lg:inline ml-1">Profile</span>
              </Link>
              <Link
                to="./aceuil"
                className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <FontAwesomeIcon icon={faCar} className="text-gray-400 w-5" />
                <span className="hidden lg:inline ml-1">kraheb</span>
              </Link>
              <Link
                to="./centre"
                className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <FontAwesomeIcon icon={faHouseFlag} className="text-gray-400 w-5" />
                <span className="hidden lg:inline ml-1">Centre</span>
              </Link>
              <Link
                to="./CardGrid"
                className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
              >
                <FontAwesomeIcon icon={faHouseFlag} className="text-gray-400 w-5" />
                <span className="hidden lg:inline ml-1">matériel</span>
              </Link>
            </div>
          )}
          <div className="lg:hidden ml-2">
            <button
              type="button"
              className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
            >
              <span className="sr-only">Open menu</span>
              <i className="fa fa-bars fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Menu;
