function ThermostatView (element) {
	this.thermostat = new Thermostat;
	this.element = $(element);
	this.element.text(this.thermostat.temperature);
	this.bindTo('#increaseTemp', this.thermostat, this.thermostat.increaseTemperature, this.element);
	this.bindTo('#decreaseTemp', this.thermostat, this.thermostat.decreaseTemperature, this.element);
	this.bindTo('#resetTemperature', this.thermostat, this.thermostat.resetTemperature, this.element);
	this.bindTo('#turnPowerSaveOn', this.thermostat, this.thermostat.turnPowerSaveOn, this.element)
	this.bindTo('#turnPowerSaveOff', this.thermostat, this.thermostat.turnPowerSaveOff, this.element);
};


ThermostatView.prototype.bindTo = function(control, obj, func, element) {
	$(control).on('click', function() {
		element.text(func.call(obj));
	});

};




$(document).ready(function() {

	var display = new ThermostatView('h1');

});


	// if(display.thermostat.temperature >= 25) {
	// 	$('body').css({'background':'url(\'../css/images/hot.jpg\') fixed center'})
	// }

	// if(display.thermostat.temperature < 25 && display.thermostat.temperature>=18) {
	// 	$('body').css({'background-color':'yellow'})
	// }

	// if(display.thermostat.temperature < 18) {
	// 	$('body').css({'background-color':'green'})
	// }