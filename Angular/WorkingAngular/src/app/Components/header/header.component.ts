import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  FirsName: string = 'Onur';

  setName(name: string): any {
    this.FirsName = name;
  }
}
