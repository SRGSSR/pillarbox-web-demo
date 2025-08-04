import {AfterViewInit, Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {default as pillarbox, Player as PillarboxPlayer} from "@srgssr/pillarbox-web";

@Component({
    selector: 'pb-player',
    imports: [],
    template: `
    <video id="main-player" class="video-js pillarbox-js" controls crossOrigin="anonymous"></video>
  `
})
export class PillarboxComponent implements AfterViewInit, OnChanges {
  @Input() type: string = 'srgssr/urn';
  @Input() src!: string;

  private player?: PillarboxPlayer;
  ngAfterViewInit(): void {
    this.player = pillarbox('main-player') as PillarboxPlayer;
    this.updatePlayerSource();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src'] || changes['type']) {
      this.updatePlayerSource();
    }
  }
  private updatePlayerSource(): void {
    if (this.player && this.src && this.type) {
      this.player.src({src: this.src, type: this.type});
    }
  }
}
