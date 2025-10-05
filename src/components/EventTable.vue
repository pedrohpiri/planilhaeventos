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
            <td v-for="date in week.dates" :key="date" :class="getCellClass(participant.events[date], week.name)" :data-label="date">
              {{ participant.events[date] || 0 }}
            </td>
            <td :class="getTotalClass(calculateTotal(participant.events), week.name)" data-label="Total">{{ calculateTotal(participant.events) }}</td>
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
        '11/09': p.name === 'Sev7en' ? 3 : p.name === 'MarLock' ? 2 : p.name === 'Geraldo' ? 6 : p.name === 'Chucky' ? 2 : p.name === 'KIRA Nogame' ? 4 : p.name === 'Luluzinho Azul' ? 3 : p.name === 'gabriel magnata' ? 0 : p.name === 'Ruivo' ? 0 : p.name === 'Gusta PLz' ? 0 : p.name === 'dekaze silva' ? 0 : p.name === 'vini toxic' ? 0 : p.name === 'Carter' ? 1 : p.name === 'Kauã' ? 1 : p.name === 'camilla' ? 0 : p.name === 'Japones' ? 0 : p.name === 'HENRIQUE MUNIZ' ? 0 : p.name === 'neggo truffa' ? 3 : p.name === 'Matheus JM TD' ? 0 : p.name === 'cleber' ? 2 : p.name === 'Luiz' ? 0 : p.name === 'Nj1yt' ? 0 : p.name === 'THX' ? 4 : p.name === 'Eduardo Milk' ? 0 : p.name === 'Emerri' ? 1 : p.name === 'isadora' ? 1 : p.name === 'rick' ? 0 : p.name === 'MOTOMOTO DO GRAU' ? 0 : 0,
        '12/09': p.name === 'Sev7en' ? 5 : p.name === 'MarLock' ? 1 : p.name === 'Geraldo' ? 6 : p.name === 'Chucky' ? 5 : p.name === 'KIRA Nogame' ? 2 : p.name === 'Luluzinho Azul' ? 1 : p.name === 'gabriel magnata' ? 0 : p.name === 'Ruivo' ? 0 : p.name === 'Gusta PLz' ? 0 : p.name === 'dekaze silva' ? 0 : p.name === 'vini toxic' ? 0 : p.name === 'Carter' ? 0 : p.name === 'Kauã' ? 1 : p.name === 'camilla' ? 0 : p.name === 'Japones' ? 0 : p.name === 'HENRIQUE MUNIZ' ? 0 : p.name === 'neggo truffa' ? 5 : p.name === 'Matheus JM TD' ? 0 : p.name === 'cleber' ? 2 : p.name === 'Luiz' ? 0 : p.name === 'Nj1yt' ? 0 : p.name === 'THX' ? 3 : p.name === 'Eduardo Milk' ? 0 : p.name === 'Emerri' ? 0 : p.name === 'isadora' ? 1 : p.name === 'rick' ? 3 : p.name === 'MOTOMOTO DO GRAU' ? 0 : 0,
        '13/09': p.name === 'Sev7en' ? 3 : p.name === 'MarLock' ? 1 : p.name === 'Geraldo' ? 4 : p.name === 'Chucky' ? 2 : p.name === 'KIRA Nogame' ? 5 : p.name === 'Luluzinho Azul' ? 6 : p.name === 'gabriel magnata' ? 0 : p.name === 'Ruivo' ? 0 : p.name === 'Gusta PLz' ? 0 : p.name === 'dekaze silva' ? 0 : p.name === 'vini toxic' ? 0 : p.name === 'Carter' ? 5 : p.name === 'Kauã' ? 3 : p.name === 'camilla' ? 0 : p.name === 'Japones' ? 0 : p.name === 'HENRIQUE MUNIZ' ? 2 : p.name === 'neggo truffa' ? 5 : p.name === 'Matheus JM TD' ? 0 : p.name === 'cleber' ? 0 : p.name === 'Luiz' ? 0 : p.name === 'Nj1yt' ? 0 : p.name === 'THX' ? 0 : p.name === 'Eduardo Milk' ? 0 : p.name === 'Emerri' ? 0 : p.name === 'isadora' ? 3 : p.name === 'rick' ? 1 : p.name === 'MOTOMOTO DO GRAU' ? 1 : 0
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
  },
  {
    name: 'Quarta semana',
    period: '21/09 a 27/09',
    dates: ['21/09', '22/09', '23/09', '24/09', '25/09', '26/09', '27/09'],
    participants: [
      { name: 'Ducra', events: { '21/09': 5, '22/09': 6, '23/09': 2, '24/09': 3, '25/09': 4, '26/09': 2, '27/09': 6 } },
      { name: 'Neggo trufa', events: { '21/09': 1, '22/09': 0, '23/09': 0, '24/09': 1, '25/09': 2, '26/09': 4, '27/09': 3 } },
      { name: 'Thx', events: { '21/09': 5, '22/09': 5, '23/09': 2, '24/09': 4, '25/09': 7, '26/09': 5, '27/09': 5 } },
      { name: 'Souza', events: { '21/09': 1, '22/09': 1, '23/09': 3, '24/09': 3, '25/09': 2, '26/09': 1, '27/09': 0 } },
      { name: 'sants scoot', events: { '21/09': 0, '22/09': 0, '23/09': 0, '24/09': 4, '25/09': 2, '26/09': 2, '27/09': 2 } }
    ]
  },
  {
    name: 'Quinta semana',
    period: '28/09 a 04/10',
    dates: ['28/09', '29/09', '30/09', '01/10', '02/10', '03/10', '04/10'],
    participants: [
      { name: 'Panta', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 2, '02/10': 2, '03/10': 4, '04/10': 7 } },
      { name: 'Cris', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 0, '02/10': 2, '03/10': 0, '04/10': 0 } },
      { name: 'SOUZA', events: { '28/09': 5, '29/09': 4, '30/09': 3, '01/10': 2, '02/10': 0, '03/10': 0, '04/10': 0 } },
      { name: 'GRC Brisa', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 1, '02/10': 1, '03/10': 3, '04/10': 2 } },
      { name: 'Narco', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 0, '02/10': 2, '03/10': 2, '04/10': 4 } },
      { name: 'kevin sulivan', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 2, '02/10': 4, '03/10': 0, '04/10': 0 } },
      { name: 'cabana cocudo', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 0, '02/10': 1, '03/10': 0, '04/10': 0 } },
      { name: 'JEFF', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 0, '02/10': 0, '03/10': 0, '04/10': 0 } },
      { name: 'Lucas Montana', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 0, '02/10': 0, '03/10': 0, '04/10': 0 } },
      { name: 'Venezaa', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 0, '02/10': 0, '03/10': 1, '04/10': 5 } },
      { name: 'tvretz', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 0, '02/10': 0, '03/10': 0, '04/10': 3 } },
      { name: 'Wallace', events: { '28/09': 0, '29/09': 0, '30/09': 2, '01/10': 0, '02/10': 0, '03/10': 0, '04/10': 1 } },
      { name: 'matheus', events: { '28/09': 0, '29/09': 0, '30/09': 0, '01/10': 0, '02/10': 0, '03/10': 1, '04/10': 5 } }
    ]
  }
])

function getCellClass(value, weekName) {
  if (value <= 0 || value === undefined) return ''
  if (weekName === 'Quarta semana') {
    if (value > 6) return 'green'
    if (value >= 4 && value <= 6) return 'yellow'
    if (value < 4) return 'red'
  } else {
    if (value > 3) return 'green'
    if (value >= 2 && value <= 3) return 'yellow'
    if (value === 1) return 'red'
  }
  return ''
}

function getTotalClass(total, weekName) {
  if (weekName === 'Quarta semana') {
    if (total > 49) return 'green'
    if (total >= 28 && total <= 42) return 'yellow'
    return 'red'
  } else {
    if (total >= 20) return 'green'
    if (total >= 10) return 'yellow'
    return 'red'
  }
}
function calculateTotal(events) {
  return Object.values(events).reduce((sum, val) => sum + (val || 0), 0)
}
</script>
