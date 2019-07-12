import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { ArticleCreateComponent } from './article-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ArticleListComponent } from '../article-list/article-list.component';
import { Router } from '@angular/router';

describe('ArticleCreateComponent', () => {
  let component: ArticleCreateComponent;
  let fixture: ComponentFixture<ArticleCreateComponent>;

  const router = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
      declarations: [ArticleCreateComponent, ArticleListComponent]
    })
      .overrideProvider(Router, {
        useValue: router
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit', fakeAsync(() => {
    component.form.controls.title.setValue('title');
    component.form.controls.text.setValue('text');
    component.submit();
    expect(component.isLoading).toBeTruthy();
    tick(2000);
    expect(router.navigate).toHaveBeenCalledWith(['/list'], {
      queryParams: { new: true }
    });
  }));
});
