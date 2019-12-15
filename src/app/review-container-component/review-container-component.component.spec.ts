import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewContainerComponentComponent } from './review-container-component.component';

describe('ReviewContainerComponentComponent', () => {
  let component: ReviewContainerComponentComponent;
  let fixture: ComponentFixture<ReviewContainerComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewContainerComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
