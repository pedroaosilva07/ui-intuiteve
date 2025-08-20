'use client';

import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Select, MenuItem, Typography, FormControl, Skeleton, Fab, Grid, Grow } from '@mui/material';
import NomeCompleto from '@/components/etapa1/nomeCompleto';
import Apelido from '@/components/etapa1/apelido';
import Email from '@/components/etapa1/email';
import DataNascimento from '@/components/etapa1/dataNascimento';
import Genero from '@/components/etapa1/genero';
import Idade from '@/components/etapa1/idade';

export default function Cadastro() {
    const [etapa, setEtapa] = useState(1);
    const [loading, setLoading] = useState(true);
    const [dataNascimento, setDataNascimento] = useState("");

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDataNascimento(e.target.value);
        console.log("Data de nascimento: ", e.target.value);
    }

    // Simula carregamento inicial
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1000); // 1s de Skeleton
        return () => clearTimeout(timer);
    }, []);

    const handleNext = () => setEtapa((prev) => Math.min(prev + 1, 5));

    const handleBack = () => {
        if (etapa > 1) {
            setEtapa((prev) => prev - 1);
        } else {
            window.location.reload(); // F5 na página inicial
        }
    };

    // Estilo padrão para inputs
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
        <Box
            sx={{
                minHeight: '100vh',
                p: 2,
                backgroundColor: '#121212',
                color: '#F5F5F5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {loading ? (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, maxWidth: 600, width: '100%' }}>

                    <Skeleton variant="rectangular" width="45%" height={56} />
                    <Skeleton variant="rectangular" width="45%" height={56} />
                    <Skeleton variant="rectangular" width="45%" height={56} />
                    <Skeleton variant="rectangular" width="45%" height={56} />

                </Box>

            ) : (


                <Box sx={{ maxWidth: 600, width: '100%', bgcolor: '#1e1e1e', p: 4, borderRadius: 5 }}>

                    <Grid container spacing={2} sx={{ mb: 4, justifyContent: 'center', alignItems: 'center' }}>

                        <Grid size='grow'>
                            <Fab
                                size="small"
                                aria-label="1"
                                sx={
                                    etapa === 1
                                        ? { bgcolor: '#F5F5F5', color: '#121212', '&:hover': { bgcolor: '#ddd' } }
                                        : { bgcolor: '#1e1e1e', color: '#F5F5F5', '&:hover': { bgcolor: '#333' } }
                                }
                                onClick={() => setEtapa(1)}
                            >
                                1
                            </Fab>
                        </Grid>

                        <Grid size='grow'>
                            <Fab
                                size="small"
                                aria-label="2"
                                sx={
                                    etapa === 2
                                        ? { bgcolor: '#F5F5F5', color: '#121212', '&:hover': { bgcolor: '#ddd' } }
                                        : { bgcolor: '#1e1e1e', color: '#F5F5F5', '&:hover': { bgcolor: '#333' } }
                                }
                                onClick={() => setEtapa(2)}
                            >
                                2
                            </Fab>
                        </Grid>

                        <Grid size='grow'>
                            <Fab
                                size="small"
                                aria-label="3"
                                sx={
                                    etapa === 3
                                        ? { bgcolor: '#F5F5F5', color: '#121212', '&:hover': { bgcolor: '#ddd' } }
                                        : { bgcolor: '#1e1e1e', color: '#F5F5F5', '&:hover': { bgcolor: '#333' } }
                                }
                                onClick={() => setEtapa(3)}
                            >
                                3
                            </Fab>
                        </Grid>

                        <Grid size='grow'>
                            <Fab
                                size="small"
                                aria-label="4"
                                sx={
                                    etapa === 4
                                        ? { bgcolor: '#F5F5F5', color: '#121212', '&:hover': { bgcolor: '#ddd' } }
                                        : { bgcolor: '#1e1e1e', color: '#F5F5F5', '&:hover': { bgcolor: '#333' } }
                                }
                                onClick={() => setEtapa(4)}
                            >
                                4
                            </Fab>
                        </Grid>

                        <Grid size='grow'>
                            <Fab
                                size="small"
                                aria-label="5"
                                sx={
                                    etapa === 5
                                        ? { bgcolor: '#F5F5F5', color: '#121212', '&:hover': { bgcolor: '#ddd' } }
                                        : { bgcolor: '#1e1e1e', color: '#F5F5F5', '&:hover': { bgcolor: '#333' } }
                                }
                                onClick={() => setEtapa(5)}
                            >
                                5
                            </Fab>
                        </Grid>

                    </Grid>

                    {/* ETAPA 1 – Informações Pessoais */}

                    {etapa === 1 && (

                        // TODO: colocar textfild em aquivos separados

                        <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: 2 }}>

                            <Grid container spacing={2}>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <NomeCompleto sx={inputSx} />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Apelido sx={inputSx} />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <Email sx={inputSx} />
                                </Grid>

                                <Grid size={{ xs: 12, md: 6 }}>
                                    <DataNascimento sx={inputSx} onChange={handleDataChange} />
                                </Grid>

                                <Grid size={{ xs: 12 }}>
                                    {dataNascimento === "" ? (

                                        <Grid container spacing={2}>

                                            <Grid size={12}>
                                                <FormControl fullWidth variant="outlined" sx={{ ...inputSx }}>
                                                    <Genero />
                                                </FormControl>
                                            </Grid>

                                        </Grid>

                                    ) : (

                                        <Grid container spacing={2}>

                                            <Grid size={{ xs: 12, md: 6 }}>
                                                <Idade sx={inputSx} />
                                            </Grid>

                                            <Grid size={{ xs: 12, md: 6 }}>
                                                <FormControl fullWidth variant="outlined" sx={{ ...inputSx }}>
                                                   <Genero />
                                                </FormControl>
                                            </Grid>


                                        </Grid>

                                    )}
                                </Grid>

                            </Grid>


                        </Box>


                    )}

                    {/* ETAPA 2 – Localização */}
                    {etapa === 2 && (

                        <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: 2 }}>

                            <TextField label="País" variant="outlined" sx={inputSx} InputLabelProps={{ shrink: true }} />

                            <TextField label="Cidade" variant="outlined" sx={inputSx} InputLabelProps={{ shrink: true }} />

                            <TextField label="Estado" variant="outlined" sx={inputSx} InputLabelProps={{ shrink: true }} />

                            <TextField label="Endereço completo" variant="outlined" sx={{ ...inputSx }} InputLabelProps={{ shrink: true }} />

                        </Box>
                    )}

                    {/* ETAPA 3 – Preferências Pessoais */}
                    {etapa === 3 && (

                        <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: 2 }}>

                            <TextField label="Prato favorito (rinha)" variant="outlined" sx={inputSx} InputLabelProps={{ shrink: true }} />

                            <TextField label="Receita favorita (ingredientes + modo)" variant="outlined" sx={{ ...inputSx }} InputLabelProps={{ shrink: true }} />

                            <TextField label="Cor favorita" variant="outlined" sx={inputSx} InputLabelProps={{ shrink: true }} />

                            <TextField label="Filme favorito (rinha de filmes)" variant="outlined" sx={inputSx} InputLabelProps={{ shrink: true }} />

                        </Box>
                    )}

                    {/* ETAPA 4 – Outras informações */}
                    {etapa === 4 && (

                        <Box sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: 2 }}>

                            <TextField label="Hobby favorito" variant="outlined" sx={inputSx} InputLabelProps={{ shrink: true }} />

                            <TextField label="Música favorita" variant="outlined" sx={inputSx} InputLabelProps={{ shrink: true }} />

                            <TextField label="Livro favorito" variant="outlined" sx={inputSx} InputLabelProps={{ shrink: true }} />

                            <TextField label="Plataforma de streaming favorita" variant="outlined" sx={inputSx} InputLabelProps={{ shrink: true }} />

                        </Box>
                    )}

                    {/* ETAPA 5 – Resumo */}
                    {etapa === 5 && (

                        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>

                            <Typography sx={{ color: '#F5F5F5' }}>Confira suas informações antes de enviar:</Typography>

                            <Box sx={{ bgcolor: '#121212', p: 2, borderRadius: 2, border: '1px solid #F5F5F5' }}>
                                <Typography>Resumo será exibido aqui...</Typography>
                            </Box>

                        </Box>
                    )}

                    {/* Botões Avançar / Voltar */}

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, width: '100%' }}>
                        {/* Avançar do lado esquerdo (texto) */}
                        <Button
                            variant="text"
                            onClick={handleNext}
                            sx={{ fontSize: '12px', color: '#F5F5F5', '&:hover': { color: '#ddd' }, mr: 2 }}
                        >
                            {etapa === 5 ? 'Finalizar' : 'Avançar'}
                        </Button>

                        {/* Voltar do lado direito (contained) */}
                        <Button
                            variant="contained"
                            onClick={handleBack}
                            sx={{ fontSize: '12px', bgcolor: '#F5F5F5', color: '#121212', '&:hover': { bgcolor: '#ddd' } }}
                        >
                            {etapa > 1 ? 'Voltar' : 'Cancelar'}
                        </Button>

                    </Box>

                </Box>


            )}

        </Box>
    );
}
