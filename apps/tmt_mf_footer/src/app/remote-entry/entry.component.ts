import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'tmt-mf-tmt_mf_footer-entry',
  template: `<tmt-mf-nx-welcome></tmt-mf-nx-welcome>`,
})
export class RemoteEntryComponent {}
