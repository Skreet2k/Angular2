﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdMenuModule, MdButtonModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {RegisterComponent} from "./register/register.component"


import { AppComponent }  from './app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MdToolbarModule, MdMenuModule, MdButtonModule, RouterModule.forRoot([
    {
      path: '',
      redirectTo: "/",
      pathMatch: 'full'
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    { path: '**', component: AppComponent }
  ]) ],
  declarations: [AppComponent, RegisterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
