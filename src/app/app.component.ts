import { Component, ViewChild } from '@angular/core';
import { MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'green-goods';
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }
  goToOrder(){
    
  }
}
