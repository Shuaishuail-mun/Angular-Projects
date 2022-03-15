import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Files, LayoutIndex} from "../Files";
import {Observable, shareReplay} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  files:Observable<Files>;
  layoutIndex:Observable<LayoutIndex>;
  constructor(private http:HttpClient) {
    this.files = http.get<Files>("../assets/fileNames.json").pipe(shareReplay(1));
    this.layoutIndex = http.get<LayoutIndex>('../assets/layoutIndex.json').pipe(shareReplay(1));
  }
  getFiles(){
    return this.files;
  }
  getLayoutIndex(){
    return this.layoutIndex;
  }
}
