import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BunchesComponent } from './bunches/bunches.component';
import { MallasComponent } from './mallas/mallas.component';
import { MenuComponent } from './menu.component';
import { MesasComponent } from './mesas/mesas.component';

const routes: Routes = [ {
  path: '',
  component: MenuComponent,
 
    children:[{path:'mallas',component:MallasComponent},{path:'mesas',component:MesasComponent},{path:'bunches',component:BunchesComponent}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
