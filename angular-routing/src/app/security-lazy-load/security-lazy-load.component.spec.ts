import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityLazyLoadComponent } from './security-lazy-load.component';

describe('SecurityLazyLoadComponent', () => {
  let component: SecurityLazyLoadComponent;
  let fixture: ComponentFixture<SecurityLazyLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecurityLazyLoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecurityLazyLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
