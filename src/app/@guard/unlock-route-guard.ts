import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { WalletService } from '@service/wallet.service';
import { CookieService } from '@service/cookie.service';

@Injectable()
export class UnlockRouteGuard implements CanActivate {

  constructor(
    private wallet: WalletService,
    private cookie: CookieService,
    private router: Router) {}

  canActivate() {
    if (!this.cookie.hasAcceptedTerms()) {
      this.router.navigateByUrl('/accept-terms')
      return false
    }

    if (!this.wallet.isUnlocked()) {
      this.router.navigateByUrl('/login')
      return false
    }

    return this.wallet.isUnlocked()
  }
}