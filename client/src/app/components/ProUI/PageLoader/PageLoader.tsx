import Box from "@mui/material/Box";

import "./PageLoader.css";


export default function PageLoader() {
    return (<Box
        sx={{
            // position: "absolute",
            // inset: 0,
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
            // width:"100%",
            // height: "100vh",
            
            // zIndex: 9999,


            position: "fixed",
inset: 0,
display: "flex",
alignItems: "center",
justifyContent: "center",
zIndex: 9999,

        }}
    >
        <span className="loader"></span>
    </Box>)
}