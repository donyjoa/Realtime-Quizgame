import gulp from "gulp";

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
  },
};

export function styles() {
  return gulp.src(paths.styles.src).pipe();
}
