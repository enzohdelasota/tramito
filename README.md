# Tramito

## Run tasks

To run tasks with Nx use:

```sh
npx nx <target> <project-name>
```

For example:

```sh
npx nx build myproject
```

## Add new projects

```sh
pnpx nx g @nx/angular:host apps/tmt_mf_host --prefix=tmt-mf --add-tailwind
```

```sh
pnpx nx g @nx/angular:remote apps/tmt_mf_toolbar --prefix=tmt-mf --host=tmt_mf_host --add-tailwind
pnpx nx g @nx/angular:remote apps/tmt_mf_footer --prefix=tmt-mf --host=tmt_mf_host --add-tailwind
pnpx nx g @nx/angular:lib libs/tramito-core --publishable --importPath=@tramito/core --add-tailwind
pnpx nx g @nx/angular:lib libs/tramito-ui --publishable --importPath=@tramito/core --add-tailwind
pnpx nx g @nx/angular:library-secondary-entry-point --library=tramito-ui --name=button
```

```sh
docker build -t tramito .
```
