import { Component } from '@angular/core';
import { NavbarService } from '../../services/navbar-service/navbar.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  constructor(protected navbarService: NavbarService) { }
}
