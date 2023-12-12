// Importa os tipos Request e Response do Express e o modelo Address
import { Request, Response } from 'express';
import { Address } from '../../models/Address';

// Função assíncrona para criar um novo endereço
export async function createAddress(req: Request, res: Response) {
    try {
        // Extrai informações do corpo da requisição
        const { name, number, complement, neighborhood, city } = req.body;

        // Cria um novo objeto Address usando o modelo Address
        const address = await Address.create({
            name,
            number,
            complement,
            neighborhood,
            city
        });

        // Responde com o novo endereço criado e o status 201 (Created)
        res.status(201).json(address);
    } catch (error) {
        // Loga qualquer erro no console e responde com o status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}