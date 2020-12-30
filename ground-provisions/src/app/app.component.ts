import { Component } from '@angular/core';

@Component({
  selector: 'gp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   loadedFeature = 'recipe';
  title: any;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
