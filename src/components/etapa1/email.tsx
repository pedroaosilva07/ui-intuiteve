'use client';
import { TextField } from '@mui/material';
import react from 'react';

interface EmailProps {
    sx?: object;
}


export default function Email({ sx }: EmailProps) {

    return (
        <>

            <TextField fullWidth label="Email" type="email" variant="outlined" sx={sx} InputLabelProps={{ shrink: true }} />

        </>

    )
}