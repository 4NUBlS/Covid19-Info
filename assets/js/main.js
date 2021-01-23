$(document).ready(function () {
    $.ajax({
        url: "https://covid19.th-stat.com/api/open/today"
    }).then(function (data) {
        $(".covid19-confirmed").append(data.Confirmed);
        $(".covid19-recovered").append(data.Recovered);
        $(".covid19-hospitalized").append(data.Hospitalized);
        $(".covid19-deaths").append(data.Deaths);
        $(".covid19-newConfirmed").append(data.NewConfirmed);
        $(".covid19-newRecovered").append(data.NewRecovered);
        $(".covid19-newHospitalized").append(data.NewHospitalized);
        $(".covid19-newDeaths").append(data.NewDeaths);
        $(".covid19-updateDate").append(data.UpdateDate);
    });
});