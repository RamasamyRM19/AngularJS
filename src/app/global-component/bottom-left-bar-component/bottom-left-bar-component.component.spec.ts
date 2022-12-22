import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLeftBarComponentComponent } from './bottom-left-bar-component.component';

describe('BottomLeftBarComponentComponent', () => {
  let component: BottomLeftBarComponentComponent;
  let fixture: ComponentFixture<BottomLeftBarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomLeftBarComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomLeftBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
