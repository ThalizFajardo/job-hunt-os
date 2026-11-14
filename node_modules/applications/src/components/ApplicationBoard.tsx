import { type Dispatch, type SetStateAction } from "react";
import type {
  ApplicationStageChangedPayload,
  Application,
  ApplicationStage,
} from "@job-hunt/contracts";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import ApplicationColumn from "./ApplicationColumn";

const stages = [
  "applied",
  "screening",
  "technical",
  "offer",
  "rejected",
] as const;



type Props = {
  application: Application[];
  setApplication :Dispatch<SetStateAction<Application[]>>;
};

const ApplicationBoard = ({ application,setApplication }: Props) => {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const applicationId = active.id.toString();
    const newStage = over.id as ApplicationStage;

    setApplication((prev) =>
      prev.map((application) =>
        application.id === applicationId
          ? { ...application, stage: newStage }
          : application,
      ),
    );

    window.dispatchEvent(
      new CustomEvent<ApplicationStageChangedPayload>(
        "application:stage-changed",
        {
          detail: {
            applicationId,
            stage: newStage,
          },
        },
      ),
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-5 gap-3">
        {stages.map((stage) => (
          <ApplicationColumn
            key={stage}
            stage={stage}
            applications={application.filter(
              (application) => application.stage === stage,
            )}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default ApplicationBoard;
