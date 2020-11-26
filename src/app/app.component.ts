import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

export interface IItem {
  title: string;
  order: number;
}

@Pipe({
    name: 'myOrder',
    pure: false
})
export class MyOrderPipe implements PipeTransform {
  transform(array: IItem[]): IItem[] {
    if (!Array.isArray(array)) {
      return;
    }
    array = array.sort((a: IItem, b: IItem) => a.order - b.order)
    return array;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: IItem[];

  ngOnInit() {
    this.items = [
      {title: "item1", order: 1},
      {title: "item2", order: 3},
      {title: "item3", order: 2},
    ]
  }
}
