import { eventsStore } from "./data.js"
import { createEventElement, renderEvents, eventsBox } from "./utils.js"

renderEvents(eventsStore)

const distanceSelect = document.getElementById('distance-select')

distanceSelect.addEventListener('change', (e) => {
  const value = Number(e.target.value)
  if (Number.isNaN(value)) {
    renderEvents(eventsStore)
  } else {
    const filteredData = eventsStore.filter((event) => {
      return event.distance === value
    })
  
    if (filteredData.length === 0) {
      document.querySelector('.events').textContent = 'нет данных'
    } else {
      renderEvents(filteredData)
    }
  }
})