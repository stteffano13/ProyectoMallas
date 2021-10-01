import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public appPages = [
    { title: 'Mallas', url: '/folder/menu/mallas', icon: 'ice-cream' },
    { title: 'Mesas', url: '/folder/menu/mesas', icon: 'ribbon' },
    { title: 'Bunches', url: '/folder/menu/bunches', icon: 'rose' },
   
  ];
  public labels = ['Logout'];
  constructor(private activatedRoute: ActivatedRoute) {

  
   }

  ngOnInit() {
    
    
  }

}
