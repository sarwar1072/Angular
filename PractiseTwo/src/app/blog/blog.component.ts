//import { Component } from '@angular/core';
import { Blog } from '../app.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  @Output() onLikeEvent=new EventEmitter();

  @Input({required:true}) blog!:Blog;
  onLike(): void{
    this.onLikeEvent.emit(this.blog);
  }
}
