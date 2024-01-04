import { Component } from '@angular/core';
import { environment } from '@src/environments/environment.dev';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public apps:any =[
    {
      title:'SPA',
      subtitle:'single page application',
      imgPath:'../../assets/img/angular_spa_app.jpg',
      imgLogoPath:'../../assets/img/angular_spa_app_logo.jpg',
      description:'A single-page application is a type of web application that loads a single initial page from the server and then dynamically updates its content, through user interactions, without the need to load additional pages from the server.',
      href: environment.app_spa
    },
    {
      title:'Spotify',
      subtitle:'Application using Apis',
      imgPath:'../../assets/img/angular_spotify_app.jpg',
      imgLogoPath:'../../assets/img/angular_spotify_app_logo.jpg',
      description:'Application with use of spotify public apis, token management, get requests, get music from artists, use spotify widget to play the song, among other things.',
      href: environment.app_spotify
    }
  ]

  public constructor(){}

  public navigateToApps(urlPath:string){
    setTimeout(() => {      
      window.location.href = urlPath
    }, 100);
  }


}
