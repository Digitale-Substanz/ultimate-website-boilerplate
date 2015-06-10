module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // watch task
    watch: {
    	files: ['src/less/*'],
      tasks: ['less'],
    },
    // less task
    less: {
		  development: {
		    options: {
		    	paths: ["src/less/"]
		    },
		    files: {
		      "public/css/styles.css": "src/less/styles.less"
		    }
		  },
		  production: {
		    options: {
		      cleancss: true,
		    },
		    files: {
		      "public/css/styles.css": "src/less/styles.less"
		    }
		  }
		}, // less
	});

	// Load the plugin that provides the "less" task.
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['watch', 'less']);
};