export interface Collaborator {
    id?: string;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    cargo: string;
    setor: string;
    remuneracao: number;
    estado: string;
    cidade: string;
    email: string;
    fotoUrl?: string;
}
