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
          <td :class="getTotalClass(participant.total)" data-label="Total">{{ participant.total }}</td>
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
  { name: 'Sev7en', events: { '07/09': 2, '08/09': 0, '09/09': 1, '10/09': 2, '11/09': 3, '12/09': 0, '13/09': 0 }, total: 9 },
  { name: 'MarLock', events: { '07/09': 0, '08/09': 1, '09/09': 2, '10/09': 1, '11/09': 2, '12/09': 0, '13/09': 0 }, total: 6 },
  { name: 'Geraldo', events: { '07/09': 7, '08/09': 6, '09/09': 6, '10/09': 1, '11/09': 6, '12/09': 0, '13/09': 0 }, total: 26 },
  { name: 'Chucky', events: { '07/09': 6, '08/09': 3, '09/09': 1, '10/09': 1, '11/09': 3, '12/09': 0, '13/09': 0 }, total: 14 },
  { name: 'KIRA Nogame', events: { '07/09': 5, '08/09': 5, '09/09': 3, '10/09': 1, '11/09': 4, '12/09': 0, '13/09': 0 }, total: 18 },
  { name: 'Luluzinho Azul', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 2, '12/09': 0, '13/09': 0 }, total: 2 },
  { name: 'gabriel magnata', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 0 },
  { name: 'Ruivo', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 0 },
  { name: 'Gusta PLz', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 0 },
  { name: 'dekaze silva', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 0 },
  { name: 'vini toxic', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 0 },
  { name: 'Carter', events: { '07/09': 0, '08/09': 4, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 4 },
  { name: 'Kauã', events: { '07/09': 0, '08/09': 0, '09/09': 2, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 2 },
  { name: 'camilla', events: { '07/09': 0, '08/09': 0, '09/09': 1, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 1 },
  { name: 'Japones', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 0 },
  { name: 'HENRIQUE MUNIZ', events: { '07/09': 0, '08/09': 3, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 3 },
  { name: 'neggo truffa', events: { '07/09': 2, '08/09': 4, '09/09': 2, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 8 },
  { name: 'Matheus JM TD', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 0 },
  { name: 'cleber', events: { '07/09': 0, '08/09': 0, '09/09': 3, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 3 },
  { name: 'Luiz', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 0 },
  { name: 'Nj1yt', events: { '07/09': 0, '08/09': 2, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 2 },
  { name: 'THX', events: { '07/09': 2, '08/09': 1, '09/09': 2, '10/09': 0, '11/09': 4, '12/09': 0, '13/09': 0 }, total: 9 },
  { name: 'Eduardo Milk', events: { '07/09': 0, '08/09': 0, '09/09': 1, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 1 },
  { name: 'Emierri', events: { '07/09': 0, '08/09': 2, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 2 },
  { name: 'isadora', events: { '07/09': 0, '08/09': 0, '09/09': 1, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 1 },
  { name: 'rick', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 0 },
  { name: 'MOTOMOTO DO GRAU', events: { '07/09': 0, '08/09': 0, '09/09': 0, '10/09': 0, '11/09': 0, '12/09': 0, '13/09': 0 }, total: 0 }
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
</script>
