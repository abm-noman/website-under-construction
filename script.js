$(document).ready(function() {
    // Set the target date for the countdown
    var targetDate = moment.tz("2024-07-01 00:00", "America/New_York");

    function updateCountdown() {
        var now = moment();
        var duration = moment.duration(targetDate.diff(now));

        var days = Math.floor(duration.asDays());
        var hours = duration.hours();
        var minutes = duration.minutes();
        var seconds = duration.seconds();

        $('#countdown').html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
});
