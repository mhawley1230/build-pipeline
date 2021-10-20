import { task, src, dest } from "gulp";
import { prependText } from "gulp-append-prepend";

task("licenses", async function () {
  // this is to add Creative Tim licenses in the production mode for the minified js
  src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      prependText(`/*!

=========================================================
* Material Kit React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified html
  src("build/index.html", { base: "./" })
    .pipe(
      prependText(`<!--

=========================================================
* Material Kit React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(dest("./", { overwrite: true }));

  // this is to add Creative Tim licenses in the production mode for the minified css
  src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      prependText(`/*!

=========================================================
* Material Kit React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(dest("./", { overwrite: true }));
  return;
});
