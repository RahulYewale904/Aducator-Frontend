import { Link } from "react-router-dom";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import Moment from "react-moment";
import { deleteCommentAction } from "../../redux/slices/Projectcomments/commentSlices";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

export default function ProjectCommentList({ projectComment }) {
  const dispatch = useDispatch();
  const toast = useToast();
  return (
    <div>
      <ul className="divide-y w-[80%] mx-auto divide-gray-700 p-3 mt-5">
        <div className="text-gray-600 py-2">
          {" "}
          Total Comment: {projectComment?.length}
        </div>
        <>
          {projectComment?.length <= 0 ? (
            <h1 className="text-red-500 text-lg text-center">
              No projectComment
            </h1>
          ) : (
            projectComment?.map((comment) => (
              <>
                <li className="py-4  w-full">
                  <div className="flex space-x-3">
                    <img
                      className="h-6 w-6 rounded-full"
                      src={comment?.user?.profilePhoto}
                      alt=""
                    />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-blue-600">
                          {comment?.user?.firstName} {comment?.user?.lastName}
                        </h3>
                        <p className=" text-bold text-green-600 text-base ml-5">
                          {/* <Moment fromNow ago>
                      {comment?.createdAt}
                    </Moment> */}

                          <Moment fromNow Ago>
                            {comment?.createdAt}
                          </Moment>
                        </p>
                      </div>
                      <p className="text-sm text-gray-600">
                        {comment?.description}
                      </p>
                      {/* Check if is the same user created this comment */}

                      <p class="flex">
                        <button
                          class="ml-3"
                          onClick={() =>
                            dispatch(deleteCommentAction(comment?._id)) &&
                            toast({
                              title: `Comment Deleted`,
                              position: "bottom",
                              isClosable: true,
                              status: "info",
                            })
                          }
                        >
                          <TrashIcon class="h-5 mt-3 text-red-600" />
                        </button>
                      </p>
                    </div>
                  </div>
                </li>
              </>
            ))
          )}
        </>
      </ul>
    </div>
  );
}
