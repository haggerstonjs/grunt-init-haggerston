module.exports = {
  content: {
    files: [
      'src/content/**/*.json',
      'src/content/**/*.md',
      'src/templates/**/*.html',
      'src/templates/**/*.xml',
      'src/data/*.json'
    ],
    tasks: ['haggerston', 'notify:build']
  },
  assets: {
    files: [
      'assets/**/*'
    ],
    tasks: ['copy:main', 'notify:build']
  },
  styles: {
    files: [
      'src/styles/**/*.less'
    ],
    tasks: ['less', 'notify:build']
  }
};