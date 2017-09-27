# packfiles

npm goggles for your package: see what files npm sees &ndash; tiny cli utility to list the files npm will include in its published tarball.

Tired of running `npm pack` just so you can `tar -tf <your-package>.tgz` to see the files included in the tarball? No longer!

## usage

Simplest usage is via `npx`:

```bash
$ npx packfiles
````

But beware that you likely need to run `npm run prepare` before packfiles such that you get an accurate view of the files that will exist during an npm publish flow.

### example

From within [teenytest](https://github.com/testdouble/teenytest):

<details><code><pre>
$ packfiles
package.json
.travis.yml
index.js
LICENSE.txt
README.md
bin/teenytest
lib/cli/argv-options.js
lib/cli/index.js
lib/cli/parse-package-options.js
lib/configure/criteria.js
lib/configure/defaults.js
lib/configure/index.js
lib/plan/index.js
lib/plugins/callbackify.js
lib/plugins/store.js
lib/plugins/user-function-store.js
lib/plugins/wrap.js
lib/prepare/helper.js
lib/prepare/index.js
lib/prepare/modules/compact.js
lib/prepare/modules/filter.js
lib/prepare/modules/index.js
lib/prepare/modules/load.js
lib/run/double-resolve.js
lib/run/index.js
lib/run/register-built-in-plugins.js
lib/run/register-user-plugins.js
lib/run/results-store.js
lib/run/run-custom-configurator.js
lib/store.js
plugins/results.js
plugins/tap13/builder.js
plugins/tap13/count-tests.js
plugins/tap13/index.js
plugins/timeout.js
plugins/uncaught-exception.js
</pre></code></details>

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
