import { Component } from '@angular/core';
import { ToDo } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoList:ToDo []=[];

  todo:ToDo = this.initTodo;



  get initTodo ():ToDo{
    return {
      Title:'',
      Id:null
    }
  }

  addTodo():void{
    console.log(this.todo)
    if(this.todo.Id){

    this.todoList = this.todoList.map(o=> {

      if(o.Id == this.todo.Id){
        o.Title = this.todo.Title;
      }
      return o;
    })


      // update logic
    } 
    else {
      // create logic
      this.todo.Id = Date.now();
      this.todoList.push({...this.todo});
     }
  }

  editToDo(todo:ToDo):void{
    this.todo={...todo};
  }

  deleteList(id:number):void{
    this.todoList=this.todoList.filter(c=>c.Id!=id);
  }

}
