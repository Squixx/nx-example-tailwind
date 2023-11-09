import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UsingTailwindModule } from '@tailwind-demo/using-tailwind';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UsingTailwindModule],
  selector: 'tailwind-lib-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'base-app';
}
