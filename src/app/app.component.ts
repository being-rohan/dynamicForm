import { Component } from '@angular/core';
import { Iform } from './interface';
import { dynamicformConfig } from './constants/dyamicfrom.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamicForm';
  registerForm=dynamicformConfig as Iform
}
