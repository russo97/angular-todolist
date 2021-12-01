import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  isAuthenticated: boolean = !0;

  exibirRotas: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router: Router) {}

  public logIn (user: string, password: string) {
    this.isAuthenticated = (
      user === "admin@admin.com" && password === "12345678"
    );

    this.exibirRotas.emit(this.isAuthenticated);

    this.isAuthenticated && this.router.navigate(['']);
  }

  public logOut () {
    this.isAuthenticated = !1;

    this.exibirRotas.emit(this.isAuthenticated);

    this.router.navigate(['']);
  }
}
