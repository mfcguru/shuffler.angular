import { Component, OnInit, OnDestroy } from "@angular/core";
import { ShuffleService } from "./shuffle.service";
import { ICardModel } from "./card.model";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { SignalRService } from "./signal-r.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-shuffle",
  templateUrl: "./shuffle.component.html",
  styleUrls: ["./shuffle.component.css"]
})
export class ShuffleComponent implements OnInit, OnDestroy {
  private sub$: any;
  public cards$: Observable<ICardModel[]>;
  public url = environment.publicBaseUrl;

  constructor(
    private shuffleService: ShuffleService,
    public signalRService: SignalRService,
    private route: ActivatedRoute
  ) {
    this.signalRService.startConnection();
    this.signalRService.startListener();
    this.signalRService.eventSink$.subscribe(data => (this.cards$ = of(data)));
  }

  ngOnInit(): void {
    this.sub$ = this.route.data.subscribe(routeInfo => {
      if (routeInfo.action === "api") this.doApiShuffle();
      if (routeInfo.action === "socket") this.doSocketShuffle();
    });
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  doApiShuffle(): void {
    this.cards$ = this.shuffleService.apiShuffle();
  }

  doSocketShuffle(): void {
    this.shuffleService.socketShuffle().subscribe();
  }
}
