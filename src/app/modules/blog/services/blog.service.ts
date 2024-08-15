import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  //set random blogs for sample
  blogArray: Blog[] = [
    {
      id: 1,
      title: 'Blog A',
      description:'This is blog A.',
      author: 'Author A',
      comments:['This blog is generic.', 'This is boring.']
    },
    {
      id: 2,
      title: 'Blog B',
      description:'This is blog B.',
      author: 'Author B',
      comments:['This blog is useless.', 'Open the schools.']
    },
    {
      id: 3,
      title: 'Blog C',
      description:'This is blog C.',
      author: 'Author C',
      comments:['Okay.', 'Hmmm...']
    }
  ]

  defaultBlog : Blog = {id: this.blogArray.length + 1, title: '', description:'', author:'',comments:['']}
  selectedBlog = this.defaultBlog;

  setSelectedBlog = (id : number) => {
    if(id===0){
      this.selectedBlog = this.defaultBlog
    } else this.selectedBlog = this.blogArray[id - 1]
  } 

  getBlogs = () => {
    return this.blogArray;
  }
}
