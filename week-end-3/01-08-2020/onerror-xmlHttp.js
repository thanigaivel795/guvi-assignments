var xmlhttp = new XMLHttpRequest()
  

xmlhttp.open('GET', "https://samples.openweathermap.org/data/2.5/forecast/hourly?q=London,us&mode=xml&appid=439d4b804bc8187953eb36d2a8c26a02", true);
xmlhttp.onerror = function () {
  console.log("** An error occurred during the transaction");
};
xmlhttp.send();