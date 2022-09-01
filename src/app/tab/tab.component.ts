import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id:any="first";
tabChange(ids:any){
  this.id=ids;
  console.log(this.id);
}
events: string[] = [];

}
