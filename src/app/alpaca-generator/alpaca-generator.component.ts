import { Component, OnInit } from '@angular/core';
import {Decorations, Files, ImageResources, StyleChange} from "../../Files";
import {ResourcesService} from "../resources.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-alpaca-generator',
  templateUrl: './alpaca-generator.component.html',
  styleUrls: ['./alpaca-generator.component.scss']
})
export class AlpacaGeneratorComponent implements OnInit {
  files:Files = {};
  imageResources:ImageResources = {};
  decorations:Decorations = {};
  constructor(private resourceService:ResourcesService, private router:Router) {}

  ngOnInit(): void {
    this.resourceService.getFiles().subscribe((data) => {
      this.composeVariables(data);
    });
  }

  composeVariables(data:Files){
    console.log(data);
    this.files = data;
    Object.keys(data).forEach((key, index)=>{
      this.imageResources = {...this.imageResources,
        [key]: data[key][0]
      };
      this.decorations = {...this.decorations,
        [key]: data[key].map((fileName) => fileName.split(".")[0])
      };
    });
  };

  changeStyle(styleChange:StyleChange){
    this.imageResources = {
      ...this.imageResources,
      [styleChange.part]:this.files[styleChange.part][styleChange.style]
    };
  }

  goToVocabulary(){
    this.router.navigateByUrl('/vocabulary-test');
  }

}
