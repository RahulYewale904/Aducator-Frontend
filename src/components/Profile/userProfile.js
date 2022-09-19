import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  HeartIcon,
  EmojiSadIcon,
  UploadIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { MailIcon, EyeIcon } from "@heroicons/react/solid";
import { userProfileAction , followUserAction , unfollowUserAction } from "../../redux/slices/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

export default function Profile({
  computedMatch: {
    params: { id },
  },
}) {
  const dispatch = useDispatch();
  const history = useHistory();

    //User data from store
    const users = useSelector(state => state.user);
    const { profile, loading, appErr, serverErr ,followed, unFollowed , userAuth } = users;
  //fetch user profile
  useEffect(() => {
    dispatch(userProfileAction(id));
  }, [id, dispatch , followed, unFollowed]);

   //send mail handle click
   const sendMailNavigate = () => {
    history.push({
      pathname: "/send_mail",
      state: {
        email: profile?.email,
      },
    });
  };
  const isLoginUser = userAuth?._id === profile?._id;

  const user = useSelector((state) => state.user);
  const {
    userAuth: { _id },
  } = user;

  const isCreatedBy = profile?._id === _id;

  return (
    <>
      <div className="h-auto flex  bg-white">
        {/* Static sidebar for desktop */}

        <div className="flex flex-col min-w-0 flex-1 ">
          <div className="flex-1 relative z-0 flex ">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              <article>
                {/* Profile header */}
                <div>
                  <div>
                    <img
                      className=" h-32 bg-cover w-full object-cover lg:h-48 "
                      src={profile?.profilePhoto}
                      alt={profile?.firstName}
                    />
                  </div>
                  <div className="max-w-5xl mx-auto  ">
                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      <div className="flex ">
                        <img
                          className="Cat_shadow border-2 h-24 w-24 rounded-full sm:hidden  ring-4 ring-white sm:h-32 sm:w-32"
                          src={profile?.profilePhoto}
                          alt={profile?.firstName}
                        />
                      </div>
                      <div className="mt-9 sm:text-center ">
                        <div className="  2xl:block mt-10 min-w-0 flex-1">
                          <h1 className="text-2xl font-bold text-gray-900 ">
                            {profile?.firstName} {profile?.lastName}
                            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                              {/* {profile?.accountType} */}
                            </span>
                            {/* Display if verified or not */}
                            {profile?.isAccountVerified ? (
                              <span className="Cat_shadow inline-flex ml-2 items-center px-3 py-1  rounded-full text-sm font-medium bg-green-800 text-gray-300">
                                Account Verified <span className=" pl-2" uk-icon="icon: check"></span>
                              </span>
                            ) : (
                              <span className="Cat_shadow inline-flex ml-2 items-center px-3 py-1  rounded-full text-sm font-medium bg-red-800 text-gray-300">
                                Unverified Account <span className=" pl-2" uk-icon="icon: close"></span>
                              </span>
                            )}
                          </h1>
                          <p className="text-green-600 mt-2 mb-2">
                          
                           followers: {profile?.followers.length}
                           <br />
                           following: {profile?.following.length} 
                          
                        </p>
                          <div className=' my-2 '>
                          <p className='text-lg'>Bio: {profile?.bio}</p>
                          </div>
                          <p className=" my-2 text-lg flex sm:justify-center ">
                            <p className=' pr-3'>Date Joined:</p>
                             {moment(profile?.createdAt).format("MMM Do YY")}
                          </p>
                         
                          <div className=' flex sm:justify-center '>
                          <p>Email: {profile?.email}</p>
                          
                          </div>
                          <p>Mobile: {profile?.Mobile == null ? "Not Availble" : profile?.Mobile}</p>

                          {/* is login user */}
                          {/* Upload profile photo */}
                          {isCreatedBy ?  <Link
                            to={`/upload-photo/${profile?._id}`}
                            className="Cat_shadow hover:no-underline hover:bg-[#2E0249] flex justify-center items-center rounded-full py-2 my-2 bg-[#A91079] w-[20%] sm:w-[80%] sm:mx-auto text-center "
                          >
                            <UploadIcon
                              className="-ml-1 mr-2 h-5 w-5 text-gray-200"
                              aria-hidden="true"
                            />
                            <span className='text-white'>Upload Photo</span>
                          </Link> : null}
                         
                        </div>

                        <div className="mt-6 flex flex-col justify-center space-y-3 sm:flex-col sm:justify-center">
                          
                        {
                          !isLoginUser &&
                          <div>
                          <button
                          onClick={() =>
                            dispatch(unfollowUserAction(id))
                          }
                            className="inline-flex mr-4 justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
                          >
                            <EmojiSadIcon
                              className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Unfollow</span>
                          </button>

                          <>
                          <button
                          onClick={() =>
                            dispatch(followUserAction(id))
                          }
                          type="button"
                          className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                          <HeartIcon
                            className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span>Follow </span>
                          <span className="pl-2">
                            {profile?.followers?.length}
                          </span>
                        </button>
                          </>
                        </div>
                        }
                         

                          {/* Update Profile */}

                          
                        </div>
                      </div>

                      
                    </div>
                    <div className=' my-7 w-[50%] mx-auto sm:w-[80%]'>
                  
                    {
                      isCreatedBy ?    <div className=' my-3'>
                      <Link
                      to="/profile-update"
                      className="Cat_shadow  w-[60%] py-1.5 mx-auto sm:w-[80%] hover:no-underline bg-[#570A57] hover:bg-blue-500 flex justify-center items-center rounded-full"
                    >
                      <UserIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-200"
                        aria-hidden="true"
                      />
                      <span className="text-base mr-2  text-bold text-white ">Update Profile</span>
                    </Link>
                      </div> :null
                    }
                 
                          
                      <div className=' my-3'>

                      
                      <button
                      onClick={sendMailNavigate}
                        className="Cat_shadow w-[60%] py-1.5 mx-auto sm:w-[80%] hover:no-underline bg-[#570A57] hover:bg-blue-500 flex justify-center items-center rounded-full"
                      >
                        <MailIcon
                          className="-ml-1 mr-2 h-5 w-5 text-gray-200"
                          aria-hidden="true"
                        />
                        <span className="text-base mr-2  text-bold text-white ">
                          Send Message
                        </span>
                      </button>
                      
                      </div>
                    </div>
                    <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                      <h1 className="text-2xl font-bold text-gray-900 truncate">
                        {profile?.firstName} {profile?.lastName}
                      </h1>
                    </div>
                  </div>
                </div>
                {/* Tabs */}
                <div className="mt-6 sm:mt-2 2xl:mt-5">
                  <div className="">
                    <div className="max-w-5xl mx-auto "></div>
                  </div>
                </div>
                <div className="flex justify-center place-items-start ">
                  
                  {/* All my Post */}
                  <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
                        <h1 className="text-center text-xl  mb-2 ">
                          My Post: {profile?.projects?.length}
                        </h1>
                        {/* Loop here */}
                        {profile?.projects?.length <= 0 ? (
                          <h2 className="text-center text-xl">No Post Found</h2>
                        ) : (
                          profile?.projects.map(post => (
                            <div className="flex flex-wrap  -mx-3 mt-3  lg:mb-6">
                              
                              <div className="w-full lg:w-3/4 px-3">
                                <Link
                                  // to={`/post/${post?._id}`}
                                  className=""
                                >
                                  <h3 className="mb-1 text-2xl text-blue-700 font-bold font-heading">
                                    {post?.title}
                                  </h3>
                                </Link>
                                <p className="text-gray-600 truncate">
                                  {post?.description}
                                </p>

                                <Link
                                  className="text-indigo-500 hover:underline"
                                  to={`/project/${post?._id}`}
                                >
                                  Read more
                                </Link>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
      
    </>
  );
}
