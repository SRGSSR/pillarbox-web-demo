import {Component} from '@angular/core';
import {PillarboxComponent} from "./pillarbox.component";
@Component({
  selector: 'pb-root',
  standalone: true,
  imports: [
    PillarboxComponent
  ],
  template: `
    <header>
      <div class="logo-container">
        <img src="../assets/pb.webp" class="logo" alt="Pillarbox logo"/>
        <img src="../assets/angular.svg" class="logo" alt="Angular logo"/>
      </div>
      <h1>Pillarbox + Angular</h1>
    </header>
    <div class="player-container">
      <pb-player src="urn:rsi:video:1386617"></pb-player>
    </div>
  `,
})
export class AppComponent {
}
