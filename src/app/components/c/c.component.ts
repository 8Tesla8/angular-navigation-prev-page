import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
})
export class CComponent implements OnInit {

  constructor(public navigation: NavigationService) { }

  ngOnInit() {
  }

}