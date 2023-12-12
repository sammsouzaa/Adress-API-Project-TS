import { model, Schema } from 'mongoose';

// Define o esquema para o modelo de Bairro
export const Neighborhood = model('Neighborhood', new Schema({
    // Nome do bairro
    name: {
        type: String,
        required: true,
    }
}));