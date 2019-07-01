import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tag-input',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => TagInputComponent)
    }
  ],
  template:
    '<input appOmitSpace (input)="onChange($event.target.value)" [value]="value" type="text"  />',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent implements ControlValueAccessor {
  value = '';

  propagateChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    if (value) {
      this.onChange(value);
    }
  }

  onChange(value) {
    this.value = value.replace();
    this.propagateChange(value);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
