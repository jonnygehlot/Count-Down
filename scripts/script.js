<script>

    function countdown() {
        var figures = document.querySelectorAll('main figure');
        var timeToday = new Date();
        var currentDateSec = timeToday.getTime() / 1000;

        var TimeEvent = new Date('15 September 2023')
        TimeEvent = TimeEvent.getTime() / 1000;

        var timer = TimeEvent - currentDateSec;
        var Mintues = 60;
        var hours = 60 * Mintues;
        var day = 24 * hours;

        var FinalDays = Math.floor(timer / day);
        var FinalHours = Math.floor((timer % day) / hours);
        var FinalMinutes = Math.floor((timer % hours) / Mintues);
        var FinalSeconds = Math.floor(timer % Mintues);

        var All = [FinalDays, FinalHours, FinalMinutes, FinalSeconds];

        figures.forEach((value, index) => {
            value.innerText = All[index] < 10 ? '0' + All[index] : All[index];
        })
    }
    // figures.forEach('')

    setInterval(() => {
        countdown();
    }, 1000)
</script>
