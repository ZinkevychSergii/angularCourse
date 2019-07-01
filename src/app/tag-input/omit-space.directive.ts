import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOmitSpace]'
})
export class OmitSpaceDirective {
  private spaceCharCode = 32;

  constructor(private el: ElementRef) {}

  @HostListener('keypress', ['$event'])
  onKeyPress(event) {
    if (event.charCode === this.spaceCharCode) {
      event.preventDefault();
    }
  }
}
