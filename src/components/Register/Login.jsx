import React from "react";
import "./Login.css";
import SignUpimg from "../assets/images/Login-cuate.svg";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { loginUserAction } from "../../redux/slices/users/userSlice";
import LoadingSpinner from "../loading/loadingSpinner";

const formSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const LooginPage = () => {
    history.push("/Signup");
  };

  const ForgotPassword = () => {
    history.push("/ForgotPassword");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: value => {
      //dispatch users
      dispatch(loginUserAction(value));
    },
    validationSchema: formSchema,
  });

//redirect
const store =  useSelector(state => state?.user)   
const { userAuth, loading, serverErr, appErr } = store;

if(userAuth){
  history.push("/projects");
}
  return (
    <div>
      <div className="Signup_main">
        <div className="Signup_wrapper">
          <div className="Signup_left" style={{ background: " #bb8fce " }}>
            <img src={SignUpimg} alt="" />
          </div>

          <div className="Signup_right">
            <div className=" mx-auto py-1 text-center">
              <h2 className=" text-primeVoilet font-semibold text-xl">
                Welcome Back
              </h2>
              <p
                onClick={LooginPage}
                className=" py-3 cursor-pointer text-gray-600"
              >
                Create New Account
              </p>
            </div>

            <div className=" mx-auto text-center py-3">
                  { appErr || serverErr ? <p className=" text-red-600 font-semibold">  {appErr} </p> : null}
                </div>

            <div className="form_main">
              <form onSubmit={formik.handleSubmit}>
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
                <div className=" flex justify-center items-center w-full">
                {
                  loading ?
                  <LoadingSpinner /> :
                  <button
                  type="submit"
                  className=" text-center bg-primeVoilet text-white py-3 px-4 mt-5 mx-auto rounded-full"
                >
                  Log-In
                </button>
                }
                </div>
              </form>


              <div className="Forgot_password">
                <hr className="uk-divider-icon" />
                <h5 onClick={ForgotPassword} className=" font-bold">
                  Forgot Password
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
