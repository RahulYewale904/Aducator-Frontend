import { ExclamationIcon } from "@heroicons/react/solid";
import { useDispatch, useSelector } from "react-redux";
import {accVerificationSendTokenAction} from '../../redux/slices/AccountVerification/verification' 


export default function AccountVerificationAlertWarning() {
  const dispatch = useDispatch();

  return (
    <div className="bg-red-500 border-l-4  p-1">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon
            className="h-5 w-5 text-yellow-300"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-200">
            ACCOUNT IS NOT VERIFIED
            <button 
            onClick={() => dispatch(accVerificationSendTokenAction())}
            className=" pl-2 font-medium underline text-white hover:text-gray-200">
              Click To Verify Now.
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
