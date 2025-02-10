import { Component, ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';
import { AppModule } from './app.module';
import { AppComponent } from './app/app.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};

bootstrapApplication(AppComponent, appConfig);
