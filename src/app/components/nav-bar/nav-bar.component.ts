import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public navigation: NavigationService) { }

  ngOnInit() {
  }

}