import { Injectable } from '@angular/core';

type Color = string; 

@Injectable({
  providedIn: 'root'
})
export class RandomColorService {
  public getRandomColor() : Color {
    const color = Math.floor(Math.random()*16777215).toString(16);

    return color;
  }
}
