import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-light-content56',
  templateUrl: './light-content56.component.html',
  styleUrls: ['./light-content56.component.scss']
})
export class LightContent56Component implements OnInit {
  @Input() content: number = 5;

  constructor(public screen: Screen) { }

  ngOnInit(): void {
  }

}
