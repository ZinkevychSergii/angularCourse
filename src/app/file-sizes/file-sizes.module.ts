import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileSizesComponent } from './file-sizes.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BigFileDirective } from './big-file.directive';
import { SizeFormatPipe } from './size-format.pipe';

@NgModule({
  declarations: [FileSizesComponent, BigFileDirective, SizeFormatPipe],
  imports: [FormsModule, CommonModule, MatInputModule, MatListModule],
  exports: [FileSizesComponent]
})
export class FileSizesModule {}
