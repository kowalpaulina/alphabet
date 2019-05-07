import { Component, OnDestroy } from '@angular/core';
import { InputMessageService } from '../services/input-message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnDestroy {
  items = [
    {
      name: 'A',
      link: '/a'
    },
    {
      name: 'B',
      link: '/b'
    }
  ];

  message: string;
  messageToDisplay: Subscription;


  constructor(private readonly inputMessageService: InputMessageService) {
    this.messageToDisplay = this.inputMessageService.getMessage().subscribe(message => {
      this.message = message;
    });
   }

  ngOnDestroy() {
    if (this.messageToDisplay) {
      this.messageToDisplay.unsubscribe();
    }
  }

}
