"use strict";

describe('Thermostat', function() {

	var thermostat;

	describe('by default', function() {

		it('is set to 20 degrees', function() {
			thermostat = new Thermostat;
			expect(thermostat.temperature).toEqual(20);
		});

		// it('power saving mode(TM) should be on', function() {

		// });

	});

});