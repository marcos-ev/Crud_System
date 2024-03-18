import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  userName: string | null;

  ngOnInit(){
    this.userName = sessionStorage.getItem('user');
  }

}
