export interface Files{
  [key:string]: string[];
}

export interface Decorations{
  [key:string]:string[];
}

export interface ImageResources{
  [key:string]:string;
}

export interface LayoutIndex{
  [key:string]:number;
}

export interface StyleChange{
  part:string,
  style:number
}
