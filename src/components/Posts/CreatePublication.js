import ProjectIcon from "../assets/images/document.gif";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { createPostAction } from "../../redux/slices/posts/PunlicationPost";
import ProjectCategoryDropdown from "../PaperCategory/ProjectDropdown";

const formSchema = Yup.object({
  title: Yup.string().required("Project Title is required"),
  abstract: Yup.string().required("Project Abstract is required"),
  keyword: Yup.string(),
  Language: Yup.string(),
  conclusion: Yup.string(),
  refrences: Yup.string(),
  Authors:Yup.string(),
  category: Yup.object().required("Category is required"),
  
});

export default function CreatePost() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      abstract: "",
      keyword: "",
      introduction: "",
      conclusion: "",
      refrences: "",
      category: "",
      Authors:'',
      publicationlink:"",
      
    },
    onSubmit: value => {
      const data = {
        category: value?.category?.label,
        title: value?.title,
        abstract: value?.abstract,
        introduction: value?.introduction,
        refrences: value?.refrences,
        keyword: value?.keyword,
        conclusion: value?.conclusion,
        Authors:value?.Authors,
        publicationlink:value?.publicationlink,
      };
      console.log(value);
      //dispatch users
      dispatch(createPostAction(data));
    },
    validationSchema: formSchema,
  });

  //select state with useSelector hook
  const storeData = useSelector((store) => store?.PublicationPost);
  const { loading, appErr, serverErr } = storeData;

  return (
    <>
      <div className="  w-full my-10">
        <div className=" text-center my-4 text-3xl font-semibold flex justify-center items-center">
          <h1>UPLOAD PAPER</h1>
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
                <p className=" pb-2.5 text-primeBlue">Paper Title..</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.title}
                  onChange={formik.handleChange("title")}
                  onBlur={formik.handleBlur("title")}
                  placeholder="Enter Paper Title.."
                />
              </div>
              <div>
                <p className=" text-red-600 text-xs text-left">
                  {formik.touched.title && formik.errors.title}
                </p>
              </div>

              <div>
                <ProjectCategoryDropdown
                  value={formik.values.category?.label}
                  onChange={formik.setFieldValue}
                  onBlur={formik.setFieldTouched}
                  error={formik.errors.category}
                  touched={formik.touched.category}
                />
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Abstract</p>
                <textarea
                  class="uk-textarea rounded-lg"
                  rows="5"
                  value={formik.values.abstract}
                  onChange={formik.handleChange("abstract")}
                  onBlur={formik.handleBlur("abstract")}
                  placeholder="Abstract"
                ></textarea>
              </div>
              <div>
                <p className=" text-red-600 text-xs text-left">
                  {formik.touched.abstract && formik.errors.abstract}
                </p>
              </div>

              <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">keywords</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.keyword}
                  onChange={formik.handleChange("keyword")}
                  onBlur={formik.handleBlur("keyword")}
                  placeholder="keywords.."
                />
              </div>

              <div className=" my-6 text-left">
              <p className=" pb-2.5 text-primeBlue">Authors</p>
              <input
                className="uk-input rounded-full"
                type="text"
                value={formik.values.Authors}
                onChange={formik.handleChange("Authors")}
                onBlur={formik.handleBlur("Authors")}
                placeholder="Authors.."
              />
            </div>

              <div className=" my-6 text-left">
              <p className=" pb-2.5 text-primeBlue">Introduction</p>

              <textarea
              class="uk-textarea rounded-lg"
              rows="5"
              value={formik.values.introduction}
              onChange={formik.handleChange("introduction")}
              onBlur={formik.handleBlur("introduction")}
              placeholder="Introduction.."
            ></textarea>

            
            </div>
            
              

              <div className=" my-6 text-left">
              <p className=" pb-2.5 text-primeBlue">Conclusion</p>
              <input
                className="uk-input rounded-full"
                type="text"
                value={formik.values.conclusion}
                onChange={formik.handleChange("conclusion")}
                onBlur={formik.handleBlur("conclusion")}
                placeholder="Conclusion.."
              />
            </div>

            <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Refrences</p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.refrences}
                  onChange={formik.handleChange("refrences")}
                  onBlur={formik.handleBlur("refrences")}
                  placeholder="Refrences.."
                />
              </div>

            <div className=" my-6 text-left">
                <p className=" pb-2.5 text-primeBlue">Publication Link </p>
                <input
                  className="uk-input rounded-full"
                  type="text"
                  value={formik.values.publicationlink}
                  onChange={formik.handleChange("publicationlink")}
                  onBlur={formik.handleBlur("publicationlink")}
                  placeholder="Publication.."
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
                 
                  className="  bg-blue-300 text-white py-3 hover:bg-primeBlue px-3 my-5 rounded-full"
                >
                  Submit
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