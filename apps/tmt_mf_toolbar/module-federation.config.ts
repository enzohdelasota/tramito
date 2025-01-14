import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'tmt_mf_toolbar',
  exposes: {
    './Routes': 'apps/tmt_mf_toolbar/src/app/remote-entry/entry.routes.ts',
    './Toolbar': 'apps/tmt_mf_toolbar/src/app/remote-entry/entry.component.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
