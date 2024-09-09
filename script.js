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

    // Construct the output HTML with proper alignment
    document.getElementById('results').innerHTML = `
        <div class="result-item"><strong>1 Year:</strong> ${oneYear.toDateString()}</div>
        <div class="result-item"><strong>3 Years:</strong> ${threeYears.toDateString()}</div>
        <div class="result-item"><strong>5 Years:</strong> ${fiveYears.toDateString()}</div>
        <div class="result-item"><strong>25 Years:</strong> ${twentyFiveYears.toDateString()}</div>
    `;
}
