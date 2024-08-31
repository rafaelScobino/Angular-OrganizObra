export class Funcionario {
    name: string;
    funcao: string;
    horas: number;
    diaria: number;
    remuneracao: number;

    constructor(name:string,funcao:string,horas:number,diaria:number){
        this.name = name;
        this.funcao = funcao;
        this.horas = horas;
        this.diaria = diaria;
        this.remuneracao = this.horas * this.diaria
    }


}