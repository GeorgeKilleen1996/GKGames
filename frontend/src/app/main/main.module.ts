import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { MainRoutingModule } from './main-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoSearchBasketBannerComponent } from './components/logo-search-basket-banner/logo-search-basket-banner.component';
import { IconModule } from '../ui/icon/icon.module';
import { NavbarDropdownComponent } from './components/navbar-dropdown/navbar-dropdown.component';


@NgModule({
  declarations: [
    HomePageComponent,
    DefaultLayoutComponent,
    NavbarComponent,
    PromoBannerComponent,
    FooterComponent,
    LogoSearchBasketBannerComponent,
    NavbarDropdownComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    IconModule,
    OverlayModule,
  ]
})
export class MainModule { }
