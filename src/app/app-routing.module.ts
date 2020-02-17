import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShuffleComponent } from "./features/shuffle/shuffle.component";
import { NotFoundComponent } from "./features/not-found/not-found.component";
import { AboutComponent } from "./features/about/about.component";

const routes: Routes = [
  { path: "", component: ShuffleComponent },
  { path: "api", component: ShuffleComponent, data: { action: "api" } },
  { path: "socket", component: ShuffleComponent, data: { action: "socket" } },
  { path: "about", component: AboutComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
