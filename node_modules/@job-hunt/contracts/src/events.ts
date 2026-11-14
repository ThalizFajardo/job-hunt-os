import { ApplicationStage } from "./applications";

export type ApplicationStageChangedPayload ={
    applicationId : string; 
    stage : ApplicationStage
}