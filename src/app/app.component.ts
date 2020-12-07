import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
 // template:`<h1>Welcome to Angular</h1>
 // <h2>{{title}} This is my First Project</h2>`,
  styleUrls: ['./app.component.css']
  //styles:['h1{color:blue}' , 'h2{color:red}']      //it receives array
})
export class AppComponent {
  title = 'myapp1';
}
