import React from "react";
import "./Login.css";
import SignUpimg from "../assets/images/Login-rafiki.svg";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import { registerUserAction } from "../../redux/slices/users/userSlice";

const formSchema = Yup.object({
  firstName: Yup.string().required("This Field is Required"),
  lastName: Yup.string().required("This Field is Required"),
  email: Yup.string().required("This Field is Required"),
  password: Yup.string().required("This Field is Required"),
});

export default function SignUp() {
  const history = useHistory();

  const dispatch = useDispatch();

  const LooginPage = () => {
    history.push("/Login");
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (value) => {
      //dispatch users
      dispatch(registerUserAction(value));
    },
    validationSchema: formSchema,
  });

  //select state with useSelector hook
  const storeData = useSelector(store => store?.user );
  const {loading , appErr, serverErr , registered} = storeData;

  if(registered){
    history.push("/Login");
  }
    
  return (
    <div>
      <div className="Signup_main">
        <div className="Signup_wrapper">
          <div className="Signup_left">
            <img src={SignUpimg} alt="" />
          </div>

          <div className="Signup_right">
            <div className=" mx-auto py-1 text-center">
              <h2 className=" text-primeBlue font-semibold text-xl">Start Your Awesome Journry Right Now</h2>
              <p
                onClick={LooginPage}
                className=" py-3 cursor-pointer text-gray-600"
              >
                Already have an Account
              </p>
            </div>
            <div className="form_main">
              <form onSubmit={formik.handleSubmit}>
                <div className=" flex justify-between items-center">
                  <div className="Name_form pr-3 flex-col">
                    <div className=" flex items-center">
                      <span className="FOrm_icon" uk-icon="icon: user"></span>
                      <input
                        className="uk-input input_field_signup"
                        value={formik.values.firstName}
                        onChange={formik.handleChange("firstName")}
                        onBlur={formik.handleBlur("firstName")}
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div>
                      <p className=" text-red-600 text-xs">
                        {formik.touched.firstName && formik.errors.firstName}
                      </p>
                    </div>
                  </div>

                  <div className="Name_form pl-3 flex-col">
                    <input
                      className="uk-input input_field_signup"
                      value={formik.values.lastName}
                      onChange={formik.handleChange("lastName")}
                      onBlur={formik.handleBlur("lastName")}
                      type="text"
                      placeholder="Last Name"
                    />
                    <div>
                      <p className=" text-red-600 text-xs">
                        {formik.touched.lastName && formik.errors.lastName}
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" flex-col">
                  <div className=" flex items-center">
                    <span className="FOrm_icon" uk-icon="icon: mail"></span>
                    <input
                      className="uk-input input_field_signup"
                      value={formik.values.email}
                      onChange={formik.handleChange("email")}
                      onBlur={formik.handleBlur("email")}
                      type="email"
                      placeholder="Enter Email"
                    />
                  </div>

                  <div>
                    <p className=" text-red-600 text-xs">
                      {formik.touched.email && formik.errors.email}
                    </p>
                  </div>
                </div>

                <div className=" flex-col">
                  <div className=" flex items-center">
                    <span className="FOrm_icon" uk-icon="icon: lock"></span>
                    <input
                      className="uk-input input_field_signup"
                      value={formik.values.password}
                      onChange={formik.handleChange("password")}
                      onBlur={formik.handleBlur("password")}
                      type="password"
                      placeholder="Enter password"
                    />
                  </div>

                  <div>
                    <p className=" text-red-600 text-xs">
                      {formik.touched.password && formik.errors.password}
                    </p>
                  </div>
                </div>

                {/* <div className=" flex-col">
                  <div className=" flex items-center">
                    <span className="FOrm_icon" uk-icon="icon: lock"></span>
                    <input
                      className="uk-input input_field_signup"
                      type="text"
                      placeholder="Re-Enter Password"
                    />
                  </div>

                  <div>
                    <p className=" text-red-600 text-xs">
                      {formik.touched.firstName && formik.errors.firstName}
                    </p>
                  </div>
                </div> */}


                <div className=" flex justify-between items-center">
                {
                  loading ?
                  <button
                  disabled
                  className=" text-center bg-orange-500 text-white py-3 px-4 mt-5 mx-auto rounded-full"
                >
                  loading...
                </button> :
                  <button
                  type="submit"
                  className=" text-center bg-primeBlue text-white py-3 px-4 mt-5 mx-auto rounded-full"
                >
                  Register Now
                </button>
                }
                </div>
              </form>

              <div className=" mx-auto text-center pt-6">
                  { appErr || serverErr ? <p className=" text-red-600 font-semibold"> {appErr} {serverErr} </p> : null}
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
