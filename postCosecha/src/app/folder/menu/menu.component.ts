import { Component, OnInit , OnChanges, DoCheck } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit,DoCheck {
 public Menu;
 public titulo;
  constructor(public menuController:MenuController,public route: ActivatedRoute, public router:Router) {
  

    //debugger
   }

   ngDoCheck(){

    this.router.events.subscribe((val) => {
      // see also 
      console.log(val['url']) 

      this.Menu=val['url'];
      if(this.Menu!=undefined){
        this.titulo=this.Menu.split('/')[3];
        
      }
  });
    /*console.log( this.route.snapshot['_routerState'].url.split('/'));

    this.Menu=this.route.snapshot['_routerState'].url.split('/');
    this.titulo=this.Menu[3]*/
   }

  ngOnInit() {}

  async  openMenu() {
    await this.menuController.open();
  }

}
