import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any>;

  private categoryService;

  constructor(private data: PostService) { }

  ngOnInit(): void {
    this.categoryService = this.data
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }

}
