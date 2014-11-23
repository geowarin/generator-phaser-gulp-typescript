/// <reference path="definitions/phaser.d.ts"/>

module <%= _.classify(gameName) %> {
  export class Game extends Phaser.Game {
    constructor() {
      super(800, 600, Phaser.CANVAS, <%= _.dasherize(gameName) %>);

      this.state.add('boot', State.Boot);
      this.state.add('preload', State.Preload);
      this.state.add('main', State.Main);

      this.state.start('boot');
    }
  }
}
