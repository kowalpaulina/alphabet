import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { InputMessageService } from '../services/input-message.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  inputMessage: string = '';

  onSubmit(form: NgForm) {
    this.inputMessage = form.form.controls.inputMessage.value;
    this.inputMessageService.sendMessage(this.inputMessage);
  }

  constructor(private readonly inputMessageService: InputMessageService) {
    this.inputMessage = '';
    this.inputMessageService.sendMessage(this.inputMessage);   }

}
