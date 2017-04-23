// Определение компонента app.component
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// импорт декоратора Component из модуля @angular/core
var core_1 = require("@angular/core");
// Применение декоратора Component для класса AppComponent
// Декоратор используется для присвоения метаданных для класса AppComponent
var Content = (function () {
    function Content() {
    }
    return Content;
}()); // Класс определяющий поведение компонента
Content = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-content',
        templateUrl: 'app-content.component.html' // HTML разметка определяющая представление текущего компонента
    })
], Content);
exports.Content = Content;
//# sourceMappingURL=app-content.component.js.map