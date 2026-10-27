import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AplicationDetail from "./components/AplicationDetail";
import type {
  ApplicationStageChangedPayload,
  Application,
  ApplicationStage,
} from "@job-hunt/contracts";
import ApplicationBoard from "./components/ApplicationBoard";

const ApplicationsApp = () => {


  return (
    <div>
      <Routes>
        <Route path="/:id" element={<AplicationDetail />} />
      </Routes>
      <ApplicationBoard />
   
    </div>
  );
};

export default ApplicationsApp;
