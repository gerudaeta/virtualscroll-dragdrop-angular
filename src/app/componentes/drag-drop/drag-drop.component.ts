import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  paises: any = [];

  constructor(private _http: HttpClient) { }

  ngOnInit() {
    this._http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(value => {
      this.paises = value;
    });
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
    console.log(this.paises);
  }
}
