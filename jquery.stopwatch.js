jQuery.fn.stopwatch = function(options) {

	var startButton = document.createElement('button');
	startButton.setAttribute("class", "start");
	startButton.value = 'Start';
	$(this).append(startButton);

};