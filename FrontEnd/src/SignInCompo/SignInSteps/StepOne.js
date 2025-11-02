import { DeviceTabletIcon, DevicePhoneMobileIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

function StepOne({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent px-4 text-center">
      
      {/* Device Icons */}
      <div className="flex space-x-6 text-red-600 mb-6">
        <ComputerDesktopIcon className="w-[13vh] h-auto" />
        <DeviceTabletIcon className="w-[9vh] h-auto" />
        <DevicePhoneMobileIcon className="w-[7vh] h-auto" />
      </div>

      {/* Step Info */}
      <p className="text-black text-sm tracking-wide mb-2">STEP 1 OF 4</p>
      <h1 className="text-[2em] font-semibold mb-4">Finish setting up your account</h1>
      <p className="text-gray-700 text-lg mb-6">
        Netflix is personalised for you. <br />
        Create a password to watch on any device at any time.
      </p>

      {/* Button */}
      <button
        onClick={onNext}
        className="bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded w-full max-w-xs font-medium"
      >
        Next
      </button>
    </div>
  );
}

export default StepOne;
