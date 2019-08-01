import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '這是什麼？';
  isCollapsed = false;
  backIcon: string | null = null;
  pageTitle = '';
  pageSubTitle = '';

  constructor() { }

  ngOnInit() { }

  onBack() {
    window.history.go(-1);
  }
}
