import { Funcionario } from "./funcionario.model";

export class Obra{
    codObra: string;
    name: string;
    cliente: string;
    endereco: string;
    funcionarios: Funcionario[];
    inicio: Date;
    fim: Date;

    constructor(codObra:string,name:string,cliente:string,endereco:string,inicio:Date,fim:Date){
        this.codObra = codObra;
        this.name = name;
        this.cliente = cliente;
        this.endereco = endereco;
        this.funcionarios = []
        this.inicio = inicio;
        this.fim = fim;
    }
}