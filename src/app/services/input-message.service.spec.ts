/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InputMessageService } from './input-message.service';

describe('Service: InputMessage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InputMessageService]
    });
  });

  it('should ...', inject([InputMessageService], (service: InputMessageService) => {
    expect(service).toBeTruthy();
  }));
});
