import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmCrudComponent } from './elm-crud.component';

describe('ElmCrudComponent', () => {
  let component: ElmCrudComponent;
  let fixture: ComponentFixture<ElmCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElmCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElmCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
