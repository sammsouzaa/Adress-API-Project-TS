// Importa os tipos Request e Response do Express e o modelo Neighborhood
import { Request, Response } from 'express';
import { Neighborhood } from '../../models/Neighborhood';

// Função assíncrona para listar todos os bairros
export async function listNeighborhood(req: Request, res: Response) {
    try {
        // Busca todos os registros de bairros no banco de dados
        const neighborhoods = await Neighborhood.find(); 

        // Responde com a lista de bairros encontrados
        res.json(neighborhoods);
    } catch (error) {
        // Loga qualquer erro no console e responde com o status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}