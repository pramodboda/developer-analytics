

import Grid from "@mui/material/Grid";

import LearningProgression from "./LearningProgression";
import InterviewPrepPlan from "./InterviewPrepPlan";
import InterviewKitTracker from "./InterviewKitTracker";
import ApplyForCompaniesList from "./ApplyForCompaniesList";
import CompanyExitChecklist from "./CompanyExitChecklist";

import PortfolioProjectsTracker from "./PortfolioProjectsTracker";


export default function CareerGoalsPage() {
    return (<>
    <Grid container spacing={2}>
        <Grid size={6}><LearningProgression /></Grid>
        <Grid size={6}><InterviewPrepPlan /></Grid>
        <Grid size={12}><InterviewKitTracker/></Grid>

        <Grid size={6}><ApplyForCompaniesList/></Grid>
        <Grid size={6}><CompanyExitChecklist/></Grid>

        <Grid size={6}><PortfolioProjectsTracker/></Grid>
        
    </Grid></>)
}