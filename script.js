var queryUrl = "https://cors-anywhere.herokuapp.com/https://api.catalog.beer/brewer";

$.ajax({
    url: queryUrl,
    method: "GET",
    headers: {
        "Authorization": "Basic " + btoa("07fd8e30-8eae-4f5f-a07d-ad2608235d7d : ")
    }
}).then(function (response) {
    console.log(response);
});