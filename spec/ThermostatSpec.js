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

		it('Power Save should be on', function() {
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

	});

	describe('has custom options that', function() {

		it('should be able to increase the temperature by 12', function() {
			thermostat.increaseTemperatureBy(4);
			expect(thermostat.temperature).toEqual(24);
		});

		it('should be able to decrease the temperature by 7', function() {
			thermostat.decreaseTemperatureBy(7);
			expect(thermostat.temperature).toEqual(13);
		});

		it('should be able to turn Power Save off', function() {
			thermostat.turnPowerSaveOff();
			expect(thermostat.isPowerSaveOn).toBe(false)
		});

		it('should be able to turn Power Save on', function() {
			thermostat.turnPowerSaveOff();
			thermostat.turnPowerSaveOn();
			expect(thermostat.isPowerSaveOn).toBe(true)
		});

		it('should allow the temperature to be reset to default temperature', function() {
			thermostat.increaseTemperature(8);
			thermostat.resetTemperature();
			expect(thermostat.temperature).toEqual(20);
		});

	});

	describe('has restrictions that', function() {

		it('should not allow the temperature to drop below 10 degrees', function() {
			thermostat.decreaseTemperatureBy(12);
			expect(thermostat.temperature).toEqual(10);
		});

		it('should not go above 25 degrees when Power Save is on', function() {
			expect(thermostat.increaseTemperatureBy(6)).toEqual(25);
		});
	});

});