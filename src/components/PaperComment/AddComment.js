import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createCommentAction } from "../../redux/slices/PaperComments/commentSlices";

//Form schema
const formSchema = Yup.object({
  description: Yup.string().required("Comment is required"),
});

const AddComment = ({ projectId }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      description: "",
    },
    onSubmit: values => {
      const data = {
        projectId,
        description: values?.description,
      };
      dispatch(createCommentAction(data));
    },
    validationSchema: formSchema,
  });
  return (
    <div className="flex flex-col justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="mt-1 flex max-w-sm m-auto"
      >
        <input
          onBlur={formik.handleBlur("description")}
          value={formik.values.description}
          onChange={formik.handleChange("description")}
          type="text"
          name="text"
          id="text"
          className=" px-3 mx-3 border-2"
          placeholder="Add New comment...."
        />

        <button
          type="submit"
          className="inline-flex items-center px-2.5 py-1.5 bg-indigo-600 rounded-lg text-white"
        >
          Submit
        </button>
      </form>
      <div className="text-red-400 mb-2 mt-2">
        {formik.touched.description && formik.errors.description}
      </div>
    </div>
  );
};

export default AddComment;
