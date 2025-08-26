'use client';
import { Button, ButtonGroup, Dialog, DialogActions, DialogTitle, Grid, TextField, DialogContent, Stack, Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import BackspaceIcon from '@mui/icons-material/Backspace';

interface NomeCompletoProps {
    sx?: object;
    onCadastrar?: (nome: string) => void
}

export default function NomeCompleto({ sx, onCadastrar }: NomeCompletoProps) {

    const [open, setOpen] = useState(false);
    const [typedName, setTypedName] = useState('');
    const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
    const [isUppercase, setIsUppercase] = useState(true);
    const [showAlertUppercase, setShowAlertUppercase] = useState(false);
    const [showAlertBackspace, setShowAlertBackspace] = useState(false);

    const lowercaseLatters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const uppercaseLatters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const space = [' '];

    const genereteshuffledLetters = () => {
        const latters = isUppercase ? [...uppercaseLatters] : [...lowercaseLatters];
        return [...latters, ...space].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        setShuffledLetters(genereteshuffledLetters());
    }, [isUppercase]);

    const handleUppercase = () => setIsUppercase(true);
    const handleLowercase = () => setIsUppercase(false);

    const handleLetterClick = (letter: string) => {
        if (letter === ' ') {
            setTypedName(prev => prev + ' ');
        } else {
            const newLetter = isUppercase ? letter.toLowerCase() : letter.toUpperCase();
            setTypedName(prev => prev + newLetter);
        }
        setShuffledLetters(genereteshuffledLetters());
    };

    const handleBackspace = () => {
        setTypedName('');
        setShowAlertBackspace(true)
        setTimeout (() => setShowAlertBackspace(false), 5000)
    }

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
        setTypedName('');
    }

    const handleCadastrar = () => {
        if (typedName.trim() === typedName.trim().toUpperCase()) {

            setShowAlertUppercase(true)
            setTimeout(() => setShowAlertUppercase(false), 8000)

        } else {

            if (typedName.trim() !== '') {

                if (onCadastrar) onCadastrar(typedName);

                setOpen(false);
            }
        }

    }

    const inputSx = {
        flex: '1 1 45%',
        '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: '#F5F5F5' },
            '&:hover fieldset': { borderColor: '#F5F5F5' },
            '&.Mui-focused fieldset': { borderColor: '#F5F5F5' },
            color: '#F5F5F5',
            backgroundColor: '#1e1e1e',
        },
        '& .MuiInputLabel-root': { color: '#F5F5F5' },
    };

    return (
        <>
            <TextField
                onClick={handleOpen}
                fullWidth
                label="Nome"
                value={typedName}
                sx={{ ...sx, ...inputSx }}
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                aria-readonly
            />

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="xs" // dialog mais estreito em celulares
                fullWidth
                PaperProps={{
                    sx: {
                        padding: 2,
                        borderRadius: 3,
                        backgroundColor: '#1e1e1e',
                        color: '#F5F5F5',
                    },
                }}
            >
                <DialogTitle sx={{ textAlign: 'center', color: '#F5F5F5' }}>
                    Digite seu nome de um jeito diferente
                </DialogTitle>

                <DialogContent>
                    <Grid container spacing={0.5} sx={{ mb: 2, justifyContent: 'center' }}>
                        <Grid size={{ xs: 12 }} sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                            <ButtonGroup variant="contained" aria-label="Basic button group">
                                <Button
                                    variant={isUppercase ? "outlined" : "contained"}
                                    onClick={handleUppercase}
                                    sx={
                                        isUppercase ? { color: '#1e1e1e', borderColor: '#F5F5F5', bgcolor: '#F5F5F5' }
                                            : { color: '#F5F5F5', borderColor: '#F5F5F5', bgcolor: '#1e1e1e' }

                                    }
                                >
                                    Maiúsculas
                                </Button>
                                <Button
                                    variant={isUppercase ? "contained" : "outlined"}
                                    onClick={handleLowercase}
                                    sx={
                                        isUppercase ? { color: '#F5F5F5', borderColor: '#F5F5F5', bgcolor: '#1e1e1e' }
                                            : { color: '#1e1e1e', borderColor: '#F5F5F5', bgcolor: '#F5F5F5' }
                                    }
                                >
                                    Minúsculas
                                </Button>
                            </ButtonGroup>
                        </Grid>

                        {shuffledLetters.map((l, idx) => (
                            <Grid size={{ xs: 2 }} key={idx}>
                                <Button
                                    variant="outlined"
                                    onClick={() => handleLetterClick(l)}
                                    sx={{
                                        minHeight: 35,
                                        fontSize: 12,
                                        color: '#F5F5F5',
                                        borderColor: '#F5F5F5',
                                        width: '100%',
                                        backgroundColor: '#1e1e1e',
                                        '&:hover': { backgroundColor: '#2a2a2a' },
                                    }}
                                >
                                    {l === ' ' ? <SpaceBarIcon fontSize="small" /> : l}
                                </Button>
                            </Grid>
                        ))}
                    </Grid>

                    <TextField
                        fullWidth
                        label="Nome digitado"
                        variant="outlined"
                        value={typedName}
                        InputProps={{ readOnly: true }}
                        sx={{
                            mb: 2,
                            ...inputSx,
                        }}
                    />


                    {showAlertUppercase && (
                        <Stack sx={{ width: "100%", mb: 2 }}>
                            <Alert variant='filled' severity='error'>
                                Nome não pode estar GRITADO!!!
                            </Alert>
                        </Stack>
                    )}

                    {showAlertBackspace && (
                        <Stack sx={{ width: "100%", mb: 2 }}>
                            <Alert variant='filled' severity='warning'>
                                Backspace apaga tudo queridinho!
                            </Alert>
                        </Stack>
                    )}

                </DialogContent>

                <DialogActions sx={{ justifyContent: 'space-between' }}>
                    <Button onClick={handleBackspace} startIcon={<BackspaceIcon />} sx={{ color: '#F5F5F5', borderColor: '#F5F5F5' }}>
                        BackSpace
                    </Button>
                    <Button onClick={handleCadastrar} sx={{ bgcolor: '#F5F5F5', color: "#1e1e1e" }} variant="contained">
                        Cadastrar
                    </Button>
                </DialogActions>
            </Dialog >
        </>
    );
}

// TODO: fazer ia com API
