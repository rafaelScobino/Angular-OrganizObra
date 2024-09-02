import { Routes } from '@angular/router';
import { FuncTableComponent } from './func-table/func-table.component';

export const routes: Routes = [

    {path:'func-tables/:encodedArr', component: FuncTableComponent}

];
