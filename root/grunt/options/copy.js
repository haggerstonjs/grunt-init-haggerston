module.exports = {
  main: {
    files: [
      {
        expand: true,
        cwd: 'assets/',
        src: ['**'],
        dest: 'out/'
      }
    ]
  }
};