

import Grid from "@mui/material/Grid";

import LearningProgression from "./LearningProgression";
import InterviewPrepPlan from "./InterviewPrepPlan";


export default function CareerGoals() {
    return (<><Grid container spacing={2}><Grid size={6}><LearningProgression /></Grid><Grid size={6}><InterviewPrepPlan /></Grid></Grid></>)
}