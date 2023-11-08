import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar-service/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private navbarService: NavbarService) { }

  protected navbarData = ''

  protected showMenu(data: string) {
    this.navbarData = data
    this.navbarService.showBackdrop()
  }

  protected hideMenu() {
    this.navbarData = ''
    this.navbarService.removeBackdrop()
  }
}
