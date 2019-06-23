import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { FileSizesModule } from './file-sizes/file-sizes.module';
import { httpInterceptorProviders } from './http-interceptors/provider.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    TodosModule,
    FileSizesModule
  ],
  providers: [...httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
