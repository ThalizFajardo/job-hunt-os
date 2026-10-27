import { useState } from "react";
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

const dummiesApplications: Application[] = [
  {
    id: "app-001",
    company: "OpenAI",
    role: "Frontend Developer",
    stage: "technical",
  },
  {
    id: "app-002",
    company: "Mercado Libre",
    role: "React Developer",
    stage: "screening",
  },
  {
    id: "app-003",
    company: "Globant",
    role: "Frontend Engineer",
    stage: "applied",
  },
  {
    id: "app-004",
    company: "Kavak",
    role: "Software Engineer",
    stage: "rejected",
  },
];

const ApplicationBoard = () => {
  
  
  
    const [application, setApplication] =
    useState<Application>(dummiesApplications);

 const handleDragEnd = (event: DragEndEvent) => {
  const { active, over } = event;

  if (!over) return;

  const applicationId = active.id.toString();
  const newStage = over.id as ApplicationStage;

  setApplication((prev) =>
    prev.map((application) =>
      application.id === applicationId
        ? { ...application, stage: newStage }
        : application
    )
  );

  window.dispatchEvent(
    new CustomEvent<ApplicationStageChangedPayload>(
      "application:stage-changed",
      {
        detail: {
          applicationId,
          stage: newStage,
        },
      }
    )
  );
};

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex">
       {stages.map((stage) => (
          <ApplicationColumn
            key={stage}
            stage={stage}
            applications={application.filter(
              (application) => application.stage === stage
            )}
          />
        ))}
      </div>
    </DndContext>
  );
};

export default ApplicationBoard;
