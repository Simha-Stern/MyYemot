import { YemotDesignMainModule } from '@yemot/yemot-design';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes';
import { Main } from './main/main';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

@NgModule({
  declarations: [App, Main],
  imports: [
    BrowserModule,
    YemotDesignMainModule.forRoot([]),
    RouterModule.forRoot(routes),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [App],
})
export class AppModule {}
