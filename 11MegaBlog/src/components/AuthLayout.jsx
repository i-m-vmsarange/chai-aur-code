import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    /**
     * authentication = iska matlab hai current page ko login required hai ya nahi.
     * true = protected page login chahiye
     * false = public page, jaise login/signup page
     *
     * authStatus = current user ka actual login status hai
     * true = user logged in hai
     * false = user logged out hai
     */

    //Agar page protected hai par user logged in nahi hai to use login page par bhejo
    if (authentication && authStatus !== authentication) {
      navigate("/login");
    } else if (
      //Agar page public hai, but user already logged in hai, to user ko home par bhejo
      !authentication &&
      authStatus !== authentication
    ) {
      navigate("/");
    }
    setLoader(false);
  }, [authStatus, navigate, authentication]);
  return loader ? <h1>Loading...</h1> : <>{children}</>;
}
