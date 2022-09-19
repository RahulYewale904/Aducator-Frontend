import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import {
  fetchPostDetailsAction,
  deletePostAction,
} from "../../redux/slices/posts/CoursePost";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import loadingSpinner from "../loading/loadingSpinner";
import CommentsList from "../ProjectComment/CommentsList";
import ProjectComments from "../ProjectComment/AddComment";

const PostDetails = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();

  const post = useSelector((state) => state?.Courses);
  const { postDetails, loading, appErr, serverErr } = post;

  //comment
  const comment = useSelector((state) => state.comment);
  const { commentCreated } = comment;

  useEffect(() => {
    dispatch(fetchPostDetailsAction(id));
  }, [id, dispatch, commentCreated]);

  //Get login user
  const user = useSelector((state) => state.user);
  const {
    userAuth: { _id },
  } = user;

  const isCreatedBy = postDetails?.user?._id === _id;

  return (
    <>
      {loading ? (
        <div className="h-screen">
          <loadingSpinner />
        </div>
      ) : appErr || serverErr ? (
        <h1 className="h-screen text-red-600 text-xl">
          {serverErr} {appErr}
        </h1>
      ) : (
        <section className="">
          <div className="">
            {/* Post Image */}

            <div className=" text-center">
              {/* User */}

              <div classname=" flex items-center justify-center mx-auto">
                <img
                  className=" mx-auto w-20 lg:w-24 h-20 lg:h-24 rounded-full"
                  src={postDetails?.user?.profilePhoto}
                  alt=""
                />
              </div>
              <div className="text-justify w-[60%] mx-auto sm:w-[90%]">
                <Link to={`/profile/${postDetails?.user?._id}`}>
                  <h4 className="mb-1 text-2xl font-bold text-gray-700">
                    <span className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-200 to-orange-600">
                      {postDetails?.user?.firstName}{" "}
                      {postDetails?.user?.lastName}{" "}
                    </span>
                  </h4>
                </Link>

                <h2 className=" my-3 text-3xl text-black font-bold font-heading">
                  {postDetails?.title}
                </h2>
                <p className="text-gray-500">
                  {moment(postDetails?.createdAt).format("MMM Do YY")}
                </p>

                <h2 className=" my-3  text-black ">
                  category:{" "}
                  {!postDetails?.category
                    ? "Not Available"
                    : postDetails?.category}
                </h2>

                <h2 className=" my-3  text-black ">
                  <p className=" text-xl font-semibold">Description:</p>
                  <p className=" text-justify">
                    {" "}
                    {!postDetails?.description
                      ? "Not Available"
                      : postDetails?.description}
                  </p>
                </h2>

                <h2 className=" my-3  text-blue-600 ">
                  <p className=' text-gray-600 font-semibold'>Course Link-1:</p>
                  <a href={postDetails?.courselink} target="_blank" >{!postDetails?.courselink
                    ? "Not Available"
                    : postDetails?.courselink}</a>
                </h2>

                <h2 className=" my-3  text-blue-600 ">
                  <p className=' text-gray-600 font-semibold'>Course Link-2:</p>
                  <a href={postDetails?.courselink1} target="_blank" >{!postDetails?.courselink1
                    ? "Not Available"
                    : postDetails?.courselink1}</a>
                </h2>

                <h2 className=" my-3  text-blue-600 ">
                  <p className=' text-gray-600 font-semibold'>Course Link-3:</p>
                  <a href={postDetails?.courselink2} target="_blank" >{!postDetails?.courselink2
                    ? "Not Available"
                    : postDetails?.courselink2}</a>
                </h2>
              </div>
            </div>
          </div>
          <div className=" my-5 mx-auto">
            <ProjectComments projectId={id} />
          </div>
          <div className="flex justify-center  items-center">
            {/* <CommentsList comments={post?.comments} postId={post?._id} /> */}
            <CommentsList projectComment={postDetails?.projectComment} />
          </div>
        </section>
      )}
    </>
  );
};

export default PostDetails;
