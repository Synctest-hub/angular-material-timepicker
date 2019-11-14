import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public date: number = new Date().getDate();
  public dateValue: Date = new Date(this.fullYear, this.month , this.date, 10, 0, 0);
  public minValue: Date = new Date(this.fullYear, this.month , this.date, 7, 0, 0);
  public maxValue: Date = new Date(this.fullYear, this.month, this.date, 16, 0 ,0);
}
