import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validatorFn } from './tag-input/validator.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private form: FormGroup;
  private tags: string[] = [];

  private allowedTags = ['Lohika', 'Angular', 'JavaScript'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tag: [
        '',
        // from my point of view, app-tag-input should do all validation
        [Validators.required, validatorFn(this.allowedTags, 'Tag not allowed')]
      ]
    });
  }

  onSubmit() {
    const { tag } = this.form.value;
    this.tags.push(tag);
  }
}
