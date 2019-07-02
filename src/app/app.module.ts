import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './config/routes';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './navigation/navigation.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [AppComponent, NavigationComponent],
  imports: [
    HomeModule,
    MatMenuModule,
    AboutModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
