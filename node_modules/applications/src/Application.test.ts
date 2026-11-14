import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


const application = {
  id: "app-001",
  company: "OpenAI",
  role: "Frontend Developer",
  stage: "technical",
};

test("render list ", () => {
render(<Application)  

  expect().toBeInTheDocument();
});
