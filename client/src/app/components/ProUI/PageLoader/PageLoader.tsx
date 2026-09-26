import Box from "@mui/material/Box";

import "./PageLoader.css";


export default function PageLoader() {
    return (<Box
        sx={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
    >
        <span className="loader"></span>
    </Box>)
}