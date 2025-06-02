import { Link } from "react-router-dom";
import ArrowLeft from "@heroicons/react/24/solid/ArrowLeftIcon";

const TeamEdit = () => {
  return (
    <div className="flex flex-col gap-4">
      <Link to="/" className="text-blue-500 hover:underline">
        <ArrowLeft className="inline-block w-5 h-5 mr-1" />
        Back
      </Link>
      <h1 className="text-2xl font-bold">Edit Team</h1>
      <p className="text-gray-600 text-2xl">
        Modify team member details and roles.
      </p>
      {/* Team edit components will go here */}
      {/* This is where you would implement the form or UI for editing team members */}
    </div>
  );
};

export default TeamEdit;
