import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {Language} from "./first-step/first-step.component";

@Injectable({
  providedIn: 'root'
})
export class StepsServiceService {
  private languageInputChange = new BehaviorSubject<Language>({
    firstLanguage:'',secondLanguage:''});
  changeEmitted$ = this.languageInputChange.asObservable();
  constructor() { }

  emitChange(change:Language){
    console.log('emitted:' + change.firstLanguage);
    this.languageInputChange.next(change);
  }
}
