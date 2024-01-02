import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public apps:any =[
    {
      title:'React',
      subTitle:'Aplicaciones en react',
      imgPath:'../../assets/img/react_app.jpg',
      description:'Diferentes aplicaciones desarrolladas con el framework de reactjs',
      href:'http://app.react.tecappsys.com'
    },
    {
      title:'Angular',
      subTitle:'Aplicaciones en angular',
      imgPath:'../../assets/img/angular_app.jpg',
      description:'Diferentes aplicaciones desarrolladas con el framework de angularjs',
      href:'http://app.angular.tecappsys.com'
    }
  ]

  public constructor(){}

  public navigateToApps(urlPath:string){
    setTimeout(() => {
      window.location.href = urlPath
    }, 100);
  }
}
