import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncTableComponent } from './func-table.component';

describe('FuncTableComponent', () => {
  let component: FuncTableComponent;
  let fixture: ComponentFixture<FuncTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuncTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
