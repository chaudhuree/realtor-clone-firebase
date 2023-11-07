import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  // this function will check if the current route matches the route passed in as an argument
  // if it does, it will return true
  // based on this, we can apply the active styles to the current route
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }
  // from here we will check if the user is logged in or not
  // if they are, we will set the pageState to "Profile" and it will show in the navbar
  // if they are not, we will set the pageState to "Sign in" and it will show in the navbar
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 transition-all duration-400 ease-in-out  ${
                pathMatchRoute("/") &&
                "text-black border-b-[3px] border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 transition-all duration-400 ease-in-out  ${
                pathMatchRoute("/offers") &&
                "text-black border-b-[3px] border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 transition-all duration-400 ease-in-out  ${
                (pathMatchRoute("/sign-in") || pathMatchRoute("/profile")) &&
                "text-black  border-b-[3px] border-b-red-500"
              }`}
              onClick={() => navigate("/profile")}
            >
            {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
// in the sign in button we have navigated to /profile page
// this is becaust /profile is a protected route
// if the user is not logged in, they will be redirected to /sign-in page
// so we have no need to add any logic here
// otherwise we can do like, if the user is logged in, we will navigate to /profile
// otherwise we will navigate to /sign-in
// onClick={() => navigate(pageState === "Sign in" ? "/sign-in" : "/profile")}