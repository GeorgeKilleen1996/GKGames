import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }

  protected backdrop = false

  getBackdrop() {
    return this.backdrop
  }

  showBackdrop() {
    this.backdrop = true
  }

  removeBackdrop() {
    this.backdrop = false
  }

}
