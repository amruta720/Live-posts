import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import {PostService} from '../post.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
   ListOfPosts: Post[]=[];
  constructor(private postService:PostService) {}
   

  ngOnInit(): void {
    this.postService.listchanged.subscribe((listOfPosts:Post[])=>{
   this.ListOfPosts=listOfPosts;
    });
    this.ListOfPosts=this.postService.getPosts();
  }

}
