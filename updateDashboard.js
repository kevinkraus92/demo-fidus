function updateDashboard(quantityOfDays) {
	var baseStats = "http://private-81a36-kevinkraus92.apiary-mock.com/fidus/overallstats";
	var baseEtary = "http://private-81a36-kevinkraus92.apiary-mock.com/fidus/etary";
	var baseSex = "http://private-81a36-kevinkraus92.apiary-mock.com/fidus/sex";
	var baseVisitsPerDay = "http://private-81a36-kevinkraus92.apiary-mock.com/fidus/dailyvisits";
	var baseVisitsPerHour = "http://private-81a36-kevinkraus92.apiary-mock.com/fidus/perhour";
	var baseTotalVisits = "http://private-81a36-kevinkraus92.apiary-mock.com/fidus/newcustomers";

	getOverallStats(baseStats+"/"+quantityOfDays);
	getEtary(baseEtary+"/"+quantityOfDays);
	getSexVisits(baseSex+"/"+quantityOfDays);
	getDailyVisits(baseVisitsPerDay+"/"+quantityOfDays);
	getHourlyVisits(baseVisitsPerHour+"/"+quantityOfDays);
	getNewCustomers(baseTotalVisits+"/"+quantityOfDays);


}

function getOverallStats(endpoint) {
	$.getJSON(endpoint, function (data) {
		document.getElementById("totalVisits").innerHTML = data["totalvisits"];
		document.getElementById("visitsPerClient").innerHTML = data["newclients"];
		document.getElementById("newClients").innerHTML = data["visitsperclient"];
		document.getElementById("timeBetweenVisits").innerHTML = data["timebetweenvisit"];
		document.getElementById("rewards").innerHTML = data["rewards"];
	});
}