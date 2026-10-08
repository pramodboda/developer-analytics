

import Grid from "@mui/material/Grid";

import LearningProgression from "./LearningProgression";
import InterviewPrepPlan from "./InterviewPrepPlan";
import InterviewKitTracker from "./InterviewKitTracker";


export default function CareerGoalsPage() {
    return (<>
    <Grid container spacing={2}>
        <Grid size={6}><LearningProgression /></Grid>
        <Grid size={6}><InterviewPrepPlan /></Grid>
        <Grid size={12}><InterviewKitTracker/></Grid>
    </Grid></>)
}