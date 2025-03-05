import { Injectable } from "@angular/core";
import { environment } from "@src/environments/environment";
import { App } from "../shared/interface/app.interface";

@Injectable()
export class AppService{

    private apps:App[] =[
        {
          title:'SPA',
          subtitle:'single page application',
          imgPath:'../../assets/img/angular_spa_app.jpg',
          imgLogoPath:'../../assets/img/angular_spa_app_logo.jpg',
          description:'A single-page application loads a single initial page from the server, then dynamically updates its content through user interactions, eliminating the need to load additional pages from the server.',
          href: environment.appSpa
        },
        {
          title:'Spotify',
          subtitle:'Application using Apis',
          imgPath:'../../assets/img/angular_spotify_app.jpg',
          imgLogoPath:'../../assets/img/angular_spotify_app_logo.jpg',
          description:'Develop an application with Spotify public APIs, manage tokens, perform GET requests, fetch music from artists, and integrate Spotify widget to play songs, plus other functionalities.',
          href: environment.appSpotify
        }
      ]
   
      public getApps() {
        return this.apps;
      }
}