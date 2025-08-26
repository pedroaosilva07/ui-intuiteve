'use client';
import { TextField } from '@mui/material';
import react from 'react';

interface NicknameProps {
    sx?: object;
}


export default function Nick({sx} : NicknameProps) {

    return (
        <>

           <TextField fullWidth label="Nickname" variant="outlined" sx={sx} InputLabelProps={{ shrink: true }} />

        </>

    )
}