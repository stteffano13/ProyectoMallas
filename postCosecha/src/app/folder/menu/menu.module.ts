import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { FolderPage } from '../folder.page';
import { FolderPageModule } from '../folder.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuRoutingModule,
   
  ]
})
export class MenuModule { }
