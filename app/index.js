'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

module.exports = yeoman.generators.Base.extend({

  initializing: {
    header: function () {
      this.log(this.yeoman);
      this.log(chalk.magenta("Phaser + Typescript + Gulp generator. "));
    }
  },

  prompting: {
    userConfig: function () {
      var done = this.async();
      var prompts = [
        {
          type: 'input',
          name: 'gameName',
          message: 'What is this game called?',
          default: this._.humanize(path.basename(process.cwd()))
        }
      ];

      this.prompt(prompts, function (props) {
        this.gameName = props.gameName;

        done();
      }.bind(this));
    }
  },

  configuring: {
    projectfiles: function () {
      this.src.copy('.bowerrc', '.bowerrc');
      this.src.copy('gulpfile.js', 'gulpfile.js');
      this.template('_package.json', 'package.json');
      this.template('_bower.json', 'bower.json');
    }
  },

  writing: {
    app: function () {
      this.directory('src', 'src');
    }
  },

  install: {
    installDeps: function () {
      this.installDependencies({
        bower: true,
        npm: false,
        skipInstall: this.options['skip-install'],
        callback: this.install._postInstall.bind(this)
      });
    },

    _postInstall: function () {
      if (this.options['skip-install']) {
        this.log(chalk.red('Installation was skipped.'));
        this.log('You will have to manually copy phaser ' + chalk.cyan('typescript definitions') + ' to ' + chalk.yellow('src/scripts/definitions'));
      } else {
        this.log(chalk.red('Copy'));
        this.dest.copy('src/vendor/phaser-official/build/phaser.d.ts', 'src/scripts/definitions/phaser.d.ts');
      }
    }
  },

  end: {
    over: function () {
      this.log(chalk.cyan('end'));
    }
  }
});
