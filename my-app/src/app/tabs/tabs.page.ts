import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log('Hola mundo');

    let numero=20;
    numero=100;
    numero=10;
    console.log(numero);
    
  }

}
