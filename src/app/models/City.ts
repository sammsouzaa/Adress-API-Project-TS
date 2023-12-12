import { model, Schema } from 'mongoose';

// Define o esquema para o modelo de Cidade
export const City = model('City', new Schema({
    // Nome da cidade
    name: { 
        type: String,
        required: true,
    },
    // Estado ao qual a cidade pertence
    state: { 
        type: String,
        required: true,
    }
}));