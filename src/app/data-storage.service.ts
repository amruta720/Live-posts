import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './post.services';
import { tap } from 'rxjs/operators';
@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor(private httpService: HttpClient, private postService: PostService){}
   saveData(){
       //step1
       const listOfPosts: Post[]=this.postService.getPosts();
       //console.log(listOfPosts);

       this.httpService.put('https://live-posts-2b405.firebaseio.com/posts.json',listOfPosts).subscribe((res)=>{
           console.log(res);
       });
   }
   fetchData(){
       this.httpService.get('https://live-posts-2b405.firebaseio.com/posts.json').pipe(tap((listOfposts:Post[])=>{
        this.postService.setPosts(listOfposts);
    })).subscribe();
   }
}