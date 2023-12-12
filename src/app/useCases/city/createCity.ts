// Importa os tipos Request e Response do Express e o modelo City
import { Request, Response } from 'express';
import { City } from '../../models/City';

// Função assíncrona para criar uma nova cidade
export async function createCity(req: Request, res: Response) {
    try {
        // Extrai informações do corpo da requisição
        const { name, state } = req.body;

        // Cria um novo objeto City usando o modelo City
        const city = await City.create({
            name,
            state
        });

        // Responde com a nova cidade criada e o status 201 (Created)
        res.status(201).json(city);
    } catch (error) {
        // Loga qualquer erro no console e responde com o status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}