Game = {
    // This defines our grid's size and the size of each of its tiles
    map_grid: {
        width: 7,
        height:5,
        tile: {
            width: 48,
            height: 48,
        }
    },
    
    // The total width of the game screen. Since our grid takes up the entires screen
    // this is jsut the width of a tile times the width og the grid
    width: function() {
        //return this.map_grid.width * this.map_grid.tile.width;
        return this.map_grid.width * this.map_grid.tile.width;
    },
    
    // The total width of the game screen. Since our grid takes up the entires screen
    // this is just the height of a tile times the height of the grid
    height: function() {
        //return this.map_grid.height * this.map_grid.tile.height;
        return  this.map_grid.height * this.map_grid.tile.height;
    },
    
    // Initialize and start our game
    start: function() {
        // Start crafy and set a backround color so that we can see it's working
        Crafty.init(Game.width(), Game.height());
        Crafty.background('rgb(48, 48, 96)');
        // simply start the "game" scene to get things going
        Crafty.scene('Loading');
    }
}
$text_css = { 'font-size': '24px', 'font-family': 'Arial', 'color': 'white', 'text-align': 'center' }
