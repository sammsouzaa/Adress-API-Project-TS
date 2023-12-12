// Importa os tipos Request e Response do Express e o modelo City
import { Request, Response } from 'express';
import { City } from '../../models/City';

// Função assíncrona para listar todas as cidades
export async function listCity(req: Request, res: Response) {
    try {
        // Busca todos os registros de cidades no banco de dados
        const cities = await City.find(); 

        // Responde com a lista de cidades encontradas
        res.json(cities);
    } catch (error) {
        // Loga qualquer erro no console e responde com o status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}