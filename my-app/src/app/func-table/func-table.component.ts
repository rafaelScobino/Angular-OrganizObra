import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { Obra } from '../../models/obra.model';
import { Funcionario } from '../../models/funcionario.model';

@Component({
  selector: 'app-func-table',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './func-table.component.html',
  styleUrls: ['./func-table.component.css']
})
export class FuncTableComponent implements OnInit {

  obras: Obra[] = [];
  funcionarios: Funcionario[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    let encodedArr = params.get('encodedArr');
        if(encodedArr){  
      try {
        this.obras = JSON.parse(decodeURIComponent(encodedArr))
        } catch (error) {
          console.log(error)
          this.obras = []
        }
      }
    })
  }

}
