import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentOnReady } from '@ionic/core';
import { BunchesComponent } from './bunches/bunches.component';

import { FolderPage } from './folder.page';
import { MallasComponent } from './mallas/mallas.component';
import { MesasComponent } from './mesas/mesas.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children:[{path:'mallas',component:MallasComponent},{path:'mesas',component:MesasComponent},{path:'bunches',component:BunchesComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
