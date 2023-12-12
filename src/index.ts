// Importa as bibliotecas necessárias
import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router'; // Importa as rotas do arquivo router.js

// Configura a conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        // Configurações do servidor Express
        const app = express();
        const port = 3000; // Porta local do servidor

        // Configura o servidor para servir arquivos estáticos na rota '/uploads'
        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

        // Habilita o parsing de JSON nas requisições
        app.use(express.json());

        // Adiciona as rotas definidas no arquivo router.js
        app.use(router);

        // Inicia o servidor na porta especificada e imprime uma mensagem de sucesso no console
        app.listen(port, () => {
            console.log(`🚗 Server is running on http://localhost:${port}`);
        });
    })
    // Trata erros de conexão com o MongoDB e imprime uma mensagem de erro no console
    .catch(() => console.log('Error connecting to MongoDB'));