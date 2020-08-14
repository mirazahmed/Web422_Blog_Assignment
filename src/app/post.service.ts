import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';



const perPage = 6;

@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http:HttpClient) {}

  //get all posts
  getPosts(page, tag, category): Observable<BlogPost[]>{

    let url=`https://murmuring-headland-49010.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;
    if(category != null || category != undefined){
      url=url+"&category="+category;
    }

    if(tag != null || tag != undefined){
      // tag=tag.trim();
      if(tag.charAt(0)==='#'){
          tag=tag.slice(1);          
      }
      url = `${url}&tag=${tag}`;
    }

    return this.http.get<BlogPost[]>(url);
}


  //get post by id
  getPostById(id): Observable<BlogPost>{
      let url=`https://murmuring-headland-49010.herokuapp.com/api/posts/${id}`;
      return this.http.get<BlogPost>(url);
  }


  //get categories
  getCategories(): Observable<any>{
      let url=`https://murmuring-headland-49010.herokuapp.com/api/categories`;
      return this.http.get<any>(url);
  }

  //get tags
  getTags(): Observable<string []>{
      let url=`https://murmuring-headland-49010.herokuapp.com/api/tags`;
      return this.http.get<string []>(url);
  }

  //get all posts
  getAllPosts(): Observable<BlogPost[]>{
    let url=`https://murmuring-headland-49010.herokuapp.com/api/posts?page=1&perPage=Number.MAX_SAFE_INTEGER`;
    return this.http.get<BlogPost[]>(url);
  }

  //post new post
  newPost(data: BlogPost):Observable<any>{
    let url=`https://murmuring-headland-49010.herokuapp.com/api/posts`;
    return this.http.post<any>(url, data);
  }

   //update post by id
   updatePostById(id:String, data:BlogPost):Observable<any>{
    let url=`https://murmuring-headland-49010.herokuapp.com/api/posts/${id}`;
    return this.http.put<any>(url, data);
  }

  //delete post by id
  deletePostById(id:String):Observable<any>{
    let url=`https://murmuring-headland-49010.herokuapp.com/api/posts/${id}`;
    return this.http.delete<any>(url);
  }




}
