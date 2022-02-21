import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  active() {
    let homeNav = document.querySelector('#home') as HTMLSpanElement
    let aboutNav = document.querySelector('#about') as HTMLSpanElement
    aboutNav.classList.remove('active')
    homeNav.classList.add('active')
  }

  active2() {
    let homeNav = document.querySelector('#home') as HTMLSpanElement
    let aboutNav = document.querySelector('#about') as HTMLSpanElement
    homeNav.classList.remove('active')
    aboutNav.classList.add('active')
  }

}
