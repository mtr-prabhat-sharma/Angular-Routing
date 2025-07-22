import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewLazyLoadComponent } from './overview-lazy-load.component';

describe('OverviewLazyLoadComponent', () => {
  let component: OverviewLazyLoadComponent;
  let fixture: ComponentFixture<OverviewLazyLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewLazyLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
