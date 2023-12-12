// Importa os tipos Request e Response do Express e o modelo Neighborhood
import { Request, Response } from 'express';
import { Neighborhood } from '../../models/Neighborhood';

// Função assíncrona para criar um novo bairro
export async function createNeighborhood(req: Request, res: Response) {
    try {
        // Extrai informações do corpo da requisição
        const { name } = req.body;

        // Cria um novo objeto Neighborhood usando o modelo Neighborhood
        const neighborhood = await Neighborhood.create({
            name
        });

        // Responde com o novo bairro criado e o status 201 (Created)
        res.status(201).json(neighborhood);
    } catch (error) {
        // Loga qualquer erro no console e responde com o status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}