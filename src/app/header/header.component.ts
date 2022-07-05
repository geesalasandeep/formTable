import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  storedTheme: string;

  constructor() { }

  ngOnInit(): void {
  }

  setTheme(theme){
    localStorage.setItem('theme-color',theme);
    this.storedTheme = localStorage.getItem('theme-color')
  }

}
