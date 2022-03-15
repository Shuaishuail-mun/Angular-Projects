import { Component, OnInit } from '@angular/core';
import {StepsServiceService} from "../steps-service.service";
import {Language} from "../first-step/first-step.component";
import {of, take} from "rxjs";

@Component({
  selector: 'app-second-step',
  templateUrl: './second-step.component.html',
  styleUrls: ['./second-step.component.scss']
})
export class SecondStepComponent implements OnInit {
  languageInput:Language = {firstLanguage:'', secondLanguage:''};
  constructor(private stepsService:StepsServiceService) { }

  ngOnInit(): void {
    this.stepsService.changeEmitted$.subscribe((data)=>{
      console.log('subscribed' + data.firstLanguage);
      this.languageInput = data;
    });
  }

}
