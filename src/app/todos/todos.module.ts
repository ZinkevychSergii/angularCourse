import { NgModule } from '@angular/core';
import { TodosComponent } from './todos.component';
import { TodosService } from './todos.service';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [TodosService],
  exports: [TodosComponent]
})
export class TodosModule {}
