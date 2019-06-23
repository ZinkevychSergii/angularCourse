import { FileSizesService } from './file-sizes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-sizes',
  templateUrl: './file-sizes.component.html',
  styleUrls: ['./file-sizes.component.css']
})
export class FileSizesComponent {
  constructor(private fileSizes: FileSizesService) {}

  newSize: string;

  get sizes() {
    return this.fileSizes.getSizes();
  }

  addSize() {
    this.fileSizes.addSize(this.newSize);
    this.newSize = '';
  }
}
