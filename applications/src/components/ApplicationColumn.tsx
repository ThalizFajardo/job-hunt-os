import { useDroppable } from "@dnd-kit/core";
import type { Application, ApplicationStage } from "@job-hunt/contracts";
import ApplicationCard from "./ApplicationCard";

type Props = {
  stage: ApplicationStage;
  applications: Application[];
};

const ApplicationColumn = ({ stage, applications }: Props) => {
  const { setNodeRef } = useDroppable({ id: stage });

  return (
    <section
      ref={setNodeRef}
      className="min-h-[500px] rounded-xl bg-gray-50 p-4 border"
    >
      <h2>{stage}</h2>
      {applications.map((application) => (
        <ApplicationCard key={application.id} application={application} />
      ))}
    </section>
  );
};

export default ApplicationColumn;
