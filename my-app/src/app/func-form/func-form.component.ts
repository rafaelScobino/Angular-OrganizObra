import { Component, Input} from '@angular/core';
import { Funcionario } from '../../models/funcionario.model';
import { FormsModule } from '@angular/forms';
import { lsObjGetOne, lsObjSet } from '../../utils/localStorageFuncs';
import { Obra } from '../../models/obra.model';


@Component({
  selector: 'app-func-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './func-form.component.html',
  styleUrl: './func-form.component.css'
})

export class FuncFormComponent {

  @Input() selectedObra:string='' 

  nomeFunc:string= "";
  funcaoFunc:string= "";
  diasFunc:number= 0;
  diariaFunc:number= 0;
  
  clearFuncForm(){
    this.nomeFunc = "";
    this.funcaoFunc = "";
    this.diasFunc = 0;
    this.diariaFunc = 0;
    console.log("Clearing input Fields")
  }

  addFuncToObra(codObra:string,func:Funcionario){
    let obra:Obra = lsObjGetOne(codObra);
    obra.funcionarios.push(func);
    lsObjSet(codObra,obra)
  }

  createFunc(){
    let newFunc:Funcionario = new Funcionario(this.nomeFunc,this.funcaoFunc,this.diasFunc,this.diariaFunc)
    console.log(newFunc)
    this.clearFuncForm()
    this.addFuncToObra(this.selectedObra,newFunc)
   return newFunc
  }
  


}
