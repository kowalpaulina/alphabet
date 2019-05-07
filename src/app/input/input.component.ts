import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { getFirstTemplatePass } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  inputMessage: string = '';

  onSubmit(form: NgForm) {
    this.inputMessage = form.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
