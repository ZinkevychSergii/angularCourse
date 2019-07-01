import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { FileSizesModule } from './file-sizes/file-sizes.module';
import { httpInterceptorProviders } from './http-interceptors/provider.interceptor';
import { TagInputComponent } from './tag-input/tag-input.component';
import { OmitSpaceDirective } from './tag-input/omit-space.directive';

@NgModule({
  declarations: [AppComponent, TagInputComponent, OmitSpaceDirective],
  imports: [
    ReactiveFormsModule,
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
