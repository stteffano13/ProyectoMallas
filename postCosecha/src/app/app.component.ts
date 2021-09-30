import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mallas', url: '/folder/Inbox', icon: 'ice-cream' },
    { title: 'Mesas', url: '/folder/Outbox', icon: 'ribbon' },
    { title: 'Bunches', url: '/folder/Favorites', icon: 'rose' },
   
  ];
  public labels = ['Logout'];
  constructor() {}
}
