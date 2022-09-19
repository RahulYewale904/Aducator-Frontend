import React from "react";
import { useSelector } from "react-redux";

import AdminNavbar from "./AdminNavbar";
import PrivateNavbar from "./PrivateNavbar";
import PublicNavbar from "./PublicNavbar";
import Alert from './Alert'
import Success from './success'
import { useToast } from '@chakra-ui/react'
const NavMain = () => {
  //ge user from store
  const state = useSelector(state => state.user);
  const { userAuth, profile } = state;
  const isAdmin = userAuth?.isAdmin;

    //account verification
    const account = useSelector(state => state?.AccountVerification);
    const { loading, appErr, serverErr, token } = account;

  return (
    <>
       {isAdmin ? (
        <AdminNavbar />
      ) : userAuth ? (
        <PrivateNavbar />
      ) : (
        <PublicNavbar />
      )}
      {/* Display alert */}
      {profile?.isAccountVerified == false && <Alert />}
      {/* display success msg */}
      {loading && <h2 className="text-center">Loading please wait...</h2>}
      {token && <Success />}
      {appErr || serverErr ? (
        <h2 className="text-center text-red-500">
          {serverErr} {appErr}
        </h2>
      ) : null}
    </>
  );
};

export default NavMain;
