import { Component, OnInit , OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit,OnChanges {
 public Menu;
 public titulo;
  constructor(public menuController:MenuController,public route: ActivatedRoute, public router:Router) {
    this.capturaParametro();

    //debugger
   }

   ngOnChanges(){
   this.capturaParametro();
    
   }

  ngOnInit() {}

  async  openMenu() {
    await this.menuController.open();
  }

  capturaParametro(){
    this.router.events.subscribe((val) => {
      

      this.Menu=val['url'];
      if(this.Menu!=undefined){
        this.titulo=this.Menu.split('/')[3];
        
      }
  });
  }

}
