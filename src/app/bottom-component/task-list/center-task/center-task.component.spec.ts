import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterTaskComponent } from './center-task.component';

describe('CenterTaskComponent', () => {
  let component: CenterTaskComponent;
  let fixture: ComponentFixture<CenterTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
