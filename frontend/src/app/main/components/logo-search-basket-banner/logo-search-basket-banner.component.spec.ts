import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSearchBasketBannerComponent } from './logo-search-basket-banner.component';

describe('LogoSearchBasketBannerComponent', () => {
  let component: LogoSearchBasketBannerComponent;
  let fixture: ComponentFixture<LogoSearchBasketBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoSearchBasketBannerComponent]
    });
    fixture = TestBed.createComponent(LogoSearchBasketBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
