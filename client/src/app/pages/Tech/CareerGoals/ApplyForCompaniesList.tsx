import DataCard from "../../../components/ProUI/Cards/DataCard/DataCard";
import Typography from "@mui/material/Typography";

import {IT_Companies} from "../../../data/ITCompanies";


export default function ApplyForCompaniesList(){
    return (
        <DataCard>
            <Typography variant="h6">Level 1</Typography>
            <ul>{IT_Companies.filter((company) => company.level===1).map((company) => <li>{company.company_name}</li>)}</ul>
            </DataCard>
    )
}