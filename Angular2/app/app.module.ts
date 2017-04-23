// Класс AppModule - точка входа в данное приложение 
// Angular модуль - класс с декоратором NgModule

import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { Header } from "./header/app-header.component";
import { Footer } from "./footer/app-footer.component";
import { Content } from "./content/app-content.component";



// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser 
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения, 
// а также добавить общие директивы такие как ngIf и ngFor
@NgModule({
	imports: [BrowserModule ],
	declarations: [AppComponent, Header, Footer, Content], // корневой компонент данного приложения
  bootstrap:    [ AppComponent ]  // компонент с которого начинается отображение приложения
})

export class AppModule { } 
