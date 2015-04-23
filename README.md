# generator-phaser-gulp-typescript

This generator will get you started in with Phaser in typescript with a clean gulp build in seconds !

You will get :

* Livereload
* Autocompletion thanks to typescript definitions files
* Typescript debugging in your browser with source maps

The current version works with Phaser 2.3.0 and typescript 1.4!

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

## Gotchas

The typescript task needs to have the definitions in the src/scripts/definitions.
This will make the compilation much faster.
You can find these definitions in the phaser-official bower dependencies or on the Phaser repository.

By default, the generator will try to copy those definitions but you may have to do this yourself in case of error.

In IntelliJ or WebStorm, having duplicated definitions will can cause problems.
I recommend deleting the `definitions` folder of `vendor/phaser-official`.
It's a bower dependency so you can regenerate them at will.

## License

MIT

## Credits

This generator was inspired by the [generator-phaser-typescript](https://github.com/rcolinray/generator-phaser-typescript)
