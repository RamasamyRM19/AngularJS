import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomCenterBarComponent } from './bottom-center-bar.component';

describe('BottomCenterBarComponent', () => {
  let component: BottomCenterBarComponent;
  let fixture: ComponentFixture<BottomCenterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomCenterBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomCenterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
