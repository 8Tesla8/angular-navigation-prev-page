import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
})
export class AComponent implements OnInit {

  constructor(public navigation: NavigationService) { }

  ngOnInit() {
  }

}