import { model, Schema } from 'mongoose';

// Define o esquema para o modelo de Endereço
export const Address = model('Address', new Schema({
    // Nome da pessoa ou empresa associada ao endereço
    name: {
        type: String,
        required: true,
    },
    // Número do edifício ou casa
    number: {
        type: String,
        required: true,
    },
    // Informações adicionais para identificar o local, como apartamento, sala, etc.
    complement: {
        type: String,
        required: true,
    },
    // Referência ao objeto Bairro associado ao endereço
    neighborhood: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Neighborhood', // Certifique-se de que 'Neighborhood' é um modelo válido definido em seu código
    },
    // Referência ao objeto Cidade associado ao endereço
    city: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'City', // Certifique-se de que 'City' é um modelo válido definido em seu código
    },
}));