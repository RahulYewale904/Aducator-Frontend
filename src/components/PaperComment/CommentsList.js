import { Link } from "react-router-dom";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import Moment from "react-moment";
import { deleteCommentAction } from "../../redux/slices/PaperComments/commentSlices";
import { useDispatch, useSelector } from "react-redux";

export default function ProjectCommentList({ paperComment }) {
  const dispatch = useDispatch();
  return (
    <div>
      <ul className="divide-y w-[80%] mx-auto divide-gray-700 p-3 mt-5">
        <div className="text-gray-600 py-2"> Total Comment: {paperComment?.length}</div>
        <>
          {paperComment?.length <= 0 ? (
            <h1 className="text-red-500 text-lg text-center">No paperComment</h1>
          ) : (
            paperComment?.map(comment => (
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
                        <Link class="p-3">
                          <PencilAltIcon class="h-5 mt-3 text-purple-600" />
                        </Link>
                        <button class="ml-3" onClick={() =>
                            dispatch(deleteCommentAction(comment?._id))
                          }>
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
