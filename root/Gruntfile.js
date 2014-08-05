/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

  // Load config and initialise...
  require('load-grunt-config')(grunt, {
    configPath: path.join(__dirname, 'grunt/options'),
    init: true
  });

  grunt.registerTask('build', ['clean', 'copy:main', 'less', 'haggerston', 'notify:build']);

  grunt.registerTask('serve', ['build', 'connect', 'watch']);

  grunt.registerTask('default', ['build']);

};
