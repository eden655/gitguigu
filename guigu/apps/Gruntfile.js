module.exports = function(grunt){
    //配置
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            Six_Nine: {
                src: ['src/six_nine/*.js','src/gallery/*.js'],
                dest: 'build/<%=pkg.name %>/<%=pkg.version %>/index.js'
            }
        },
        uglify: {
            options: {
                banner: '\n'
            },
            bulid: {
                src: 'build/<%=pkg.name %>/<%=pkg.version %>/index.js',
                dest: 'build/<%=pkg.name %>/<%=pkg.version %>/index.min.js'
            }
        }
    });

    //载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //注册任务
    grunt.registerTask('default', ['concat', 'uglify']);

};