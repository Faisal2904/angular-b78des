import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AppHighlightDirective } from './app-highlight/app-highlight.directive';




@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,AssignmentComponent,AppHighlightDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
