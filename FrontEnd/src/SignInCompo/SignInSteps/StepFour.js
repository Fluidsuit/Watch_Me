import { CheckCircleIcon, CheckIcon } from "@heroicons/react/24/outline";

function StepFour({ onNext, password }) {


    return (
        <>
            <div className="flex items-center justify-center ">
                <div className="flex flex-col items-left justify-left h-auto w-[60vh] p-[1em]">
                    <CheckCircleIcon className="text-red-500 w-[3em]" />
                    <p className="text-gray-700">STEP 3 OF 4</p>
                    <h1 className="font-bold text-[2em]">Choose your plan</h1>

                    <ul className="space-y-4 mt-3 pl-2 text-lg">
                        <li className="flex items-center">
                            <CheckIcon className="text-red-500 w-5 h-5 mr-2" />
                            No commitments, cancel anytime.
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-red-500 w-5 h-5 mr-2" />
                            Everything on Netflix for one low price
                        </li>
                        <li className="flex items-center">
                            <CheckIcon className="text-red-500 w-5 h-5 mr-2" />
                            No ads, no additional fees. Ever.
                        </li>
                    </ul>

                    <button onClick={onNext}
                        className="bg-red-600 m-1 mt-4 hover:bg-red-700 text-white py-3 px-6 rounded text-[1em] w-full font-medium  ">
                        Next
                    </button>
                </div>
            </div>
        </>
    );

}

export default StepFour;