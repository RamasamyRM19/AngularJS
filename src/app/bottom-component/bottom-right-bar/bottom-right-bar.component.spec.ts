import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRightBarComponent } from './bottom-right-bar.component';

describe('BottomRightBarComponent', () => {
  let component: BottomRightBarComponent;
  let fixture: ComponentFixture<BottomRightBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomRightBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomRightBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
