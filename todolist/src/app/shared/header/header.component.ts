import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  isLoggedIn = false;

  constructor() { }

  ngOnInit(): void {
  }

}
