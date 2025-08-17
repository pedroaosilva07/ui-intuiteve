"use client"

import { Box, Typography } from "@mui/material";

export default function Cadastro() {


    return (

        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#121212",
                color: "#F5F5F5",
            }}
        >
            <Typography variant="h4">Página de Cadastro</Typography>
        </Box>
        
    );
};