 function updateClock() {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var seconds = now.getSeconds();
            var dateString = formatDate(now);
            var timeString = formatTime(hours, minutes, seconds);

            // Update the timer element
            var timerElement = document.getElementById("timer");
            timerElement.textContent =dateString + " , " + timeString;

            // Call the updateClock function every second
            setTimeout(updateClock, 1000);
        }

        // Function to format the date as "month/day/year"
        function formatDate(date) {
            var month = date.getMonth() + 1; // Month is 0-based
            var day = date.getDate();
            var year = date.getFullYear();
            return padNumber(month) + "/" + padNumber(day) + "/" + year;
        }

        // Function to format the time as "hh:mm:ss AM/PM"
        function formatTime(hours, minutes, seconds) {
            var ampm = hours >= 12 ? "PM" : "AM";
            hours = hours % 12;
            hours = hours ? hours : 12; // "0" should be displayed as "12"
            return padNumber(hours) + ":" + padNumber(minutes) + ":" + padNumber(seconds) + " " + ampm;
        }

        // Function to pad a number with leading zeros
        function padNumber(number) {
            return (number < 10 ? "0" : "") + number;
        }

        // Initial call to start the clock
        updateClock();