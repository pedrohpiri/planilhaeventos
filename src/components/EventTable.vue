<template>
  <div>
    <div v-for="week in weeks" :key="week.name" class="week-section">
      <h2>{{ week.name }}: {{ week.period }}</h2>
      <table class="event-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th v-for="date in week.dates" :key="date">{{ date }}</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="participant in week.participants" :key="participant.name">
            <td class="name" data-label="Nome">{{ participant.name }}</td>
            <td v-for="date in week.dates" :key="date" :class="getCellClass(participant.events[date])" :data-label="date">
              {{ participant.events[date] || 0 }}
            </td>
            <td :class="getTotalClass(calculateTotal(participant.events))" data-label="Total">{{ calculateTotal(participant.events) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import './EventTable.css'

const baseParticipants = [
  { name: 'Sev7en' },
  { name: 'MarLock' },
  { name: 'Geraldo' },
  { name: 'Chucky' },
  { name: 'KIRA Nogame' },
  { name: 'Luluzinho Azul' },
  { name: 'gabriel magnata' },
  { name: 'Ruivo' },
  { name: 'Gusta PLz' },
  { name: 'dekaze silva' },
  { name: 'vini toxic' },
  { name: 'Carter' },
  { name: 'Kauã' },
  { name: 'camilla' },
  { name: 'Japones' },
  { name: 'HENRIQUE MUNIZ' },
  { name: 'neggo truffa' },
  { name: 'Matheus JM TD' },
  { name: 'cleber' },
  { name: 'Luiz' },
  { name: 'Nj1yt' },
  { name: 'THX' },
  { name: 'Eduardo Milk' },
  { name: 'Emierri' },
  { name: 'isadora' },
  { name: 'rick' },
  { name: 'MOTOMOTO DO GRAU' }
]

const weeks = reactive([
  {
    name: 'Segunda semana',
    period: '07/09 a 13/09',
    dates: ['07/09', '08/09', '09/09', '10/09', '11/09', '12/09', '13/09'],
    participants: baseParticipants.map(p => ({
      name: p.name,
      events: {
        '07/09': p.name === 'Sev7en' ? 2 : p.name === 'MarLock' ? 0 : p.name === 'Geraldo' ? 7 : p.name === 'Chucky' ? 8 : p.name === 'KIRA Nogame' ? 5 : p.name === 'Luluzinho Azul' ? 0 : p.name === 'gabriel magnata' ? 0 : p.name === 'Ruivo' ? 0 : p.name === 'Gusta PLz' ? 0 : p.name === 'dekaze silva' ? 0 : p.name === 'vini toxic' ? 0 : p.name === 'Carter' ? 3 : p.name === 'Kauã' ? 0 : p.name === 'camilla' ? 0 : p.name === 'Japones' ? 0 : p.name === 'HENRIQUE MUNIZ' ? 6 : p.name === 'neggo truffa' ? 6 : p.name === 'Matheus JM TD' ? 0 : p.name === 'cleber' ? 0 : p.name === 'Luiz' ? 0 : p.name === 'Nj1yt' ? 0 : p.name === 'THX' ? 4 : p.name === 'Eduardo Milk' ? 0 : p.name === 'Emierri' ? 0 : p.name === 'isadora' ? 0 : p.name === 'rick' ? 0 : p.name === 'MOTOMOTO DO GRAU' ? 0 : 0,
        '08/09': p.name === 'Sev7en' ? 0 : p.name === 'MarLock' ? 1 : p.name === 'Geraldo' ? 6 : p.name === 'Chucky' ? 3 : p.name === 'KIRA Nogame' ? 6 : p.name === 'Luluzinho Azul' ? 0 : p.name === 'gabriel magnata' ? 0 : p.name === 'Ruivo' ? 0 : p.name === 'Gusta PLz' ? 0 : p.name === 'dekaze silva' ? 0 : p.name === 'vini toxic' ? 0 : p.name === 'Carter' ? 3 : p.name === 'Kauã' ? 0 : p.name === 'camilla' ? 0 : p.name === 'Japones' ? 0 : p.name === 'HENRIQUE MUNIZ' ? 3 : p.name === 'neggo truffa' ? 4 : p.name === 'Matheus JM TD' ? 0 : p.name === 'cleber' ? 0 : p.name === 'Luiz' ? 0 : p.name === 'Nj1yt' ? 2 : p.name === 'THX' ? 0 : p.name === 'Eduardo Milk' ? 1 : p.name === 'Emierri' ? 2 : p.name === 'isadora' ? 0 : p.name === 'rick' ? 0 : p.name === 'MOTOMOTO DO GRAU' ? 0 : 0,
        '09/09': p.name === 'Sev7en' ? 1 : p.name === 'MarLock' ? 2 : p.name === 'Geraldo' ? 6 : p.name === 'Chucky' ? 1 : p.name === 'KIRA Nogame' ? 3 : p.name === 'Luluzinho Azul' ? 0 : p.name === 'gabriel magnata' ? 0 : p.name === 'Ruivo' ? 0 : p.name === 'Gusta PLz' ? 0 : p.name === 'dekaze silva' ? 0 : p.name === 'vini toxic' ? 0 : p.name === 'Carter' ? 1 : p.name === 'Kauã' ? 3 : p.name === 'camilla' ? 1 : p.name === 'Japones' ? 0 : p.name === 'HENRIQUE MUNIZ' ? 0 : p.name === 'neggo truffa' ? 2 : p.name === 'Matheus JM TD' ? 0 : p.name === 'cleber' ? 3 : p.name === 'Luiz' ? 0 : p.name === 'Nj1yt' ? 0 : p.name === 'THX' ? 2 : p.name === 'Eduardo Milk' ? 1 : p.name === 'Emierri' ? 0 : p.name === 'isadora' ? 1 : p.name === 'rick' ? 0 : p.name === 'MOTOMOTO DO GRAU' ? 0 : 0,
        '10/09': p.name === 'Sev7en' ? 3 : p.name === 'MarLock' ? 1 : p.name === 'Geraldo' ? 8 : p.name === 'Chucky' ? 1 : p.name === 'KIRA Nogame' ? 3 : p.name === 'Luluzinho Azul' ? 0 : p.name === 'gabriel magnata' ? 0 : p.name === 'Ruivo' ? 0 : p.name === 'Gusta PLz' ? 0 : p.name === 'dekaze silva' ? 0 : p.name === 'vini toxic' ? 0 : p.name === 'Carter' ? 1 : p.name === 'Kauã' ? 3 : p.name === 'camilla' ? 1 : p.name === 'Japones' ? 0 : p.name === 'HENRIQUE MUNIZ' ? 0 : p.name === 'neggo truffa' ? 5 : p.name === 'Matheus JM TD' ? 0 : p.name === 'cleber' ? 0 : p.name === 'Luiz' ? 0 : p.name === 'Nj1yt' ? 0 : p.name === 'THX' ? 1 : p.name === 'Eduardo Milk' ? 0 : p.name === 'Emerri' ? 1 : p.name === 'isadora' ? 3 : p.name === 'rick' ? 0 : p.name === 'MOTOMOTO DO GRAU' ? 1 : 0,
        '11/09': p.name === 'Sev7en' ? 3 : p.name === 'MarLock' ? 2 : p.name === 'Geraldo' ? 6 : p.name === 'Chucky' ? 2 : p.name === 'KIRA Nogame' ? 4 : p.name === 'Luluzinho Azul' ? 3 : p.name === 'gabriel magnata' ? 0 : p.name === 'Ruivo' ? 0 : p.name === 'Gusta PLz' ? 0 : p.name === 'dekaze silva' ? 0 : p.name === 'vini toxic' ? 0 : p.name === 'Carter' ? 1 : p.name === 'Kauã' ? 1 : p.name === 'camilla' ? 0 : p.name === 'Japones' ? 0 : p.name === 'HENRIQUE MUNIZ' ? 0 : p.name === 'neggo truffa' ? 3 : p.name === 'Matheus JM TD' ? 0 : p.name === 'cleber' ? 2 : p.name === 'Luiz' ? 0 : p.name === 'Nj1yt' ? 0 : p.name === 'THX' ? 4 : p.name === 'Eduardo Milk' ? 0 : p.name === 'Emierri' ? 1 : p.name === 'isadora' ? 1 : p.name === 'rick' ? 0 : p.name === 'MOTOMOTO DO GRAU' ? 0 : 0,
        '12/09': p.name === 'Sev7en' ? 5 : p.name === 'MarLock' ? 1 : p.name === 'Geraldo' ? 6 : p.name === 'Chucky' ? 5 : p.name === 'KIRA Nogame' ? 2 : p.name === 'Luluzinho Azul' ? 1 : p.name === 'gabriel magnata' ? 0 : p.name === 'Ruivo' ? 0 : p.name === 'Gusta PLz' ? 0 : p.name === 'dekaze silva' ? 0 : p.name === 'vini toxic' ? 0 : p.name === 'Carter' ? 0 : p.name === 'Kauã' ? 1 : p.name === 'camilla' ? 0 : p.name === 'Japones' ? 0 : p.name === 'HENRIQUE MUNIZ' ? 0 : p.name === 'neggo truffa' ? 5 : p.name === 'Matheus JM TD' ? 0 : p.name === 'cleber' ? 2 : p.name === 'Luiz' ? 0 : p.name === 'Nj1yt' ? 0 : p.name === 'THX' ? 3 : p.name === 'Eduardo Milk' ? 0 : p.name === 'Emerri' ? 0 : p.name === 'isadora' ? 1 : p.name === 'rick' ? 3 : p.name === 'MOTOMOTO DO GRAU' ? 0 : 0,
        '13/09': p.name === 'Sev7en' ? 3 : p.name === 'MarLock' ? 1 : p.name === 'Geraldo' ? 4 : p.name === 'Chucky' ? 2 : p.name === 'KIRA Nogame' ? 5 : p.name === 'Luluzinho Azul' ? 6 : p.name === 'gabriel magnata' ? 0 : p.name === 'Ruivo' ? 0 : p.name === 'Gusta PLz' ? 0 : p.name === 'dekaze silva' ? 0 : p.name === 'vini toxic' ? 0 : p.name === 'Carter' ? 5 : p.name === 'Kauã' ? 3 : p.name === 'camilla' ? 0 : p.name === 'Japones' ? 0 : p.name === 'HENRIQUE MUNIZ' ? 2 : p.name === 'neggo truffa' ? 5 : p.name === 'Matheus JM TD' ? 0 : p.name === 'cleber' ? 0 : p.name === 'Luiz' ? 0 : p.name === 'Nj1yt' ? 0 : p.name === 'THX' ? 0 : p.name === 'Eduardo Milk' ? 0 : p.name === 'Emierri' ? 0 : p.name === 'isadora' ? 3 : p.name === 'rick' ? 1 : p.name === 'MOTOMOTO DO GRAU' ? 1 : 0
      }
    }))
  },
  {
    name: 'Terceira semana',
    period: '14/09 a 20/09',
    dates: ['14/09', '15/09', '16/09', '17/09', '18/09', '19/09', '20/09'],
    participants: [
      { name: 'MarLock', events: { '14/09': 2, '15/09': 4, '16/09': 0, '17/09': 4, '18/09': 9, '19/09': 5, '20/09': 8 } },
      { name: 'Kira', events: { '14/09': 4, '15/09': 3, '16/09': 3, '17/09': 3, '18/09': 0, '19/09': 3, '20/09': 2 } },
      { name: 'Neggo trufa', events: { '14/09': 5, '15/09': 5, '16/09': 0, '17/09': 0, '18/09': 0, '19/09': 2, '20/09': 1 } },
      { name: 'Luluzinho Azul', events: { '14/09': 2, '15/09': 8, '16/09': 0, '17/09': 0, '18/09': 0, '19/09': 0, '20/09': 0 } },
      { name: 'THX ZIKA', events: { '14/09': 0, '15/09': 2, '16/09': 0, '17/09': 1, '18/09': 0, '19/09': 0, '20/09': 0 } },
      { name: 'henrique muniz', events: { '14/09': 0, '15/09': 0, '16/09': 0, '17/09': 0, '18/09': 0, '19/09': 0, '20/09': 0 } },
      { name: 'SOUZA', events: { '14/09': 0, '15/09': 0, '16/09': 0, '17/09': 0, '18/09': 0, '19/09': 1, '20/09': 5 } },
      { name: 'CLEBER', events: { '14/09': 0, '15/09': 0, '16/09': 2, '17/09': 0, '18/09': 0, '19/09': 2, '20/09': 0 } },
      { name: 'Nick Piloto', events: { '14/09': 1, '15/09': 0, '16/09': 0, '17/09': 1, '18/09': 0, '19/09': 0, '20/09': 5 } },
      { name: 'Ducra', events: { '14/09': 0, '15/09': 0, '16/09': 0, '17/09': 0, '18/09': 0, '19/09': 5, '20/09': 4 } }
    ]
  }
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
