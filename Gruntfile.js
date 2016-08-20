module.exports = function(grunt) {
  grunt.initConfig({
    postcss: {
      options: {
          processors: [
              require('autoprefixer')({
                  browsers: ['> 1%']
              })
          ]
      },
      dist: {
          src: 'dev/*.css',
          dest: 'css/custom.css'
      }
    },
    watch: {
      css : {
        files: ['dev/*'],
        tasks: ['postcss:dist']
      }
    }
  });

  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['postcss:dist']);
};
