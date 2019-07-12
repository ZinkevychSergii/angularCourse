import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

import { ArticleListComponent } from './article-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ArticleCreateComponent } from '../article-create/article-create.component';
import { ArticlesService } from '../articles.service';

describe('ArticleListComponent', () => {
  let component: ArticleListComponent;
  let fixture: ComponentFixture<ArticleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
      declarations: [ArticleListComponent, ArticleCreateComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show loading on delete', fakeAsync(() => {
    component.ngOnInit();
    tick(20000);
    fixture.detectChanges();
    let loader = fixture.debugElement.nativeElement.querySelector(
      '.fa-spinner'
    );
    expect(loader).toBeNull();

    component.removeArticle(1);
    fixture.detectChanges();
    loader = fixture.debugElement.nativeElement.querySelector('.fa-spinner');
    expect(loader).toBeDefined();

    tick(2000);
    fixture.detectChanges();
    loader = fixture.debugElement.nativeElement.querySelector('.fa-spinner');
    expect(loader).toBeNull();
  }));
});
