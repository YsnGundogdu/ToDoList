import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  list : ListModel [] = [];
  workInput : any;
  isChecked : boolean = false; 

  ngOnInit(): void {
  }

  constructor(){}

  add(){
    if (this.workInput != null) {
      this.list.push({
        id : this.list.length,
        isComplete : false,
        work : this.workInput
      });
  
      this.workInput = null;  
    }
  }

  remove(index:any){
    this.list.splice(index, 1);
  }
}




export interface ListModel{
  id:number;
  work:string;
  isComplete:boolean;
}
