// script.js
function calculateDates() {
    const inputDate = new Date(document.getElementById('inputDate').value);
    
    // Check if the date is valid
    if (isNaN(inputDate)) {
        document.getElementById('results').innerText = "Please enter a valid date.";
        return;
    }

    // Calculate future dates
    const oneYear = new Date(inputDate);
    oneYear.setFullYear(inputDate.getFullYear() + 1);

    const threeYears = new Date(inputDate);
    threeYears.setFullYear(inputDate.getFullYear() + 3);

    const fiveYears = new Date(inputDate);
    fiveYears.setFullYear(inputDate.getFullYear() + 5);

    const twentyFiveYears = new Date(inputDate);
    twentyFiveYears.setFullYear(inputDate.getFullYear() + 25);

    // Display the results
    document.getElementById('results').innerText = `
        1 Year: ${oneYear.toDateString()}
        3 Years: ${threeYears.toDateString()}
        5 Years: ${fiveYears.toDateString()}
        25 Years: ${twentyFiveYears.toDateString()}
    `;
}
