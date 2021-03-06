/* micropolisJS. Adapted from Micropolis by Graeme McCutcheon.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */

define(['MiscUtils'],
       function(MiscUtils) {
  "use strict";

  var messageData = {
    AUTOBUDGET_CHANGED: MiscUtils.makeConstantDescriptor('Autobudget changed'),
    BUDGET_NEEDED: MiscUtils.makeConstantDescriptor('User needs to budget'),
    BLACKOUTS_REPORTED: MiscUtils.makeConstantDescriptor('Blackouts reported'),
    DATE_UPDATED: MiscUtils.makeConstantDescriptor('Date changed'),
    DID_TOOL: MiscUtils.makeConstantDescriptor('Tool applied'),
    EARTHQUAKE: MiscUtils.makeConstantDescriptor('Earthquake'),
    EXPLOSION_REPORTED: MiscUtils.makeConstantDescriptor('Explosion Reported'),
    EVAL_UPDATED: MiscUtils.makeConstantDescriptor('Evaluation Updated'),
    FIRE_REPORTED: MiscUtils.makeConstantDescriptor('Fire!'),
    FIRE_STATION_NEEDS_FUNDING: MiscUtils.makeConstantDescriptor('Fire station needs funding'),
    FLOODING_REPORTED: MiscUtils.makeConstantDescriptor('Flooding reported'),
    FUNDS_CHANGED: MiscUtils.makeConstantDescriptor('Total funds has changed'),
    HEAVY_TRAFFIC: MiscUtils.makeConstantDescriptor('Total funds has changed'),
    HELICOPTER_CRASHED: MiscUtils.makeConstantDescriptor('Helicopter crashed'),
    HIGH_CRIME: MiscUtils.makeConstantDescriptor('High crime'),
    HIGH_POLLUTION: MiscUtils.makeConstantDescriptor('High pollution'),
    MONSTER_SIGHTED: MiscUtils.makeConstantDescriptor('Monster sighted'),
    NEED_ELECTRICITY: MiscUtils.makeConstantDescriptor('More power needed'),
    NEED_FIRE_STATION: MiscUtils.makeConstantDescriptor('Fire station needed'),
    NEED_MORE_COMMERCIAL: MiscUtils.makeConstantDescriptor('More commercial zones needed'),
    NEED_MORE_INDUSTRIAL: MiscUtils.makeConstantDescriptor('More industrial zones needed'),
    NEED_MORE_RESIDENTIAL: MiscUtils.makeConstantDescriptor('More residential needed'),
    NEED_MORE_RAILS: MiscUtils.makeConstantDescriptor('More railways needed'),
    NEED_MORE_ROADS: MiscUtils.makeConstantDescriptor('More roads needed'),
    NEED_POLICE_STATION: MiscUtils.makeConstantDescriptor('Police station needed'),
    NEED_AIRPORT: MiscUtils.makeConstantDescriptor('Airport needed'),
    NEED_SEAPORT: MiscUtils.makeConstantDescriptor('Seaport needed'),
    NEED_STADIUM: MiscUtils.makeConstantDescriptor('Stadium needed'),
    NO_MONEY: MiscUtils.makeConstantDescriptor('No money'),
    NOT_ENOUGH_POWER: MiscUtils.makeConstantDescriptor('Not enough power'),
    NUCLEAR_MELTDOWN: MiscUtils.makeConstantDescriptor('Nuclear Meltdown'),
    PLANE_CRASHED: MiscUtils.makeConstantDescriptor('Plane crashed'),
    POLICE_NEEDS_FUNDING: MiscUtils.makeConstantDescriptor('Police need funding'),
    QUERY_WINDOW_NEEDED: MiscUtils.makeConstantDescriptor('Query window needed'),
    REACHED_CAPITAL: MiscUtils.makeConstantDescriptor('Now a capital'),
    REACHED_CITY: MiscUtils.makeConstantDescriptor('Now a city'),
    REACHED_METROPOLIS: MiscUtils.makeConstantDescriptor('Now a metropolis'),
    REACHED_MEGALOPOLIS: MiscUtils.makeConstantDescriptor('Now a megalopolis'),
    REACHED_TOWN: MiscUtils.makeConstantDescriptor('Now a town'),
    REACHED_VILLAGE: MiscUtils.makeConstantDescriptor('Now a village'),
    ROAD_NEEDS_FUNDING: MiscUtils.makeConstantDescriptor('Roads need funding'),
    SHIP_CRASHED: MiscUtils.makeConstantDescriptor('Shipwrecked'),
    SOUND_EXPLOSIONHIGH: MiscUtils.makeConstantDescriptor('Explosion! Bang!'),
    SOUND_EXPLOSIONLOW: MiscUtils.makeConstantDescriptor('Explosion! Bang!'),
    SOUND_HEAVY_TRAFFIC: MiscUtils.makeConstantDescriptor('Heavy Traffic sound'),
    SOUND_HONKHONK: MiscUtils.makeConstantDescriptor('HonkHonk sound'),
    SOUND_MONSTER: MiscUtils.makeConstantDescriptor('Monster sound'),
    TAX_TOO_HIGH: MiscUtils.makeConstantDescriptor('Tax too high'),
    TORNADO_SIGHTED: MiscUtils.makeConstantDescriptor('Tornado sighted'),
    TRAFFIC_JAMS: MiscUtils.makeConstantDescriptor('Traffic jams reported'),
    TRAIN_CRASHED: MiscUtils.makeConstantDescriptor('Train crashed'),
    VALVES_UPDATED: MiscUtils.makeConstantDescriptor('Valves updated'),
    WELCOME: MiscUtils.makeConstantDescriptor('Welcome to Micropolis')
  };

  var Messages = Object.defineProperties({}, messageData);


  return Messages;
});
