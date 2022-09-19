import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import {
  fetchPostDetailsAction,
  deletePostAction,
} from "../../redux/slices/posts/ProjectPosts";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import loadingSpinner from "../loading/loadingSpinner";
import CommentsList from "../ProjectComment/CommentsList";
import ProjectComments from "../ProjectComment/AddComment";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

const PostDetails = ({
  match: {
    params: { id },
  },
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const post = useSelector((state) => state?.ProjectPost);
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
        <section className=" w-[70%] mx-auto  sm:w-full">
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
              <div className="text-center">
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
                  Abstract:{" "}
                  {!postDetails?.abstract
                    ? "Not Available"
                    : postDetails?.abstract}
                </h2>

                <h2 className=" my-3 text-black ">
                  languages: {postDetails?.languages}
                </h2>

                <h2 className=" my-3  text-black ">
                  keywords:{" "}
                  {!postDetails?.keywords
                    ? "Not Available"
                    : postDetails?.keywords}
                </h2>

                <h2 className=" my-3  text-black ">
                  category:{" "}
                  {!postDetails?.category
                    ? "Not Available"
                    : postDetails?.category}
                </h2>

                <h2 className=" my-3  text-black ">
                  Refrences:{" "}
                  {!postDetails?.refrences
                    ? "Not Available"
                    : postDetails?.refrences}
                </h2>

                <h2 className=" my-3  text-black ">
                  Projectlink:{" "}
                  <a href={postDetails?.projectlink} target="_blank">
                  {!postDetails?.projectlink
                    ? "Not Available"
                    : postDetails?.projectlink}
                  </a>
                 
                </h2>
              </div>
            </div>
          </div>
          {isCreatedBy ? (
            <div className="text-center">
              <button
                onClick={onOpen}
                //
                class="ml-3"
              >
                <TrashIcon class="h-8 mt-3 text-red-600" />
              </button>
            </div>
          ) : null}

          <div className=" my-5 mx-auto">
            <ProjectComments projectId={id} />
          </div>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Are you Sure you want to Delete this Post
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => dispatch(deletePostAction(postDetails?._id))}
                >
                  Delete
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>

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
