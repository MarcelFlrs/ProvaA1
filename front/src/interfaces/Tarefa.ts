export interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    categoria: string;
    status: string;
    criadoEm?: string;
}