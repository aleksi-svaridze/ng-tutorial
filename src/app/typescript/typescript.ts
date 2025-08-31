import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.html',
})
export class Typescript {
  fullName: string = 'aleksi svaridze';
  age: number = 43;
  hasJob: boolean = false;

  someVariable: unknown = false;
}