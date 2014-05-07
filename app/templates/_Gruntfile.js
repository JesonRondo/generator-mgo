module.exports = function(grunt) {

  var package = require('./package.json');

  var lessCfgAddComponents = function(base) {
    var custom = package.components;

    for (var k in custom) {
      base.push({
        expand: true,
        cwd: 'components/' + k + '/' + custom[k]['version'],
        src: '*.less',
        ext: '.css',
        dest: 'components/' + k + '/' + custom[k]['version']
      });
    }
    return base;
  };

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // requirejs: {
    //   compile: {
    //     options: {
    //       baseUrl: "./scripts",
    //       name: 'app',
    //       optimize: 'uglify',
    //       mainConfigFile: "scripts/app.js",
    //       out: "dist/generator-mgo.js",
    //       findNestedDependencies: true,
    //       include: ['../../lib/require.js']
    //     }
    //   }
    // },

    // uglify: {
    //   my_target: {
    //     files: {
    //       'dist/generator-mgo.js': ['dist/generator-mgo.js']
    //     }
    //   }
    // }

    'http-server': {
      'dev': {
        // the server root directory
        root: "./",
        port: 1912,
        // port: function() { return 8282; }

        host: "127.0.0.1",

        // cache: <sec>,
        showDir : true,
        autoIndex: true,
        defaultExt: "html",

        // run in parallel with other tasks
        runInBackground: true
      }
    },

    'less': {
      development: {
        options: {
          paths: [
            'common/style',
            'components'
          ],
          compress: true
        },
        files: lessCfgAddComponents([{
          expand: true,
          cwd: 'common/style',
          src: '*.less',
          ext: '.css',
          dest: 'common/style'
        }])
      }
    },

    'watch': {
      styles: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['common/**/*.less', 'components/**/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }

  });

  // grunt.loadNpmTasks('grunt-contrib-requirejs');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-http-server');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // grunt.registerTask('default', ['requirejs', 'uglify']);
  grunt.registerTask('start', ['http-server', 'watch']);
  grunt.registerTask('buildcss', ['less']);
};
