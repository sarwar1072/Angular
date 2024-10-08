import { Component } from '@angular/core';
import { BlogServices } from './blog-post/blog.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectOne';

  blogs=['b1','b2','b3'];

  getTitle(){
    return this.title;
  }

    blogpost;
    constructor(service:BlogServices){
      this.blogpost=service.getBlog();
    }
    
  //number=1;
  //  onClick1(a:any){
  //   this.number++;
  //  }
  //  onClick2(a:any){
  //   if(this.number>0){
  //     this.number--;
  //   }
    
   //}

  imgesrc="https://images.unsplash.com/photo-1566550569459-be4f296b1f98?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}
