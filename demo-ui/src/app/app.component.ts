import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/service/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo-ui';

  constructor(public appService: AppService) { }

  ngOnInit() {
    this.getMockData();
  }

  getMockData(): void {
    this.appService.getMockData().subscribe(
      res => {
        console.log(res);

        this.title = res.title;
      }
    );
  }
}
