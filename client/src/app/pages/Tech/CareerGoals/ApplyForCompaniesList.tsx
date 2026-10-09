import DataCard from "../../../components/ProUI/Cards/DataCard/DataCard";
import Typography from "@mui/material/Typography";

import { IT_Companies } from "../../../data/ITCompanies";


export default function ApplyForCompaniesList() {
    return (
        <DataCard>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Which roles should you apply for?</Typography>
            <ul><li>First choice: Senior Frontend Engineer</li>
                <li>Second choice: Senior Software Engineer — Frontend / Full Stack</li>
                <li>Third choice: AI Application Engineer</li></ul>

            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Level 1</Typography>
            <ul>{IT_Companies.filter((company) => company.level === 1).map((company) => <li>{company.company_name}</li>)}</ul>

            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Level 2</Typography>
            <ul>{IT_Companies.filter((company) => company.level === 2).map((company) => <li>{company.company_name}</li>)}</ul>

            <Typography variant="body1" sx={{ fontWeight: "bold" }}>Level 4</Typography>
            <ul>{IT_Companies.filter((company) => company.level === 4).map((company) => <li>{company.company_name}</li>)}</ul>

            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                For every company, search its official portal and LinkedIn using these exact phrases:</Typography>

            <ul>

                <li>Senior Frontend Engineer React TypeScript Hyderabad</li>
                <li>Senior Software Engineer Frontend Hyderabad</li>
                <li>Full Stack Engineer React Node.js Hyderabad</li>
                <li>Senior UI Engineer Hyderabad</li>
                <li>Software Engineer AI Applications React Python Hyderabad</li></ul>

            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                For each vacancy, check these five things before applying:</Typography>
            <ol>
                <li>Hands-on development: the role involves writing and reviewing production code.</li>
                <li>Technology match: React/TypeScript is central, with backend skills as an advantage.</li>
                <li>Technical growth: architecture, testing, performance, APIs and design decisions are part of the work.</li>
                <li>Work arrangement: hybrid or remote if possible; verify whether onsite attendance is mandatory.</li>
                <li>Role level: the responsibilities match your demonstrated engineering ability, not simply your total years of IT experience.</li>
            </ol>



        </DataCard>
    )
}