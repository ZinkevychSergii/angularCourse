import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileSizesComponent } from './file-sizes.component';

describe('FileSizesComponent', () => {
  let component: FileSizesComponent;
  let fixture: ComponentFixture<FileSizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileSizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
