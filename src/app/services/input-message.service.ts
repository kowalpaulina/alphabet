import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputMessageService {
private subjectMessage = new Subject<string>();

sendMessage(message: string) {
    this.subjectMessage.next(message);
}

getMessage(): Observable<string> {
  console.log(this.subjectMessage.asObservable());
  return this.subjectMessage.asObservable();
}

constructor() { }

}
