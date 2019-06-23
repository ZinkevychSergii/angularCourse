import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileSizesService {
  private sizes: string[] = [];

  getSizes(): string[] {
    return this.sizes;
  }

  addSize(todo: sting) {
    this.sizes.push(todo);
  }
}
