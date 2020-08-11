import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService{
  listchanged= new Subject<Post[]>();
    ListOfPosts: Post[]=[
        /*new Post(
          'World Ocean Day',
         `World Oceans Day is an international day that takes place annually on 8 June. 
          The concept was originally proposed in 1992 by Canada's International Centre for Ocean
           Development and the Ocean Institute of Canada at the Earth Summit – UN Conference on Environment and
           Development in Rio de Janeiro, Brazil. 
          `,
          'https://www.awarenessdays.com/wp-content/uploads/2018/07/WorldOceansDay.jpg',
          'test@test',
          new Date()
         ),
        new Post(
          'World Mountain Day',
          `Mountain Day refers to three different and unrelated events: (1) Mountain Day, 
          a student celebration in some colleges in the United States in which classes are cancelled without prior notice, and the student body heads to the mountains or a park, (2) International Mountain Day, held each year on 11 December
          `,
      'https://www.geo.tv/assets/uploads/updates/2017-12-11/171702_9345675_updates.jpg',
          'test@test',
          new Date()
          ),
          new Post(
            'World Environment Day',
            `World Environment Day is celebrated on 5 June every year, and is the United Nations' principal vehicle for encouraging awareness and action for the protection of the environment.
             `,
            'https://unrcca.unmissions.org/sites/default/files/styles/full_width_image/public/field/image/final_featured-image-sgmessage.jpg?itok=GxK7Lh7q',
           'test@test',
          new Date()
           )
    */
       ];
     addPost(post: Post){
         this.ListOfPosts.push(post);
     }
     updatePost(index:number,post:Post){
         this.ListOfPosts[index]=post;
     }
     deletePost(index:number){
         this.ListOfPosts.splice(index,1);
     }
     getPosts(){
        return this.ListOfPosts;
     }
     getPost(index:number){
         return this.ListOfPosts[index];
     }
     setPosts(ListOfPosts:Post[]){
       if(ListOfPosts){
       this.ListOfPosts=ListOfPosts;
       }
       else{

              this.ListOfPosts=[];
       }
       this.listchanged.next(this.ListOfPosts);
       
       
     }
}