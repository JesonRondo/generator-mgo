module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    'less': {
      development: {
        options: {
          paths: [
            'common/style',
            'components'
          ],
          compress: true
        }
      }
    }

  });

  // grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('build', ['less']);
};
