import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  title = "Front Page"

  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.title)
  }

}
