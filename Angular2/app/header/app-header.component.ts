// Определение компонента app.component

// импорт декоратора Component из модуля @angular/core
import { Component } from '@angular/core';

// Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
@Component({
	moduleId: module.id,
	selector: 'app-header',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
	templateUrl: 'app-header.component.html',
	styleUrls:["app-header.component.css"]
})
export class Header { } // Класс определяющий поведение компонента
