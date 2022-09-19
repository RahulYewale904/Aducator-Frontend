import { UploadIcon } from "@heroicons/react/outline";
import Dropzone from "react-dropzone";
import { useFormik } from "formik";
import * as Yup from "yup";
import { uploadProfilePhototAction } from "../../redux/slices/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

const formSchema = Yup.object({
  image: Yup.string().required("Image is required"),
});

export default function UploadProfilePhoto() {
  const toast = useToast();

  //formik
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      image: "",
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(uploadProfilePhototAction(values));
    },
    validationSchema: formSchema,
  });
  //store data
  const users = useSelector((state) => state?.user);
  const { profilePhoto, loading, appErr, serverErr, userAuth } = users;
  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-600">
          Upload profile photo
        </h2>
        {/* Displya err here */}
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-blue-200 rounded-lg py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6 w-[50%] mx-auto text-center sm:w-[80%]"
            onSubmit={formik.handleSubmit}
          >
            {/* Image container here thus Dropzone */}
            <section className=" border-dashed border-2 border-indigo-600 rounded-lg">
              <Dropzone
                onBlur={formik.handleBlur("image")}
                accept="image/jpeg, image/png"
                onDrop={(acceptedFiles) => {
                  formik.setFieldValue("image", acceptedFiles[0]);
                }}
              >
                {({ getRootProps, getInputProps }) => (
                  <div className="container">
                    <div
                      {...getRootProps({
                        className: "dropzone",
                        onDrop: (event) => event.stopPropagation(),
                      })}
                    >
                      <input {...getInputProps()} />
                      <p className="text-black py-2 text-lg cursor-pointer hover:text-gray-500">
                        Click here to select image
                      </p>
                    </div>
                  </div>
                )}
              </Dropzone>
            </section>

            <div className="text-red-500">
              {formik.touched.image && formik.errors.image}
            </div>
            <p className="text-sm text-gray-500">
              PNG, JPG, GIF minimum size 400kb uploaded only 1 image
            </p>

            <div>
              <button
                type="submit"
                className="inline-flex justify-center w-full px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                <UploadIcon
                  className="-ml-1 mr-2 h-5  text-gray-400"
                  aria-hidden="true"
                />
                <span
                  onClick={() =>
                    toast({
                      title: `Profile Photo Uploaded`,
                      position: "bottom",
                      isClosable: true,
                      status: 'success',
                    })
                  }
                >
                  Upload Photo
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
