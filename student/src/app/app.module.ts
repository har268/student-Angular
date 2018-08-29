import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import {OperationService} from "./operation.service";
import { FormaddComponent } from './formadd/formadd.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    FormaddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OperationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
