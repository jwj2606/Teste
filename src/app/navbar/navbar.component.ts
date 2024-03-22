import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showNavDropdown = function(item){
    console.log('teste')
    console.log(item)
    if(this.nav[item].active == true){
        this.nav[item].active = false;
    } else {
        for(let i = 0; i < this.nav.length; i++){
            this.nav[i].active = false;
        }
        this.nav[item].active = true;
    }
}




}
