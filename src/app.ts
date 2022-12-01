const form = document.querySelector('form')!
const addressInput = document.getElementById('address')! as HTMLInputElement

const GOOGLE_API_KEY = "AIzaSyBEP4cOYGPyGxV8onjcSdJniLb5u1YfAbY"

type GoogleGeocodingResponse = {
    results: {geometry: {location: {lat: number; lng: number} }}[];
    status: "OK" | "ZERO_RESULTS"
}

function searchAddressHandler(event: Event) {
    event.preventDefault()
    // const enteredAddress = addressInput.value

}

form.addEventListener('submit', searchAddressHandler)