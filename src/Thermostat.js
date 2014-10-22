function Thermostat() {
	this.defaultTemperature = 20;
	this.minTemperature = 10;
	this.maxPowerSaveTemperature = 25;
	this.maxTemperature = 32
	this.temperature = this.defaultTemperature;
	this.isPowerSaveOn = true;
};

Thermostat.prototype.increaseTemperature = function() {
	return this.increaseTemperatureBy(1);
};

Thermostat.prototype.increaseTemperatureBy = function(degrees) {
	if(this._isAboveMaxPowerSaveTemperature(degrees)) return this.temperature = this.maxPowerSaveTemperature;
	if(this._isAboveMaxTemperature(degrees)) return this.temperature = this.maxTemperature;
	return this.temperature += degrees;
};

Thermostat.prototype.decreaseTemperature = function() {
	return this.decreaseTemperatureBy(1);
};

Thermostat.prototype.decreaseTemperatureBy = function(degrees) {
	if(this.temperature - degrees < this.minTemperature) return this.temperature = this.minTemperature
	return this.temperature -= degrees;
};

Thermostat.prototype.turnPowerSaveOff = function() {
	this.isPowerSaveOn = false;
};

Thermostat.prototype.turnPowerSaveOn = function() {
	this.isPowerSaveOn = true;
};

Thermostat.prototype.resetTemperature = function() {
	this.temperature = this.defaultTemperature;
};

Thermostat.prototype._isAboveMaxPowerSaveTemperature = function(degrees) {
	return this.isPowerSaveOn && this.temperature + degrees > this.maxPowerSaveTemperature;
};

Thermostat.prototype._isAboveMaxTemperature = function(degrees) {
	return this.temperature + degrees > this.maxTemperature;
};