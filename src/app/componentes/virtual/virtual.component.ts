import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false} ) viewport: CdkVirtualScrollViewport;

  personas = Array(2000).fill(0);

  constructor() { }

  ngOnInit() {
  }

  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }

  irPrincipio() {
    this.viewport.scrollToIndex(0);
  }

  irMedio() {
    this.viewport.scrollToIndex(this.personas.length / 2);
  }
}
