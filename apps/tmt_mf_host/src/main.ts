import { init } from '@module-federation/enhanced/runtime';
import { environment } from './environments/environment';

let remotes = {};

fetch(environment.manifestName)
  .then((res) => res.json())
  .then((mf) => remotes = mf.remotes)
  .then(() => fetch('/mf-manifest.json'))
  .then((res) => res.json())
  .then((definitions) =>init({...definitions, remotes}))
  .then(() => import('./bootstrap'))
  .catch((err) => console.error(err));
