// import { PlusCircleIcon, BookOpenIcon } from "@heroicons/react/solid";
import react , {useEffect} from 'react';
import {detailCategoriesAction , updateCategoriesAction , deleteCategoriesAction} from '../../redux/slices/catrgory/categorySlice'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../loading/loadingSpinner";


//Form schema
const formSchema = Yup.object({
  title: Yup.string().required("Field is required"),
});

const UpdateCategory = ({computedMatch:{params:{id}}}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailCategoriesAction(id));
  }, [])
  

//get data from store
const state = useSelector(state => state?.category);
const { loading, appErr, serverErr, category } = state;

const formik = useFormik({
    enableReinitialize:true,
    initialValues: {
      title: category?.title,
    },
    onSubmit: values => {
    //   //dispath the action
    dispatch(updateCategoriesAction({ title: values.title, id }));
    },
    validationSchema: formSchema,
  });


  return (
    <div className=" h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {/* <BookOpenIcon className="mx-auto h-12 w-auto" /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Update Category
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-indigo-600 hover:text-indigo-500">
              These are the categories user will select when creating a post
            </p>
          </p>
        </div>
        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
        {appErr || serverErr ? (
                <h2 className="text-red-500 text-center text-lg">
                  {serverErr} {appErr}
                </h2>
              ) : null}
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Name
              </label>
              {/* Title */}
              <input
                type="text"
                value={formik.values.title}
                onChange={formik.handleChange("title")}
                onBlur={formik.handleBlur("title")}
                autoComplete="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-center focus:z-10 sm:text-sm"
                placeholder="New Category"
              />
           
               <div className=" text-red-700"> {formik.touched.title && formik.errors.title}</div>
            </div>
          </div>

          <div>
            <div className=" mx-auto text-center">
            {
                  loading ?
                  <div className=" mx-auto text-center">Please wait...</div> :
                <div className=' flex justify-center sm:flex-col'>
                  <button type="submit" className=" mr-4 sm:mb-4 sm:mr-0 uk-button bg-green-400 hover:bg-green-700 rounded-full text-white font-semibold py-1">Update Category</button>
                  <button
                  onClick={() => dispatch(deleteCategoriesAction(id))}
                  type="submit"
                  className="uk-button bg-red-400 hover:bg-red-700 rounded-full text-white font-semibold py-1">
                  Delete Category
                </button>
                </div>
                }
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCategory;
