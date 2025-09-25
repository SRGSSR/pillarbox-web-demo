import { ElementRef, Injectable } from "@angular/core";
import pillarbox, { Player } from "@srgssr/pillarbox-web";

@Injectable({ providedIn: "root" })
export class PillarboxComponent {
  private readonly players = new Map<string, Player>();

  dispose(playerId: string): void {
    this.disposePlayer(playerId);
  }

  disposePlayer(playerId: string): void {
    this.players.get(playerId)?.dispose();
    this.players.delete(playerId);
  }

  hasPlayer(playerId: string): boolean {
    return this.players.has(playerId);
  }

  initPlayer(playerId: string, container: ElementRef, audioOnlyMode: boolean): void {
    const options = {
      audioOnlyMode,
      playbackRates: [0.5, 1, 1.5, 2],
      fluid: true,
      titleBar: false,
    };
    const player: Player = pillarbox(container.nativeElement, options) as Player;
    this.players.set(playerId, player);
  }

  initOrSetSource(playerId: string, source: string, container?: ElementRef, audioOnlyMode?: boolean): void {
    if (!this.hasPlayer(playerId) && container && audioOnlyMode !== undefined) {
      this.initPlayer(playerId, container, audioOnlyMode);
    }
    this.setSource(playerId, source);
  }

  getCurrentTime(playerId: string): number {
    return this.players.get(playerId)?.currentTime() ?? 0;
  }

  setCurrentTime(playerId: string, value: number): void {
    this.players.get(playerId)?.currentTime(value);
  }

  hidePoster(playerId: string): void {
    this.players.get(playerId)?.addClass("vjs-has-started");
  }

  paused(playerId: string): boolean {
    return this.players.get(playerId)?.paused() ?? true;
  }

  pause(playerId: string): void {
    this.players.get(playerId)?.pause();
  }

  async play(playerId: string): Promise<void> {
    await this.players.get(playerId)?.play();
  }

  setSource(playerId: string, source: string): void {
    if (source.includes("urn:")) {
      this.players.get(playerId)?.src({ src: source, type: "srgssr/urn" });
    } else {
      this.players.get(playerId)?.src(source);
    }
  }
}
