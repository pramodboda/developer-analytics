import { companyExitChecklist } from "../../../data/companyExitChecklist"


import Typography from "@mui/material/Typography";


export default function CompanyExitChecklist() {
    return (<><Typography variant="h6">Company Exit Checklist</Typography><ul>{companyExitChecklist?.map((cl, index) => (<li key={cl}>{cl}</li>))}</ul></>)
}