importScripts("https://cdn.jsdelivr.net/npm/danfojs@0.3.3/lib/bundle.min.js")

self.addEventListener('message', async function (event) {
  // Contains the sum of the numbers in the given array5
  console.log(event);
  let car_info = []
  for (const link of event.data.links) {
    const response = await fetch(link);
  }

  self.postMessage({
    car_info: car_info,
  })
}, false);
