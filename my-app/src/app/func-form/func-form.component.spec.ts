import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncFormComponent } from './func-form.component';

describe('FuncFormComponent', () => {
  let component: FuncFormComponent;
  let fixture: ComponentFixture<FuncFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
