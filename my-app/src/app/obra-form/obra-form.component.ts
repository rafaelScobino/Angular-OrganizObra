import { Component } from '@angular/core';
import { Obra } from '../../models/obra.model';
import { FormsModule } from '@angular/forms';
import  {lsObjSet,lsObjGetOne}  from '../../utils/localStorageFuncs'

@Component({
  selector: 'app-obra-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './obra-form.component.html',
  styleUrl: './obra-form.component.css'
})

export class ObraFormComponent {

  codObra:string= "";
  nomeObra:string= "";
  clienteObra:string= "";
  enderecoObra:string= "";
  inicioObra:Date= new Date()
  fimObra:Date= new Date()

  clearObraForm(){
    this.codObra = "";
    this.nomeObra = "";
    this.clienteObra = "";
    this.enderecoObra = "";
    this.inicioObra = new Date()
    this.fimObra = new Date()
    console.log("Clearing input Fields")
  }

  storageObra(obraObj:Obra){
    lsObjSet(obraObj.codObra,obraObj)
    console.log("Obra is set")
  }

  getOneObra(codObra:string){
    console.log(lsObjGetOne(codObra))
    console.log("Getting Obj")
  }

  createObra(){
    let newObra: Obra = new Obra(this.codObra,this.nomeObra,this.clienteObra,this.enderecoObra,this.inicioObra,this.fimObra);
    console.log(newObra)
    this.storageObra(newObra)
    this.clearObraForm()
    return newObra;
  
  }


}
