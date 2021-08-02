import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
})
export class BComponent implements OnInit {

  constructor(public navigation: NavigationService) { }

  ngOnInit() {
  }

}