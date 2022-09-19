import React from "react";
import { Link, useHistory } from "react-router-dom";
import { MailIcon , userCircle } from "@heroicons/react/solid";
import {
  blockUserAction,
  unBlockUserAction,
} from "../../redux/slices/users/userSlice";
import { useDispatch, useSelector } from "react-redux";


const UsersListItem = user => {
  const dispatch = useDispatch();
  const history = useHistory();

  const sendMailNavigator = () => {
    history.push({
      pathname: "/send_mail",
      state: {
        email: user?.user?.email,
        id: user?.user?._id,
      },
    });
  };
  return (
    <>
      <div className="p-8 mb-4 bg-white shadow rounded">
        <div className="flex flex-wrap items-center -mx-4 sm:flex-col">
          <div className="w-full lg:w-3/12 items-center flex px-4 mb-6 lg:mb-0">
            <img
              className="profileBorder w-16 h-16 mr-4 object-cover rounded-full"
              src={user?.user?.profilePhoto}
              alt="profile "
            />
            <div>
              <p className="text-sm font-medium">
                {user?.user?.firstName} {user?.user?.lastName}
              </p>
              <p className="text-xs text-gray-500">{user?.user?.email}</p>
            </div>
          </div>
          <div className="w-1/2 lg:w-2/12 px-4 mb-6 lg:mb-0">
            <p className="py-1 px-2 text-xs text-purple-500 bg-purple-50 rounded-full">
              {user?.user?.accountType}
              {/* <span>{user?.user?.isBlocked && "Blocked"}</span> */}
            </p>
          </div>
          <div className="w-1/2 lg:w-2/12 px-4 mb-6 lg:mb-0">
            <p className="text-sm font-medium">
              <span className="text-base mr-2  text-bold text-blue-800">
                {user.user?.followers?.length}
              </span>
              followers
            </p>
          </div>
          <div className="w-full justify-center items-center flex lg:w-4/12 px-4  mb-6 lg:mb-0">
           
            <Link
              to={`/profile/${user?.user?._id}`}
              className='Cat_shadow hover:no-underline hover:text-white flex items-center px-3 py-1 bg-[#1C6DD0]  rounded-full text-white'
            >
            <span uk-icon="icon: user" className=' pr-1 text-white'></span>
              Profile
            </Link>

            {user?.user?.isBlocked ? (
              <button
              onClick={() => dispatch(unBlockUserAction(user?.user?._id))}
                className='Cat_shadow bg-[#F90716] flex items-center px-3 py-1 mx-3 rounded-full text-white'
              >
              <span uk-icon="icon: plus-circle" className=' pr-1 text-white'></span>
                unblock
              </button>
            ) : (
              <button
              onClick={() => dispatch(blockUserAction(user?.user?._id))}
                className='Cat_shadow bg-[#FF8D29] flex items-center px-3 mx-3 py-1  rounded-full text-white'
              >
              <span uk-icon="icon: ban" className=' pr-1 text-white'></span>
                Block
              </button>
            )}

            <button
              onClick={sendMailNavigator}
              className="Cat_shadow flex bg-[#125B50] px-3 rounded-full py-1 items-center"
            >
              <MailIcon
                className="-ml-1 mr-2 h-5 w-5 text-gray-200"
                aria-hidden="true"
              />
              <span className="text-base mr-2  text-bold text-white">
                Message
              </span>
            </button>
          </div>
          <div className="w-full lg:w-1/12 px-4">
            <div className="flex items-center">
              {/* Send Mail */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersListItem;
