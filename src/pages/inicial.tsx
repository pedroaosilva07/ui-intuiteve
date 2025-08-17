"use client";

import React from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";

interface InicialProps {
    onClick: () => void; // função que será passada pelo parent
}

export default function Inicial({ onClick }: InicialProps) {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#121212",
                color: "#F5F5F5",
            }}
        >
            <Box sx={{ mb: 4 }}>
                <Image src="/logo.svg" alt="Logo" width={200} height={200} />
            </Box>

            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#F5F5F5",
                    color: "#121212",
                    px: 4,
                    py: 1.5,
                    transition: "all 0.1s ease",
                    cursor: "wait",
                    "&:hover": {
                        backgroundColor: "#121212",
                        color: "#121212",
                        boxShadow: "none",
                    },
                }}
                onClick={onClick} // aqui chama a função passada pelo parent
            >
                Log in
            </Button>
        </Box>
    );
}