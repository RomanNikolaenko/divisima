import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  visibility: boolean = false;
  toggle() {
    this.visibility = !this.visibility;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
