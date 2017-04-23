// Определение компонента app.component

// импорт декоратора Component из модуля @angular/core
import { Component } from '@angular/core';

// Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
@Component({
	moduleId: module.id,
	selector: 'registration',                       // Селектор, который определяет какой элемент DOM дерева будет представлять компонент.
	templateUrl: 'registration.component.html',
	styleUrls:["registration.component.css"]
})
export class Registration { } // Класс определяющий поведение компонента
