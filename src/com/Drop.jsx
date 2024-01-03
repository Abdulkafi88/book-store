import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

function Drop({ handleSearch, closeDrop }) {
  const [userEmail, setUserEmail] = useState("");

  const handleClick = (e) => {
    if (handleSearch) {
      e.preventDefault();
      handleSearch();
     
    }
    closeDrop();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && user.email) {
        setUserEmail(user.email);
      } else {
        setUserEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUserEmail("");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div
      id="dropdownAvatar"
      className="select-none absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      {userEmail ? (
        <>
          <p   className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-white">
            {userEmail}
          </p>
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <Link
                onClick={handleClick}
                to={"AllBooks"}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                All eBooks
              </Link>
            </li>
            <li>
              <h1
                onClick={handleLogout}
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
              >
                Log out
              </h1>
            </li>
          </ul>
        </>
      ) : (
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <Link
              onClick={handleClick}
              to={"AllBooks"}
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              All eBooks
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to={"Login"}
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              onClick={handleClick}
              to={"Register"}
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Register
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Drop;
