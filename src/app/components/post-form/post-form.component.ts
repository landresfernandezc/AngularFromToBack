import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  constructor(private postService:PostService) { }

  ngOnInit(): void {
  }
  addPost(title:string,body:string){
    if(!title || !body){
      alert('Please add Post')
      
    }{
      console.log(123)
      this.postService.savePost({title,body} as Post).subscribe(post=>{
        console.log(post)
      }

      )
    }
  }
}
