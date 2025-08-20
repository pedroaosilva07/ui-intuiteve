'use client';
import { TextField } from '@mui/material';
import react from 'react';

interface IdadeProps {
    sx?: object;
}


export default function Idade({ sx }: IdadeProps) {

    return (
        <>

            <TextField fullWidth label="Idade" type="idade" variant="outlined" sx={sx} InputLabelProps={{ shrink: true }} />

        </>

    )
}