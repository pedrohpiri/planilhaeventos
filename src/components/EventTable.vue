<template>
  <div>
    <h2>Segunda semana: 07/09 a 13/09</h2>
    <table class="event-table">
      <thead>
        <tr>
          <th>Nome</th>
          <th v-for="date in dates" :key="date">{{ date }}</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="participant in participants" :key="participant.name">
          <td class="name" data-label="Nome">{{ participant.name }}</td>
          <td v-for="date in dates" :key="date" :class="getCellClass(participant.events[date])" :data-label="date">
            {{ participant.events[date] || 0 }}
          </td>
          <td :class="getTotalClass(calculateTotal(participant.events))" data-label="Total">{{ calculateTotal(participant.events) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import './EventTable.css'

const dates = ['07/09', '08/09', '09/09', '10/09', '11/09', '12/09', '13/09']

const participants = reactive([
  { name: 'Sev7en', events: { '07/09': 2, '08/09': 0, '09/09': 1, '10/09': 3, '11/09': 3, '12/09': 5, '13/09': 3 } },
  { name: 'MarLock', events: { '07/09': 0, '08/09': 1, '09/09': 2, '10/09': 1, '11/09': 2, '12/09': 1, '13/09': 1 } },
  { name: 'Geraldo', events: { '07/09': 7, '08/09': 6, '09/09': 6, '10/09': 8, '11/09': 6, '12/09': 6, '13/09': 4 } },
  { name: 'Chucky', events: { '07/09': 8, '08/09': 3, '09/09': 1, '10/09': 1, '11/09': 2, '12/09': 5, '13/09': 2 } },
  { name: 'KIRA Nogame', events: { '07/09': 5, '08/09': 6, '09/09': 3, '10/09': 3, '11/09': 4, '12/09': 2, '13/09': 5 } },
  { name: 'Luluzinho Azul', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 3, '12/09': 1, '13/09': 6 } },
  { name: 'gabriel magnata', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'Ruivo', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'Gusta PLz', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'dekaze silva', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'vini toxic', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'Carter', events: { '07/09': 3, '08/09': 3, '09/09': 1, '10/09': 1, '11/09': 1, '12/09': 0, '13/09': 5 } },
  { name: 'Kauã', events: { '07/09': 0, '08/09': 0, '09/09': 3, '10/09': 3, '11/09': 1, '12/09': 1, '13/09': 3 } },
  { name: 'camilla', events: { '07/09': 0, '08/09': 0, '09/09': 1, '10/09': 1, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'Japones', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'HENRIQUE MUNIZ', events: { '07/09': 6, '08/09': 3, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 2 } },
  { name: 'neggo truffa', events: { '07/09': 6, '08/09': 4, '09/09': 2, '10/09': 5, '11/09': 3, '12/09': 5, '13/09': 5 } },
  { name: 'Matheus JM TD', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'cleber', events: { '07/09': 0, '08/09': 0, '09/09': 3, '10/09': 0, '11/09': 2, '12/09': 2, '13/09': 0 } },
  { name: 'Luiz', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'Nj1yt', events: { '07/09': 0, '08/09': 2, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'THX', events: { '07/09': 4, '08/09': 0, '09/09': 2, '10/09': 1, '11/09': 4, '12/09': 3, '13/09': 0 } },
  { name: 'Eduardo Milk', events: { '07/09': 0, '08/09': 1, '09/09': 1, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 } },
  { name: 'Emierri', events: { '07/09': 0, '08/09': 2, '09/09': 0, '10/09': 1, '11/09': 1, '12/09': 0, '13/09': 0 } },
  { name: 'isadora', events: { '07/09': 0, '08/09': 0, '09/09': 1, '10/09': 3, '11/09': 1, '12/09': 1, '13/09': 3 } },
  { name: 'rick', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 3, '13/09': 1 } },
  { name: 'MOTOMOTO DO GRAU', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 1, '11/09': 0, '12/09': 0, '13/09': 1 } }
])

function getCellClass(value) {
  if (value === 0 || value === undefined) return ''
  if (value > 3) return 'green'
  if (value >= 2 && value <= 3) return 'yellow'
  if (value === 1) return 'red'
  return ''
}

function getTotalClass(total) {
  if (total >= 20) return 'green'
  if (total >= 10) return 'yellow'
  return 'red'
}
function calculateTotal(events) {
  return Object.values(events).reduce((sum, val) => sum + (val || 0), 0)
}
</script>
