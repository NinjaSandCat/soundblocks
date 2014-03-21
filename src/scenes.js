Crafty.scene('Game',function() {
    var ii = 0;
  // Place a tree at every edge square on our grid of 16x16 tiles
  for (var y = 0; y < Game.map_grid.height; y++) {
    for (var x = 0; x < Game.map_grid.width; x++) {
      var odd = (x%2) == 0 || (y%2) == 0;
      
      if (!odd) {
        // Place a tree entity at the current tile
        Crafty.e('Block').at(x, y).i=ii;
        ii++;

      }
    }
  }
});



// Loading scene
// -------------
// Handles the loading of binary assets such as images and audio files
Crafty.scene('Loading', function(){
  // Draw some text for the player to see in case the file
  //  takes a noticeable amount of time to load
  //Crafty.viewport.init(Game.map_grid.tile.width *32, Game.map_grid.tile.height * 32);
  //Crafty.viewport.clampToEntities=false;
  //Crafty.viewport.bounds = {min:{x:00, y:00}, max:{x:Game.map_grid.width * Game.map_grid.tile.width, y:Game.map_grid.height * Game.map_grid.tile.height}};
  
  Crafty.e('2D, DOM, Text')
    .text('Loading; please wait...')
    .attr({ x: 0, y: Game.height()/2 - 24, w: Game.width() })
    .css($text_css);
 
  // Load our sprite map image
  Crafty.load([
    'assets/retroblock.png',
    'assets/door_knock_3x.mp3',
    'assets/door_knock_3x.ogg',
    'assets/door_knock_3x.aac',
    'assets/Harpsi4-08.ogg',
    'assets/Harpsi4-16.ogg',
    'assets/Harpsi4-24.ogg',
    'assets/Harpsi4-32.ogg',
    'assets/Harpsi4-40.ogg',
    'assets/Harpsi4-48.ogg'
    ], function(){
    // Once the images are loaded...
 
    // Define the individual sprites in the image
    // Each one (spr_tree, etc.) becomes a component
    // These components' names are prefixed with "spr_"
    //  to remind us that they simply cause the entity
    //  to be drawn with a certain sprite
    Crafty.sprite(48, 'assets/retroblock.png', {
      spr_block:    [0, 0],
    });
 
    // Define our sounds for later use
    Crafty.audio.add({
        knock:  ['assets/door_knock_3x.mp3',
                 'assets/door_knock_3x.ogg',
                 'assets/door_knock_3x.aac'],
                 
        note8:  ['assets/Harpsi4-08.ogg'],
        note16: ['assets/Harpsi4-16.ogg'],
        note24: ['assets/Harpsi4-24.ogg'],
        note32: ['assets/Harpsi4-32.ogg'],
        note40: ['assets/Harpsi4-40.ogg'],
        note48: ['assets/Harpsi4-48.ogg']
    });
    
    Crafty.notearray=['note8','note16','note24','note32','note40','note48'];
    // Now that our sprites are ready to draw, start the game
    Crafty.scene('Game');
  })
});
    
    
