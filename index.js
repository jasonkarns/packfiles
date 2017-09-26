#! /usr/bin/env node

require('npm-packlist')().then(function (files) {
  console.log(files.join('\n'))
})
