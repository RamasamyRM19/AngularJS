import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomRightBarComponentComponent } from './bottom-right-bar-component.component';

describe('BottomRightBarComponentComponent', () => {
  let component: BottomRightBarComponentComponent;
  let fixture: ComponentFixture<BottomRightBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomRightBarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomRightBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
