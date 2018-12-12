//编写gulp管理文件的任务

 const gulp = require('gulp');

 // 拷贝html文件
  gulp.task('copy-html',function(){
  	  return gulp.src('html/*.html')
  	  .pipe(gulp.dest('dist/html'))
  	  .pipe(connect.reload());
  })
  // 图片
   gulp.task('images',function(){
  	  return gulp.src('images/**/*')
  	  .pipe(gulp.dest('dist/images'))
  	  .pipe(connect.reload());
  })
   gulp.task('img',function(){
      return gulp.src('img/**/*')
      .pipe(gulp.dest('dist/img'))
      .pipe(connect.reload());
  })
   // 数据
    gulp.task('data',function(){
  	  return gulp.src('data/*.json')
  	  .pipe(gulp.dest('dist/data'))
  	  .pipe(connect.reload());
  })
    // js文件
    gulp.task('scripts',function(){
    	return gulp.src('js/*.js')
    	.pipe(gulp.dest('dist/js'))
    	.pipe(connect.reload());
    })
   // 建立工程
   gulp.task('build',['copy-html','images','data','scripts','scss','img'],function(){
   	  console.log('工程建立完成')
   })
   // scss插件
   const scss = require('gulp-sass-china');
   const minifyCSS = require('gulp-minify-css');
   const rename = require('gulp-rename');
   gulp.task('scss',function(){
   	return gulp.src('stylesheet/*.scss')
   	.pipe(scss())
   	.pipe(gulp.dest('dist/css'))
   	.pipe(minifyCSS())
  /* 	.pipe(rename('*.min.css'))
   	.pipe(gulp.dest('dist/css'))*/
   	.pipe(connect.reload());
   })
   
   // 建立监听
   gulp.task('watch',function(){
   	  gulp.watch('html/*.html',['copy-html']);
   	  gulp.watch('images/**/*',['images']);
      gulp.watch('img/**/*',['img']);
   	  gulp.watch('data/*.json',['data']);
   	  gulp.watch('js/index.js',['scripts']);
      gulp.watch('js/zhuce.js',['scripts']);
      gulp.watch('js/denglu.js',['scripts']);
      gulp.watch('js/jiesuan.js',['scripts']);
   	  gulp.watch('stylesheet/index.scss',['scss']);
      gulp.watch('stylesheet/boy.scss',['scss']);
      gulp.watch('stylesheet/denglu.scss',['scss']);
      gulp.watch('stylesheet/zhuce.scss',['scss']);
      gulp.watch('stylesheet/hongjiu.scss',['scss']);
      gulp.watch('stylesheet/jiesuan.scss',['scss']);
   })

  const connect = require('gulp-connect');
  gulp.task('server',function(){
  	  connect.server({
  	  	root:'dist',
  	  	port:9999,
  	  	livereload:true
  	  })
    
  })
gulp.task('default',['watch','server']);