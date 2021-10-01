import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { MenuModule } from './menu/menu.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
  
    
   
  ],
  declarations: [FolderPage,MenuComponent]
})
export class FolderPageModule {}
