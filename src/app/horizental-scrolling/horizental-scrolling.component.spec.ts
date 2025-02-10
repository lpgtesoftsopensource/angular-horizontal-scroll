import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizentalScrollingComponent } from './horizental-scrolling.component';

describe('HorizentalScrollingComponent', () => {
  let component: HorizentalScrollingComponent;
  let fixture: ComponentFixture<HorizentalScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizentalScrollingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizentalScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
