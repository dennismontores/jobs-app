import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountPageRoutingModule } from './create-account-page-routing.module';
import { CreateAccountPageComponent } from './create-account-page.component';


@NgModule({
  declarations: [
    CreateAccountPageComponent
  ],
  imports: [
    CommonModule,
    CreateAccountPageRoutingModule
  ]
})
export class CreateAccountPageModule { }
