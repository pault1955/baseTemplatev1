
module.exports = function(grunt) {
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-compass');
     grunt.initConfig ({
          uglify: {
               my_target: {
                    files: {
                         '_/js/script.js' : ['_/components/js/*.js'] 
                           } //files
                    } //my_target
          },  //uglify
          compass: {
            dev: {
              options: {
                config: './config.rb'
              } // options
            } // dev
          }, //compass
          sass: {
            dist: {
              files: {
                '_/components/css/styles.css': '_/components/sass/styles.scss'
               },
               options: {
                  sourcemap:'true'
               } // options
             }   // dist
          }, // sass
          watch: {
            options: {livereload: 1338 },
            scripts: {
              files: ['_/components/js/*.js'],
              tasks: ['uglify']
             }, //scripts
            sass: {
              files: ['_/components/sass/*.scss'],
              tasks: ['compass:dev']
            }, // sass
            html: {
             files: ['*.html']
           } // html
          }  //watch
     }) //initConfig
     grunt.registerTask('default', 'watch')
} // exports
