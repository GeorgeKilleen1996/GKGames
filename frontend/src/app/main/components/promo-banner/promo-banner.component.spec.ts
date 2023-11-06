import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoBannerComponent } from './promo-banner.component';

describe('PromoBannerComponent', () => {
  let component: PromoBannerComponent;
  let fixture: ComponentFixture<PromoBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromoBannerComponent]
    });
    fixture = TestBed.createComponent(PromoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
