const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    // Các cấu hình khác của Webpack...
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            // Các quy tắc khác nếu cần
        ],
    },
    plugins: [new VueLoaderPlugin()],
};

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [
        //
    ]);
