document.addEventListener('DOMContentLoaded', function() {
    // Set the target date for the countdown
    var targetDate = moment("2024-07-01 00:00:00");

    function updateCountdown() {
        var now = moment();
        var duration = moment.duration(targetDate.diff(now));

        var days = Math.floor(duration.asDays());
        var hours = duration.hours();
        var minutes = duration.minutes();
        var seconds = duration.seconds();

        document.getElementById('countdown').innerHTML =
            '<div id="days" class="mx-2"><span>' + days + '</span>Days</div>' +
            '<div id="hours" class="mx-2"><span>' + hours + '</span>Hours</div>' +
            '<div id="minutes" class="mx-2"><span>' + minutes + '</span>Minutes</div>' +
            '<div id="seconds" class="mx-2"><span>' + seconds + '</span>Seconds</div>';
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
