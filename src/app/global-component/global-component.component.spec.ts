import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalComponentComponent } from './global-component.component';

describe('GlobalComponentComponent', () => {
  let component: GlobalComponentComponent;
  let fixture: ComponentFixture<GlobalComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
