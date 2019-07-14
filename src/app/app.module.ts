import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailComponent } from './posts/post-detail/post-detail.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { PlacesComponent } from './places/places.component';
import { PlaceListComponent } from './places/place-list/place-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostListComponent,
    PostDetailComponent,
    PostItemComponent,
    PlacesComponent,
    PlaceListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
