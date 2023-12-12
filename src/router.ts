// importação do Router do Express e as funções relacionadas aos casos de uso de endereços, cidades e bairros.

import { Router } from 'express';

import { listAddress } from './app/useCases/address/listAddress';
import { createAddress } from './app/useCases/address/createAddress';

import { listCity } from './app/useCases/city/listCity';
import { createCity } from './app/useCases/city/createCity';

import { listNeighborhood } from './app/useCases/neighborhood/listNeighborhood';
import { createNeighborhood } from './app/useCases/neighborhood/createNeighborhood';

// exportação do roteador para que possamos usá-lo em outros lugares do seu aplicativo.
export const router = Router();

//define várias rotas usando o Router. 
//Cada rota tem um método HTTP associado (GET para listagem e POST para criação) e um manipulador de rota correspondente.

router.get('/enderecos', listAddress);
router.post('/endereco', createAddress);

router.get('/bairros', listNeighborhood);
router.post('/bairro', createNeighborhood);

router.get('/cidades', listCity);
router.post('/cidade', createCity);