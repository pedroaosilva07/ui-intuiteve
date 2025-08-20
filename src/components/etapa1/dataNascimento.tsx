'use client';
import { TextField } from '@mui/material';
import react from 'react';

interface DataNascimentoProps {
    sx?: object;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function DataNascimento({ sx, onChange }: DataNascimentoProps) {

    return (
        <>

           <TextField onChange={onChange} fullWidth label="Data de nascimento" type="date" variant="outlined" sx={sx} InputLabelProps={{ shrink: true }} />

        </>

    )
}