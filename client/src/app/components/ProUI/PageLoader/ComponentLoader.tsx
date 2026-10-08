import Box from "@mui/material/Box";

import "./Loader.css";


export default function ComponentLoader() {
    return (<Box
        sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            backgroundColor: "rgba(225,225,225,0.5)"
        }}
    >
        <span className="loader"></span>
    </Box>)
}