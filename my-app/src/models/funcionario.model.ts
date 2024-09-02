export class Funcionario {
    name: string;
    funcao: string;
    dias: number;
    diaria: number;
    remuneracao: number;

    constructor(name:string,funcao:string,dias:number,diaria:number){
        this.name = name;
        this.funcao = funcao;
        this.dias = dias;
        this.diaria = diaria;
        this.remuneracao = this.dias * this.diaria
    }


}