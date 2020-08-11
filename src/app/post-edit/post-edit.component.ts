import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.services';
import { Router, Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
   postForm: FormGroup;
   index: number;
  constructor(private postService: PostService,
    private routerService:Router,
    private routeService: ActivatedRoute) { }

  ngOnInit(): void {
    let title: String="";
    let desc: String="";
    let imagePath:String="";
    this.routeService.params.subscribe((params:Params)=>{
      this.index=params['index'];
      if(this.index){
     const post: Post =this.postService.getPost(this.index);
     console.log(post);
     title =post.title;
     desc = post.desc;
     imagePath=post.imagePath;
      }

    });
    this.postForm=new FormGroup({
     title:new FormControl(title,[Validators.required]),
     desc:new FormControl(desc,[Validators.minLength(10)]),
     imagePath:new FormControl(imagePath,[Validators.required]),
  });
}
    onSubmit(){
    const ob: Post= new Post(
      this.postForm.value.title,
      this.postForm.value.desc,
      this.postForm.value.imagePath,
      'test@test.com',
      new Date()
    );
    if(this.index){

    }
      this.postService.addPost(ob);
     this.routerService.navigate(['post-list']);
    }
  }
