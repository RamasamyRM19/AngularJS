import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomLeftBarComponent } from './bottom-left-bar.component';

describe('BottomLeftBarComponent', () => {
  let component: BottomLeftBarComponent;
  let fixture: ComponentFixture<BottomLeftBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomLeftBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomLeftBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
