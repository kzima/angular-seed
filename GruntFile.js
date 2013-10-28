module.exports = function(grunt) {
    grunt.initConfig({
        less: {
          development: {
            options: {
              paths: ["app/css"],
              sourceMap: true
            },
            files: {
              "app/css/main.css": "app/less/main.less"
            }
          },
          production: {
            options: {
              paths: ["app/css"],
              yuicompress: true
            },
            files: {
               "app/css/main.css": "app/less/main.less"
            }
          }
        },
        watch: {
            development : {
                files: "app/less/*",
                tasks: ["less:development"]
            },
            production : {
                files: "app/less/*",
                tasks: ["less:production"]
            },
           
        }
    });
    //load pliugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task(s).
    grunt.registerTask('default', ['watch:development']);
};