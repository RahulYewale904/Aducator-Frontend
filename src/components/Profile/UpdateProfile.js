import ProjectIcon from "../assets/images/bubble-chat.gif";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useToast } from "@chakra-ui/react";

import {
  updateUserAction,
  fetchUserDetailsAction,
} from "../../redux/slices/users/userSlice";

const formSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  bio: Yup.string().required("Bio is required"),
  Mobile: Yup.string().required("Bio is required"),
});

export default function CreatePost({
  computedMatch: {
    params: { id },
  },
}) {
    const toast = useToast();
    const dispatch = useDispatch();

    useEffect(() => {
    dispatch(fetchUserDetailsAction(id));
  }, [dispatch, id]);

  //get user from store
  const users = useSelector(state => state.user);
  const { userDetails } = users;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
      Mobile: "",
    },
    onSubmit: (value) => {
      
      dispatch(updateUserAction(value));
     
    },
    validationSchema: formSchema,
  });

  //select state with useSelector hook
  const storeData = useSelector((store) => store?.Courses);
  const { loading, appErr, serverErr } = storeData;

  return (
    <>
      <div className="  w-full my-10">
        <div className=" text-center my-4 text-3xl font-semibold flex justify-center items-center">
          <h1>Update User Profile</h1>
          <img
            src={ProjectIcon}
            className=" w-[60px] h-[60px] object-cover pl-2"
            alt="image"
          />
        </div>

        <div className=" py-6">
          <form onSubmit={formik.handleSubmit}>
            <div className=" mx-auto text-center w-[60%] sm:w-[90%] ">
              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">First Name</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                  placeholder="first-Name"
                />
              </div>
              <div>
                <p className=" text-red-600 text-xs text-left">
                  {formik.touched.firstName && formik.errors.firstName}
                </p>
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Last Name</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                  placeholder="Last-Name"
                />
              </div>
              <div>
                <p className=" text-red-600 text-xs text-left">
                  {formik.touched.lastName && formik.errors.lastName}
                </p>
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Email</p>
                <input
                  className="uk-input rounded-full"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                  placeholder="Email.."
                />
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">bio</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.bio}
                  onChange={formik.handleChange("bio")}
                  onBlur={formik.handleBlur("bio")}
                  placeholder="bio.."
                />
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Mobile No</p>
                <input
                  className="uk-input rounded-full"
                  type="number"
                  value={formik.values.Mobile}
                  onChange={formik.handleChange("Mobile")}
                  onBlur={formik.handleBlur("Mobile")}
                  placeholder="Mobile No.."
                />
              </div>

            </div>

            <div className=" flex justify-center items-center">
              {loading ? (
                <button
                  disabled
                  className=" text-center bg-orange-500 text-white py-3 px-4 mt-5 mx-auto rounded-full"
                >
                  Loading
                </button>
              ) : (
                <button
                  type="submit"
                  
                  onClick={() =>
                    toast({
                      title: `Profile Updated Successfully`,
                      position: "bottom",
                      isClosable: true,
                      status: 'success',
                    })
                  }
                  className="  bg-blue-300 text-white py-3 hover:bg-primeBlue px-3 my-5 rounded-full"
                >
                  Update Profile
                </button>
              )}
            </div>
          </form>
          <div className=" mx-auto text-center pt-6">
            {appErr || serverErr ? (
              <p className=" text-red-600 font-semibold">
                {" "}
                {appErr} {serverErr}{" "}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

// <div className=" border-dashed border-2 border-indigo-600 rounded-full">
// <h1>Image Upload...</h1>
// <Dropzone
// onBlur={formik.handleBlur("image")}
// accept="image/jpeg, image/png"
// onDrop={acceptedFiles => {
//         formik.setFieldValue("image", acceptedFiles[0]);
//       }}
// >
// {({ getRootProps, getInputProps }) => (
//         <div className="container">
//           <div
//             {...getRootProps({
//               className: "dropzone",
//               onDrop: event => event.stopPropagation(),
//             })}
//           >
//             <input {...getInputProps()} />
//             <p className="text-gray-300 text-lg cursor-pointer hover:text-gray-500">
//           <div className=" text-center mx-auto">
//           <span uk-icon="icon: cloud-upload; ratio: 1" className=" text-orange-700 font-semibold"></span>
//           </div>
//             </p>
//           </div>
//         </div>
//       )}

// </Dropzone>
// </div>
