import { useEffect, useState } from "react";

const AlertsSection = ({ carNumber, carLetter, personSSN }) => {
  const [isPersonOk, setIsPersonOk] = useState(true);
  const [isCarOk, setIsCarOk] = useState(true);

  return (
    <div className="w-full p-8 flex flex-row justify-around gap-4">
    {/* Car Section */}
    <div className="flex-1 flex flex-col gap-4 justify-center items-center">
    <h2 className="text-3xl">Car</h2>
    <AlertCircle valid={isCarOk} />
    </div>
    {/* Person Section */}
    <div className="flex-1 flex flex-col gap-4 justify-center items-center">
    <h2 className="text-3xl">Person</h2>
    <AlertCircle valid={false} />
    </div>
    </div>
  );
};

const AlertCircle = ({ valid }) => {
  return (
    <div className={`w-10 h-10 rounded-full ${valid ? 'bg-green-500' : 'bg-red-600 animate-pulse'}`}></div>
  );
};

export default AlertsSection;
