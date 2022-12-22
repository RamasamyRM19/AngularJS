import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCenterBarComponentComponent } from './bottom-center-bar-component.component';

describe('BottomCenterBarComponentComponent', () => {
  let component: BottomCenterBarComponentComponent;
  let fixture: ComponentFixture<BottomCenterBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomCenterBarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomCenterBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
