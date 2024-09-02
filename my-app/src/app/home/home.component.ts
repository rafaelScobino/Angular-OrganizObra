import { Component } from '@angular/core';
import { FuncFormComponent } from '../func-form/func-form.component';
import { ObraFormComponent } from '../obra-form/obra-form.component';
import { lsKeyGetAll, lsObjGetAll } from '../../utils/localStorageFuncs';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { Router} from '@angular/router';
import { Obra } from '../../models/obra.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FuncFormComponent,ObraFormComponent,FormsModule,NgFor,NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(private router: Router){}

  selectedObra = '';

  obraFormIsVis = false;

  funcFormIsVis= false;

  obraVis(){
    this.obraFormIsVis = true; 
  }

  funcVis(){
    this.funcFormIsVis = true;
  }
 
  options:any[] = [];

  getOptions(){
    this.obraFormIsVis = false;
    let keys = lsKeyGetAll()
    if(keys != null){
      this.options = keys
    }else{console.log('No keys')}
  }

  visuObras(){
    let obrasArray:Obra[] = lsObjGetAll();
    let encodedArr = encodeURIComponent(JSON.stringify(obrasArray));
    this.router.navigate(['/func-tables',encodedArr])
  }

}
