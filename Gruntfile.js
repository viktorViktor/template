module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      concat: {
        dist: {
          src: [
            'js/vendor/*.js', // All JS in the libs folder
            'js/app.js'  // This specific file
          ],
          dest: 'assets/app.js'
        }
      },
      uglify: {
          build: {
              src: 'assets/app.js',
              dest: 'assets/app.min.js'
          }
      },
      imagemin: {
          dynamic: {
              files: [{
                  expand: true,
                  cwd: 'img/',
                  src: ['**/*.{png,jpg,gif}'],
                  dest: 'assets/images/'
              }]
          }
      },
      sass: {
          dist: {
              options: {
                  style: 'compressed'
              },
              files: {
                  'assets/app.css': 'sass/master.scss'
              }
          }
      },
      watch: {
          options: {
              livereload: true,
          },
          scripts: {
              files: ['js/*.js'],
              tasks: ['concat', 'uglify'],
              options: {
                  spawn: false,
              },
          },
          css: {
              files: ['sass/*.scss', 'index.html'],
              tasks: ['sass'],
              options: {
                  spawn: false,
              }
          },
      },

  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['concat', 'uglify', 'imagemin', 'watch', 'sass', 'copy']);

};