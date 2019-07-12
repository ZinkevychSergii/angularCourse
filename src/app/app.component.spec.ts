import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('should render navigation', () => {
    const nav = [
      { path: '/list', text: 'Testing' },
      { path: '/list', text: 'Article List' },
      { path: 'create', text: 'Create Article' }
    ];
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelectorAll('a').forEach(link => {
      const exists = nav.find(
        n => n.path === link.getAttribute('routerlink') && n.text === link.text
      );
      expect(exists).toBeDefined();
    });
  });
});
