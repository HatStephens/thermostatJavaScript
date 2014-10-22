"use strict";

describe('Thermostat', function() {

	var thermostat;

	describe('by default', function() {

		beforeEach(function() {
			thermostat = new Thermostat;
		});

		it('is set to 20 degrees', function() {
			expect(thermostat.temperature).toEqual(20);
		});

		it('power saving mode(TM) should be on', function() {
			expect(thermostat.isPowerSaveOn).toBe(true);
		});

	});

});