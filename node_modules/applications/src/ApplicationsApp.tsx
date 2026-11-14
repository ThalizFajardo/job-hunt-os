import { Route, Routes } from "react-router-dom";
import AplicationDetail from "./components/AplicationDetail";
import ApplicationBoard from "./components/ApplicationBoard";
import AddAplication from "./components/AddAplication";
import "./index.css";
import { useEffect, useState } from "react";
import type { Application } from "@job-hunt/contracts";

const ApplicationsApp = () => {
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

  const [applications, setApplications] = useState<Application[]>(()=>{
    const saved = localStorage.getItem('applications')

    return saved ? JSON.parse(saved) : dummiesApplications
  });

  

  const handleAddAplication = (newApplication: Application) => {
    setApplications((prev) => [...prev, newApplication]);
  };

  useEffect(()=>{
    localStorage.setItem('applications', JSON.stringify(applications))
  },[applications])



  return (
    <div>
      <Routes>
        <Route path="/:id" element={<AplicationDetail />} />
      </Routes>
      <AddAplication onAdd={handleAddAplication} />
      <ApplicationBoard application={applications} setApplication={setApplications} />
    </div>
  );
};

export default ApplicationsApp;
