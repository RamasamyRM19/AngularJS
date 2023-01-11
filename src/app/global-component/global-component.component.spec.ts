import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalComponent } from './global-component.component';

describe('TopComponent', () => {
  let component: GlobalComponent;
  let fixture: ComponentFixture<GlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
