'use client';
import { TextField } from '@mui/material';
import react from 'react';

interface ApelidoProps {
    sx?: object;
}


export default function Apelido({sx} : ApelidoProps) {

    return (
        <>

           <TextField fullWidth label="Apelido" variant="outlined" sx={sx} InputLabelProps={{ shrink: true }} />

        </>

    )
}