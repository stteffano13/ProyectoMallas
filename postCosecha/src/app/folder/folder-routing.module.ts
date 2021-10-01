import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentOnReady } from '@ionic/core';


import { FolderPage } from './folder.page';

const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children:[{path:'menu', loadChildren: () => import('./menu/menu.module').then( m => m.MenuModule) }]
    
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
