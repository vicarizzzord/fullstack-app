import mongoose from '../db';

const ClientSchema = new mongoose.Schema({

    nome:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    street: {
        type: String
    },
    number: {
        type: String
    },
    district: {
        type: String
    },
    cpf: {
        type: String
    }
})

const Client = mongoose.model('Client', ClientSchema)

export default Client;