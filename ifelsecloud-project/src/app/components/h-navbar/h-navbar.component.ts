import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-h-navbar',
  templateUrl: './h-navbar.component.html',
  styleUrls: ['./h-navbar.component.css'],
})
export class HNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  value: string | undefined;
}
