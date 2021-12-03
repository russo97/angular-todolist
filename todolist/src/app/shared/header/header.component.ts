import { Component, OnInit, Input } from '@angular/core';

import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  exibirMenu: boolean = !1;

  constructor(private loginService: LoginServiceService) {}

  ngOnInit(): void {
    this.loginService.exibirRotas.subscribe(exibir => this.exibirMenu = exibir);
  }

}
