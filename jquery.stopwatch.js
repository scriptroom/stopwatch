(function( $ ) {
$.fn.stopwatch = function() {

	var startButton = $('<button></button>').text('Start').attr('class', 'stopwatch-start');
	var stopButton = $('<button></button>').text('Stop').attr('class', 'stopwatch-stop');
	var resetButton = $('<button></button>').text('Reset').attr('class', 'stopwatch-reset');
	var buttonWrapper = $('<div></div>').attr('class', 'stopwatch-buttons');
	var outputWrapper = $('<div></div>').attr('class', 'stopwatch-output');
	var minutesOutput = $('<span></span>').attr('class', 'stopwatch-minutes').text('');
	var secondsOutput = $('<span></span>').attr('class', 'stopwatch-seconds').text('');
	var hundredthOutput = $('<span></span>').attr('class', 'stopwatch-hundredth').text('');
	var minutes = 0;
	var seconds = 0;
	var hundredth = 0;
	var Interval;

	$(this).append(outputWrapper, buttonWrapper);
	buttonWrapper.append(startButton, stopButton, resetButton);
	outputWrapper.append(minutesOutput, secondsOutput, hundredthOutput);

	function startTimer() {
		hundredth++;
		if(hundredth > 9) hundredthOutput.html('0'+hundredth);
		if(hundredth < 9) hundredthOutput.html(hundredth);
		if(hundredth > 99) {
			seconds++;
			hundredth = 0;
			secondsOutput.html('0'+seconds);
			hundredthOutput.html('0'+hundredth);
		}
		if(seconds > 9) secondsOutput.html(seconds);
	}

	startButton.on('click', function(){
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
	});

	stopButton.on('click', function(){
		clearInterval(Interval);
	});

	resetButton.on('click', function(){
		clearInterval(Interval);
		hundredth = "00";
		seconds = "00";
		hundredthOutput.html(hundredth);
		secondsOutput.html(seconds);
	});




};
})(jQuery);