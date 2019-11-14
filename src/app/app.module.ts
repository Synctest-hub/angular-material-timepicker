import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import the TimePickerModule for the TimePicker component
import { TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
