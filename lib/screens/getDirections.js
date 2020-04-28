export default GetDirections = (waypoints, modes, arrivalTime, departTime) => {
  const APIKey = 'AIzaSyA5O_pccED4seCCXPDfnOzp0-Arbge8O1M'
  const combinedDirections = []

  for (i = 0; i < waypoints.length - 1; i++) {
    let APIRequestURL = 'https://maps.googleapis.com/maps/api/directions/json?' +
      'origin=' + waypoints[i] + '&destination=' + waypoints[i + 1] +
      '&mode=' + modes[i] +
      (arrivalTime != null) ? '&arrival_time=' + arrivalTime :
        (departTime != null) ? '&departure_time=' + departTime : '' +
        '&key=' + APIKey

    let httpsRequest = new XMLHttpRequest()
    httpsRequest.open("GET", APIRequestURL)
    httpsRequest.send()

    httpsRequest.onreadystatechange = () => {
      if (httpsRequest.status != 403) {
        let response = JSON.parse(httpsRequest.responseText)
        combinedDirections.push(response.routes.legs)
      }
    }
  }
  return (combinedDirections)
}