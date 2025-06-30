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
import { SideButtons } from './side-buttons/side-buttons';

@NgModule({
  declarations: [App, Main, SideButtons],
  imports: [
    BrowserModule,
    YemotDesignMainModule.forRoot([]),
    RouterModule.forRoot(routes),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [App],
})
export class AppModule {}
