import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


import { BlogService } from "../blog.service";
import { Blog } from "../blog";

@Component({
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent implements OnInit {
  constructor (private blo: BlogService) {
  }

  ngOnInit() {


      this.getBlogs();

  }

  // Public properties
    blogs: Blog[] = [];
  
  

    private getBlogs() {
        this.blo.getBlogs()
            .subscribe(b => this.blogs = b);
    }

}