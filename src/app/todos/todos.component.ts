import { Component, OnInit } from '@angular/core';
export class Todo{
    constructor(
    public id:number,
    public description:string,
    public targetDate:Date,
    public done:boolean
    ){
    }

}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.sass']
})
export class TodosComponent implements OnInit {

 todos = [
 new Todo(1, 'desc',new Date(),false),
 new Todo(2, 'wake up',new Date(),false),
 new Todo(3, 'write code',new Date(),false),
  new Todo(4, 'visit Turkey',new Date(),false)

 ];
  constructor() { }

  ngOnInit(): void {
  }

}
