import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedService {

  onMobileMenu: Subject<any> = new Subject<any>()

  isMobileMenuOn: boolean = false

  constructor() { }

  toggleMobileMenu(){
    this.isMobileMenuOn = !this.isMobileMenuOn
    this.onMobileMenu.next({
      display: this.isMobileMenuOn
    })
  }

}