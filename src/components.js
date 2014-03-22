// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
  init: function() {
    this.attr({
      w: Game.map_grid.tile.width,
      h: Game.map_grid.tile.height
    })
  },
 
  // Locate this entity at the given position on the grid
  at: function(x, y) {
    if (x === undefined && y === undefined) {
      return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    } else {
      this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      return this;
    }
  }
});
 
// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid
Crafty.c('Actor', {
  init: function() {
    this.requires('2D, Canvas, Grid');
  },
});

Crafty.c('Block', {
  init: function() {
    this.requires('Actor, Solid, spr_block, Tint, Mouse, Tween')
        .areaMap([0,0], [48,0], [48,48], [0,48])
        .attr({alpha: 0.4})
        //.tint("#ffffff", 0.0);
        .tint("#303060", 0.0);
    this.bind('MouseDown', function() {
        console.log("Clicked!!");
        //Crafty.audio.play('note8');
        Crafty.audio.play(Crafty.notearray[this.i]);
        console.log(this.i);
        //this.tint("#ffffff", 0.0);
        this.attr({alpha: 1.0})
        this.tween({alpha: 0.4}, 20)
    })

    
  },
});
 


