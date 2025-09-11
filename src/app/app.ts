import { Component, signal } from '@angular/core';
import { Typescript } from "./typescript/typescript";
import { Bank } from "./bank/bank";

@Component({
  selector: 'app-root',
  imports: [Typescript, Bank],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-tutorial: week 1: Typescript');
}
