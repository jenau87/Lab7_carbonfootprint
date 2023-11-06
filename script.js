document.getElementById('carbon-calculator').addEventListener('submit', function(event) {
    event.preventDefault();

    // Update these conversion factors with actual figures
    var clothingCarbonFactor = 1;
    var foodCarbonFactor = 1;
    var transportCarbonFactor = 1;
    var livingCarbonFactor = 1;

    var clothingPieces = parseFloat(document.getElementById('clothing-pieces').value);
    var clothingLife = parseFloat(document.getElementById('clothing-life').value);
    var meatDays = parseFloat(document.getElementById('meat-days').value);
    var vegetableDays = parseFloat(document.getElementById('vegetable-days').value);
    var carKm = parseFloat(document.getElementById('car-km').value);
    var publicTransportDays = parseFloat(document.getElementById('public-transport-days').value);
    var electricity = parseFloat(document.getElementById('electricity').value);
    var airconHours = parseFloat(document.getElementById('aircon-hours').value);

    var clothingCarbon = clothingPieces / clothingLife * clothingCarbonFactor;
    var foodCarbon = (meatDays * 7 + vegetableDays * 3) / 7 * foodCarbonFactor;
    var transportCarbon = (carKm * 0.2 + publicTransportDays * 5) / 365 * transportCarbonFactor;
    var livingCarbon = (electricity * 0.5 + airconHours * 10) / 30 * livingCarbonFactor;

    var totalCarbonFootprint = clothingCarbon + foodCarbon + transportCarbon + livingCarbon;
    var hongKongAverage = 6;

    var resultText = 'Your total carbon footprint is ' + totalCarbonFootprint.toFixed(2) + ' tonnes. ';
    if (totalCarbonFootprint > hongKongAverage) {
        resultText += 'This is higher than the Hong Kong average of ' + hongKongAverage + ' tonnes.';
    } else {
        resultText += 'This is lower than the Hong Kong average of ' + hongKongAverage + ' tonnes.';
    }

    document.getElementById('result').innerText = resultText;
});