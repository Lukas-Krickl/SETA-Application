import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inhalte-page',
  templateUrl: './inhalte-page.component.html',
  styleUrls: ['./inhalte-page.component.sass']
})
export class InhaltePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollToTop(div:HTMLElement){
    div.scroll(0,0)
  }

}
