// Importa os tipos Request e Response do Express e o modelo Address
import { Request, Response } from 'express';
import { Address } from '../../models/Address';

// Função assíncrona para listar todos os endereços
export async function listAddress(req: Request, res: Response) {
    try {
        // Busca todos os registros de endereços no banco de dados
        const addresses = await Address.find(); 

        // Responde com a lista de endereços encontrados
        res.json(addresses);
    } catch (error) {
        // Loga qualquer erro no console e responde com o status 500 (Internal Server Error)
        console.log(error);
        res.sendStatus(500);
    }
}