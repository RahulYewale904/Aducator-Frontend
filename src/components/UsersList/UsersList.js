import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersListHeader from "./UsersListHeader";
import UsersListItem from "./UsersListItem";
import { fetchUsersAction} from "../../redux/slices/users/userSlice";
import Loading from '../loading/loadingSpinner'
const UsersList = () => {
  const dispatch = useDispatch();
  //fetch all users
  //data from store
  const users = useSelector(state => state?.user);
  const { usersList, appErr, serverErr, loading, block, unblock } = users;
  //fetch all users
  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [block, unblock]);

  return (
    <>
      <section class="py-2">
      {loading ? (
        <Loading />
      ) : appErr || serverErr ? (
        <h3>
          {serverErr} {appErr}
        </h3>
      ) : usersList?.length <= 0 ? (
        <h2>No User Found</h2>
      ) : (
        usersList?.map(user => (
          <>
            <UsersListItem user={user} />
          </>
        ))
      )}
      </section>
    </>
  );
};

export default UsersList;
