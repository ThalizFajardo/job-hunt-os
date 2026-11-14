export type ApplicationStage =
  | "applied"
  | "screening"
  | "technical"
  | "offer"
  | "rejected";



export  type Application = {
  id: string;
  company: string;
  role: string;
  stage: ApplicationStage;
};
