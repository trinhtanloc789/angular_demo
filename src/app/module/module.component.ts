import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module', // app-module sẽ được gọi ở trong app.component để chạy component module
  templateUrl: './module.component.html', // đường dẫn tới file html
  styleUrls: ['./module.component.css'] // đường dẫn tới file css
})
// sau khi tạo component thì class ModuleComponent sẽ tự sinh ra sẽ đc gọi trong app.module.ts
export class ModuleComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }
  // khai báo các đoạn text bằng 1 tên để gán qua file HTTML
  title = "Module_1255";
  join = "Join the team!";
  text = "We are always looking for dedicated and dedicated individuals who are striving to build their careers in the hospitality industry. If you would like to join this award group,pleasevisit our Current Recruitment page and register online. We also offer an internship program at our Support Office.";
  apply = "Apply Now" ;
  // khai báo đường dẫn hình ảnh
  imageUrl = 'https://www.wel.org/wp-content/uploads/2016/02/WEL-Chef-icon.png';
  imageClose = "https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-1/254000/45-512.png";
}
