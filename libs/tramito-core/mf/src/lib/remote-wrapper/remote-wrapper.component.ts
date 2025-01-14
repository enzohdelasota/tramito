import { CommonModule } from "@angular/common";
import { Component, inject, Input, OnInit, ViewContainerRef } from "@angular/core";
import { loadRemote } from '@module-federation/enhanced/runtime';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'tmt-mf-remote-wrapper',
  template: '',
})
export class RemoteWrapperComponent implements OnInit {
  viewContainer = inject(ViewContainerRef);
  @Input() config!: {
    remoteId: string;
    className: string;
  };

  async ngOnInit(): Promise<void> {
    const { remoteId, className } = this.config;
    const module = await loadRemote(remoteId);
    const component = (module as any)[className];
    this.viewContainer.createComponent(component);
  }
}
