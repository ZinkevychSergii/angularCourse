import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosModule } from './todos/todos.module';
import { FileSizesModule } from './file-sizes/file-sizes.module';
import { SizeFormatPipe } from './file-size/size-format.pipe';

@NgModule({
  declarations: [AppComponent, SizeFormatPipe],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    TodosModule,
    FileSizesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
