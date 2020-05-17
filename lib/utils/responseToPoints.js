/*
  The contents of this file are heavily sourced from react-native-maps-directions API, which can be found at
  https://github.com/bramus/react-native-maps-directions/blob/master/src/MapViewDirections.js
*/

const _decode = (t) => {
  let points = []
  for (let step of t) {
    let encoded = step.polyline.points
    let index = 0, len = encoded.length
    let lat = 0, lng = 0
    while (index < len) {
      let b, shift = 0, result = 0
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63
        result |= (b & 0x1f) << shift
        shift += 5
      } while (b >= 0x20)
      let dlat = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1))
      lat += dlat
      shift = 0
      result = 0
      do {
        b = encoded.charAt(index++).charCodeAt(0) - 63
        result |= (b & 0x1f) << shift
        shift += 5
      } while (b >= 0x20)
      let dlng = ((result & 1) != 0 ? ~(result >> 1) : (result >> 1))
      lng += dlng
      points.push({ latitude: (lat / 1E5), longitude: (lng / 1E5) })
    }
  }
  return points
}

export default response => {
  if (response.routes.length) {
    const route = response.routes[0]
    return route.legs.reduce((carry, curr) => [
      ...carry,
      ..._decode(curr.steps)
    ], [])
  }
  return []
}