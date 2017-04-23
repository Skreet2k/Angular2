// Класс AppModule - точка входа в данное приложение 
// Angular модуль - класс с декоратором NgModule
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_header_component_1 = require("./header/app-header.component");
var app_footer_component_1 = require("./footer/app-footer.component");
var app_content_component_1 = require("./content/app-content.component");
var registration_component_1 = require("./registration/registration.component");
var router_1 = require("@angular/router");
// @NgModule - декоратор, который определяет данные для создаваемого модуля.
// Для того чтобы приложение могло выполняться в браузере, текущий модуль (корневой модуль)
// должен выполнить импорт модуля BrowserModule взятого из @angular/platform-browser 
// Задача BrowserModule зарегистрировать основные сервис провайдеры приложения, 
// а также добавить общие директивы такие как ngIf и ngFor
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: 'registration', component: registration_component_1.Registration },
                { path: 'content', component: app_content_component_1.Content },
                {
                    path: '',
                    redirectTo: '/content',
                    pathMatch: 'full'
                }
            ])
        ],
        declarations: [app_component_1.AppComponent, app_header_component_1.Header, app_footer_component_1.Footer, app_content_component_1.Content, registration_component_1.Registration],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map