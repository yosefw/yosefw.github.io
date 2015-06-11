module.exports = function(grunt) {
  
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['less'],
          plugins: [
            new (require('less-plugin-autoprefix'))({browsers : [ 'last 2 versions' ]}),
            new (require('less-plugin-clean-css'))()
          ]
        },
        files: {
          'main.css': 'less/main.less'
        }
      }
    },
    
    imagemin: {
      all: {
        files: [{
          expand: true,
          cwd: 'assets/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'assets/'
        }]
      }
    },
    
    browserSync: {
      bsFiles: {
        src : ['_site/**/*.*']
      },
      options: {
        proxy : "localhost:4000",
        watchTask : true,
        baseDir: '_site/'
      }
    },
    
    watch: {
      styles: {
        files: 'less/**/*.less',
        tasks: ['less']
      },
      images : {
          files : ['assets/**/*.{png,jpg,gif}'],
          tasks : ['imagemin']
      },
    }
  });
  
  
  // Load grunt plugins.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  
  grunt.registerTask('default', ['browserSync', 'watch']);
};
