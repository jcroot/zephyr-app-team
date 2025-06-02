import TeamList from "../components/TeamList";

import "../index.css"; // Ensure Tailwind CSS is imported

const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const teamClickHandler = (person: any) => {
  console.log("Team member clicked:", person);
  // Implement your click handling logic here
};

export const TeamView = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Team</h1>
      <p className="text-gray-600 text-2xl">
        Manage your team members and their roles.
      </p>
      {/* Team management components will go here */}
      <TeamList team={people} />
    </div>
  );
};

export default TeamView;
