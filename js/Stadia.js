/* micropolisJS. Adapted from Micropolis by Graeme McCutcheon.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */

define(['Tile'],
       function(Tile) {
  "use strict";


  var emptyStadiumFound = function(map, x, y, simData) {
    simData.census.stadiumPop += 1;

    if (map.getTile(x, y).isPowered()) {
      // Occasionally start the big game
      if (((simData.cityTime + x + y) & 31) === 0) {
        map.putZone(x, y, Tile.FULLSTADIUM, 4);
        map.addTileFlags(x, y, Tile.POWERBIT);
        map.setTo(x + 1, y, new Tile(Tile.FOOTBALLGAME1, Tile.ANIMBIT));
        map.setTo(x + 1, y + 1, new Tile(Tile.FOOTBALLGAME2, Tile.ANIMBIT));
      }
    }
  };


  var fullStadiumFound = function(map, x, y, simData) {
    simData.census.stadiumPop += 1;
    var isPowered = map.getTile(x, y).isPowered();

    if (((simData.cityTime + x + y) & 7) === 0) {
      map.putZone(x, y, Tile.STADIUM, 4);
      if (isPowered)
        map.addTileFlags(x, y, Tile.POWERBIT);
    }
  };


  var Stadia = {
    registerHandlers: function(mapScanner, repairManager) {
      mapScanner.addAction(Tile.STADIUM, emptyStadiumFound);
      mapScanner.addAction(Tile.FULLSTADIUM, fullStadiumFound);
      repairManager.addAction(Tile.STADIUM, 15, 4);
    }
  };


  return Stadia;
});
