export { getSelectedData as weatherData };

async function getAPIdata(location) {
    // let request = await fetch(`https://api.weatherapi.com/v1/current.json?key=c19da5e9a95946b099f132929231206&q=${location}`
    let request = await fetch(`https://api.weatherapi.com/v1/current.json?key=c19da5e9a95946b099f132929231206&q=${encodeURIComponent(location)}`
        , {
            headers: {
                'Content-Type': 'application/json',
            }
        }
    );
    if (!request.ok) {
        throw new Error("Could not find the entered location");
    }
    let json = await request.json();
    return json;
}

async function getSelectedData(location) {
    let jsonData = await getAPIdata(location);

    let selectedData = {
        "location": jsonData.location,
        "temp_c": jsonData.current.temp_c,
        "condition": jsonData.current.condition,
        "wind_kph": jsonData.current.wind_kph,
        "humidity": jsonData.current.humidity,
        "feels_like": jsonData.current.feelslike_c
    }
    return selectedData;
};



