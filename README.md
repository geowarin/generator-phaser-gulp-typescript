# generator-phaser-gulp-typescript

This generator will get you started in with Phaser in typescript with a clean gulp build in seconds !

You will get :

* Livereload
* Autocompletion thanks to typescript definitions files
* Typescript debugging in your browser with source maps

## Getting Started

Install [Yeoman](http://yeoman.io) :

```
$ npm install -g yo
```

Install the generator :

```
$ npm install -g generator-phaser-gulp-typescript
```

Launch the generator:

```
$ yo phaser-gulp-typescript
```

## Gulp

### Run & debug (live reload and source maps)

    gulp

### Build (minified js and less) :

    gulp build

### Deploy on gh-pages.

You will need to setup the `gh-page` branch as instructed [here](https://github.com/rowoot/gulp-gh-pages#usage).
First build, then :

    gulp deploy

## License

MIT

## Credits

This generator was inspired by the [generator-phaser-typescript](https://github.com/rcolinray/generator-phaser-typescript)
