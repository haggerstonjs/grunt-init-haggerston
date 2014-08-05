/*
 * grunt-init-haggerston
 * https://github.com/haggerstonjs/grunt-init-haggerston
 *
 * Copyright (c) 2014 Kelvin Luck, contributors
 * Licensed under the MIT license.
 *
 * Based on grunt-init-gruntplugin by "Cowboy" Ben Alman
 * https://github.com/gruntjs/grunt-init-gruntplugin
 */

'use strict';

exports.description = 'Create a HaggerstonJS website.';

exports.notes = 'For more information about HaggerstonJS, ' +
  'please see the docs at http://github.com/haggerstonjs/website';

exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

exports.warnOn = '*';

exports.template = function(grunt, init, done) {

  init.process({type: 'grunt'}, [
    // Prompt for these values.
    init.prompt('name', 'The name of your website'),
    init.prompt('description', 'A description of your website.'),
    {
      name: 'src_path',
      default: 'src'
    },
    {
      name: 'out_path',
      default: 'out'
    },
    {
      name: 'assets_path',
      default: 'assets'
    },
    init.prompt('version'),
    init.prompt('homepage'),
    init.prompt('licenses'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('grunt_version'),
    init.prompt('node_version', grunt.package.engines.node)
  ], function(err, props) {
    // Set a few grunt-plugin-specific properties.
    props.main = 'Gruntfile.js';
    props.keywords = ['haggerstonjs'];
    props.devDependencies = {
    };
    props.peerDependencies = {
    };
    props.dependencies = {
      'grunt': props.grunt_version,
      'grunt-haggerston': 'git://github.com/haggerstonjs/grunt-haggerston.git',
      'grunt-contrib-clean': '~0.6.0',
      'grunt-contrib-copy': '~0.5.0',
      'grunt-contrib-less': '~0.11.4',
      'grunt-contrib-watch': '~0.6.1',
      'grunt-contrib-connect': '~0.8.0',
      'load-grunt-config': '~0.12.0',
      'grunt-notify': '~0.3.0'
    };

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Add properly-named license files.
    init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'src/**'});

    // Generate package.json file.
    init.writePackageJSON('package.json', props);

    // All done!
    done();
  });

};
