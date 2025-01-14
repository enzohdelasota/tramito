import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RemoteWrapperComponent } from "@tramito/core/mf";

@Component({
  selector: 'tmt-mf-layout',
  templateUrl: './layout.component.html',
  imports: [RemoteWrapperComponent, RouterOutlet],
})
export class LayoutComponent {}
