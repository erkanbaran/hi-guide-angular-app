import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [
    new Post('Perfect Antalya','You must see','http://mithratravel.com/wp-content/uploads/2018/02/KEKOVA.jpg'),
    new Post('Amazing Istanbul','You must see','http://mithratravel.com/wp-content/uploads/2018/02/KEKOVA.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
