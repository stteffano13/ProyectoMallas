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
    { title: 'Mallas', url: '/folder/mallas', icon: 'ice-cream' },
    { title: 'Mesas', url: '/folder/mesas', icon: 'ribbon' },
    { title: 'Bunches', url: '/folder/bunches', icon: 'rose' },
   
  ];
  public labels = ['Logout'];
  constructor(private activatedRoute: ActivatedRoute) {

  
   }

  ngOnInit() {
    
    
  }

}
