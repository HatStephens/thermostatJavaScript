"use strict";

describe('Thermostat', function() {

	var thermostat;
		
	beforeEach(function() {
		thermostat = new Thermostat;
	});

	describe('by default', function() {

		it('is set to 20 degrees', function() {
			expect(thermostat.temperature).toEqual(20);
		});

		it('power saving mode(TM) should be on', function() {
			expect(thermostat.isPowerSaveOn).toBe(true);
		});

		it('should be able to increase the temperature by 1', function() {
			thermostat.increaseTemperature();
			expect(thermostat.temperature).toEqual(21);
		});

		it('should be able to decrease the temperature by 1', function() {
			thermostat.decreaseTemperature();
			expect(thermostat.temperature).toEqual(19);
		});

	describe('has custom options that', function() {

		it('should be able to increase the temperature by 12', function() {
			thermostat.increaseTemperatureBy(12);
			expect(thermostat.temperature).toEqual(32);
		});

		

	});

	});

});