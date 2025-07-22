import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesLazyLoadComponent } from './features-lazy-load.component';

describe('FeaturesLazyLoadComponent', () => {
  let component: FeaturesLazyLoadComponent;
  let fixture: ComponentFixture<FeaturesLazyLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturesLazyLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturesLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
