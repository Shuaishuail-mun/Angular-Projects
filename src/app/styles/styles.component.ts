import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Decorations, StyleChange} from "../../Files";

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {
  @Output() changeStyleEvent = new EventEmitter<StyleChange>();
  @Input() decorations:Decorations = {};
  selectedPart:string = '';
  selectedStyle:number = -1;

  ngOnChanges(changes:SimpleChanges) {
    const change = changes['decorations'].currentValue;
    if(change && (Object.keys(change).length > 0)) {
      this.selectedPart = Object.keys(changes['decorations'].currentValue)[0];
      this.selectedStyle = 0;
      this.changeStyleOfAlpaca({
        part: this.selectedPart,
        style: this.selectedStyle
      });
    }
  }

  changePart(part:string){
    this.selectedPart = part;
    this.changeStyleOfAlpaca({
      part: part,
      style: this.selectedStyle
    });
  }
  changeStyle(style:number){
    this.selectedStyle = style;
    this.changeStyleOfAlpaca({
      part: this.selectedPart,
      style: style
    });
  }
  changeStyleOfAlpaca(styleChange:StyleChange){
    this.changeStyleEvent.emit(styleChange);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
