'use client';
import { TextField } from '@mui/material';
import react from 'react';

interface NomeCompletoProps {
    sx?: object;
}


export default function NomeCompleto({sx} : NomeCompletoProps) {

    return (
        <>

            <TextField fullWidth label="Nome completo" sx={sx} variant="outlined" InputLabelProps={{ shrink: true }} />

        </>

    )
}