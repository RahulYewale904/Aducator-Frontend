import ProjectIcon from "../assets/images/mailing.gif";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { sendMailAction } from "../../redux/slices/EmailMsg/emailSlices";

const formSchema = Yup.object({
  recipientEmail: Yup.string().required("Recipent Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

export default function CreatePost({ location: { state } }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      recipientEmail: state?.email,
      subject: "",
      message: "",
    },
    onSubmit: (value) => {
      
      console.log(value);
      //dispatch users
      dispatch(sendMailAction(value));
     
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
          <h1>SEND EMAIL</h1>
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
                <p className=" pb-2.5 text-primeBlue">Recipient Email</p>
                <input
                  value={formik.values.recipientEmail}
                  onChange={formik.handleChange("recipientEmail")}
                  onBlur={formik.handleBlur("recipientEmail")}
                  disabled
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="uk-input rounded-full"
                />
              
              </div>

              <div>
                <p className=" text-red-600 text-xs text-left">
                  {formik.touched.recipient && formik.errors.recipient}
                </p>
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Mail Subject</p>

                <input
                value={formik.values.subject}
                onChange={formik.handleChange("subject")}
                onBlur={formik.handleBlur("subject")}
                id="subject"
                name="subject"
                type="text"
                autoComplete="subject"
                className="uk-input rounded-full"
              />

              
              </div>

              <div>
                <p className=" text-red-600 text-xs text-left">
                  {formik.touched.subject && formik.errors.subject}
                </p>
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">message</p>
                <textarea
                value={formik.values.message}
                onChange={formik.handleChange("message")}
                onBlur={formik.handleBlur("message")}
                rows="5"
                cols="10"
                className="uk-textarea rounded-lg"
                type="text"
              ></textarea>

             
              </div>
              <div>
                <p className=" text-red-600 text-xs text-left">
                  {formik.touched.message && formik.errors.message}
                </p>
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
                  className="  bg-blue-300 text-white py-3 hover:bg-primeBlue px-3 my-5 rounded-full"
                >
                  Send Mail
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
