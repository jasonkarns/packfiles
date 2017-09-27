# packfiles

A tiny cli utility to list the files npm will include in its published tarball.

## usage

Simplest usage is via `npx`:

```bash
$ npx packfiles
````

But beware that you likely need to run `npm run prepare` before packfiles such that you get an accurate view of the files that will exist during an npm publish flow.

## installation

Install locally as a devDependency and run through an npm script or via npx:

```
$ npm install -D packfiles
$ npx packfiles
```

## how it works

Npm uses [npm-packlist](https://github.com/npm/npm-packlist) to determine the files that will be included in the package tarball.
This module takes into account all of npm's include/exclude rules (`.gitignore`, `.npmignore`, `pkg.files`, etc).
`packfiles` is simply a cli wrapper for npm-packlist that prints the list of files to STDOUT.
`packfiles` relies on any build or compilation step already running.
So if your module is built via a `prepare` script (which it probably should), you'll need to run `npm run prepare` before running `packfiles`.

See also [npm scripts docs](https://docs.npmjs.com/misc/scripts) for information regarding correct usage of  `prepare`, `publish`, `pack` and all relevant pre/post variants (and `prepublishOnly`)
