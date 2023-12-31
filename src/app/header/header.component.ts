import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>
     {{title}}
    </h2>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'My Notes';

}
