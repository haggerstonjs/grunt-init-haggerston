/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    clean: ['{%= out_path %}/'],
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: '{%= assets_path %}/',
            src: ['**'],
            dest: '{%= out_path %}/'
          }
        ]
      }
    },
    haggerston: {

    },
    watch: {
      content: {
        files: [
          '{%= src_path %}/content/**/*.json',
          '{%= src_path %}/content/**/*.md',
          '{%= src_path %}/templates/**/*.html'
        ],
        tasks: 'build'
      }
    },
    connect: {
      site: {
        options: {
          base: '{%= out_path %}/'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-haggerston');

  grunt.registerTask('build', ['clean', 'copy', 'haggerston']);
  grunt.registerTask('serve', ['build', 'connect', 'watch']);

  grunt.registerTask('default', ['build']);

};
