import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StepsServiceService} from "../steps-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss']
})
export class FirstStepComponent implements OnInit {
  languageForm = new FormGroup({
    firstLanguage: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ]),
    secondLanguage: new FormControl('',[
      Validators.required,
      Validators.minLength(3)
    ])
  });
  constructor(private stepsService:StepsServiceService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  submitlanguage(){
    console.log(this.languageForm.value);
    this.stepsService.emitChange(this.languageForm.value);
    this.router.navigate(['../second-step'], { relativeTo: this.route });
  }
}

export interface Language{
  firstLanguage:string,
  secondLanguage:string
}
