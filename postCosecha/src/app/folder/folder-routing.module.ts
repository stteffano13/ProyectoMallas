import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentOnReady } from '@ionic/core';

import { FolderPage } from './folder.page';
import { MallasComponent } from './mallas/mallas.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children:[{path:'mallas',component:MallasComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
