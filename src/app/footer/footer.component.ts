import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear = this.getCurentYear();

  getCurentYear() {
    return new Date().getFullYear();
  }

  constructor() { }

  ngOnInit() {
  }

}
