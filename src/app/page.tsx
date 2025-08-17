"use client";

import React, { useState } from "react";
import Inicial from "@/pages/inicial";
import Cadastro from "@/pages/cadastro";


export default function Home() {

  const [tela, setTela] = useState<"inicial" | "cadastro">("inicial");


  if (tela === "cadastro") {
    return <Cadastro />;
  }

  return (
    <Inicial
      onClick={() => setTela("cadastro")}
    />
  );
}


/*
Cadastro Multi-Etapas – Estrutura Final (Normal + Divertido)

// ETAPA 1 – Informações Pessoais
- Nome completo (text)
- Apelido / Nome divertido (text)
- Data de nascimento (date)
- Gênero (select): Masculino, Feminino, Outro, Prefiro não dizer
- Email (email)
- Telefone (text)

// ETAPA 2 – Localização
- Rua (text)
- Número (text)
- Complemento (text)
- Bairro (text)
- Cidade (text)
- Estado (text)
- País (text)
- CEP (text)
- Referência (text) → ex.: "Perto de um ponto de referência famoso"

// ETAPA 3 – Preferências
- Cor favorita (select)
- Prato favorito (text) ← usuário escreve seu prato preferido
- Bebida favorita (text)
- Hobby / atividade favorita (text)
- Animal favorito (text)
- Filme favorito (text)
- Série favorita (text)
- Música favorita (text)

// ETAPA 4 – Criatividade / Coisas Pessoais
- Receita favorita (text) → ingredientes e modo de preparo
    - Nome da receita (text)
    - Ingredientes (textarea)
    - Modo de preparo (textarea)
- Algo que você faz melhor que todo mundo (text)
- Atividade de fim de semana favorita (text)
- Meme ou coisa engraçada favorita (text)
- Palavra que mais fala (text)

// ETAPA 5 – Resumo e Confirmação
- Mostrar resumo das respostas
- Botão "Confirmar cadastro" → envia os dados
- Opção de editar respostas antes de enviar
*/
