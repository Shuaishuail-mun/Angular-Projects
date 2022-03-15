import {Component, Input, OnInit} from '@angular/core';
import {ImageResources, LayoutIndex} from "../../Files";
import {HttpClient} from "@angular/common/http";
import {ResourcesService} from "../resources.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  accessory:string = '';
  background:string = '';
  ears:string = '';
  eyes:string = '';
  hair:string = '';
  leg:string = '';
  mouth:string = '';
  neck:string = '';
  nose:string = '';
  constructor(private resourcesService:ResourcesService) { }

  @Input() imageResources:ImageResources = {}
  layoutIndex:LayoutIndex = {};
  ngOnInit(): void {
    this.resourcesService.getLayoutIndex().subscribe((data)=> {
      this.layoutIndex = data;
    });
  }

}
