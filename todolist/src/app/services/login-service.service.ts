import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  hasAuth: boolean = !1;

  exibirRotas: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  public logIn (user: string, password: string) {
    this.hasAuth = (
      user === "admin@admin.com" && password === "12345678"
    );

    this.exibirRotas.emit(this.hasAuth);

    this.hasAuth && this.router.navigate(['home']);
  }

  public logOut () {
    this.hasAuth = !1;

    this.exibirRotas.emit(this.hasAuth);

    this.router.navigate(['']);
  }

  isAuthenticated (): boolean {
    return this.hasAuth;
  }
}
