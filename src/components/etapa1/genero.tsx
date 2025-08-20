'use client';
import { FormControl, MenuItem, Select } from '@mui/material';
import react from 'react';

interface GeneroProps {
    sx?: object;
}


export default function Genero({ sx }: GeneroProps) {

    return (
        <>
            <Select defaultValue="" displayEmpty sx={{ color: '#F5F5F5', backgroundColor: '#1e1e1e', '& .MuiOutlinedInput-notchedOutline': { borderColor: '#F5F5F5' } }}>
                <MenuItem value="">Gênero</MenuItem>
                <MenuItem value="masculino">Masculino</MenuItem>
                <MenuItem value="feminino">Feminino</MenuItem>
                <MenuItem value="outro">Outro</MenuItem>
                <MenuItem value="nao_dizer">Prefiro não dizer</MenuItem>
            </Select>
        </>

    )
}