<template>
  <section class="hierarchy">
    <h2>📊 Hierarquia do Servidor</h2>
    <div v-for="(group, index) in hierarchy" :key="index" class="group">
      <h3>
        <span v-html="group.icon"></span>
        {{ group.name }} ({{ group.count }})
      </h3>
      <ul>
        <li v-for="member in group.members" :key="member.name" v-html="member.html"></li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const hierarchy = [
  {
    name: 'MASTER',
    count: 1,
    icon: '👑',
    members: [
      { name: 'Gabiss', html: '@ADM | 💖Gabiss' }
    ]
  },
  {
    name: 'ADM',
    count: 1,
    icon: '👑',
    members: [
      { name: 'MK7', html: '@ADM | 🦇 MK7' }
    ]
  },
  {
    name: 'RESP',
    count: 1,
    icon: '🛡️',
    members: [
      { name: 'Zack Cross', html: '@Resp. EvT | ! 𝓩𝓪𝓬𝓴 𝓒𝓻𝓸𝓼𝓼' }
    ]
  },
  {
    name: 'AUXILIAR',
    count: 1,
    icon: '⚔️',
    members: [
      { name: 'PH', html: '@Aux. EvT | 🐲 PH | 8493' }
    ]
  },
  {
    name: 'LÍDER',
    count: 2,
    icon: '🎖️',
    members: [
      { name: 'Sev7en', html: '@Líd. EvT | 🐲Sev7en' },
      { name: 'MarLock', html: '@Líd. EvT| 🐲 MarLock | 1120' }
    ]
  },
  {
    name: 'SUB LÍDER',
    count: 3,
    icon: '🅰️',
    members: [
      { name: 'Geraldo', html: '@Sub. EvT | 🐲 Geraldo | 14158' },
      { name: 'Chucky', html: '@Sub. EvT | 🐲 Chucky | 7809' },
      { name: 'KIRA Nogame', html: '@Sub. EvT | 🐲 KIRA Nogame | 117' }
    ]
  },
  {
    name: 'MEMBRO',
    count: 21,
    icon: '👤',
    members: [
      { name: 'Luluzinho Azul', html: '@EVT | 🐲 Luluzinho Azul | 25482' },
      { name: 'gabriel magnata', html: '@EVT | 🐲 gabriel magnata | 1954' },
      { name: 'Ruivo', html: '@EVT | 🐲 Ruivo | 102' },
      { name: 'Gusta PLz', html: '@EvT | 🐲Gusta PLz | 4969' },
      { name: 'dekaze silva', html: '@EVT | 🐲 dekaze silva | 10456' },
      { name: 'vini toxic', html: '@EVT | 🐲 vini toxic | 25099' },
      { name: 'Carter', html: '@EVT | 🐲 Carter | 1176' },
      { name: 'Kauã', html: '@EVT | 🐲 Kauã | 22196' },
      { name: 'camilla', html: '@EVT | 🐲 camilla | 30244' },
      { name: 'Japones', html: '@EVT | 🐲 Japones | 318985' },
      { name: 'HENRIQUE MUNIZ', html: '@EVT| 🐲HENRIQUE MUNIZ | 11888' },
      { name: 'neggo truffa', html: '@EVT | 🐲 neggo truffa | 1302' },
      { name: 'Matheus JM TD', html: '@EvT | 🐲 Matheus JM TD | 12074' },
      { name: 'cleber', html: '@EVT-T | 🐲 cleber | 12555' },
      { name: 'Luiz', html: '@EVT | 🐲 Luiz | 15427' },
      { name: 'THX', html: '@EVT| 🐲 THX | 12719' },
      { name: 'Eduardo Milk', html: '@EVT | 🐲 Eduardo Milk | 6399' },
      { name: 'Emierri', html: '@EVT | 🐲 Emierri | 17918' },
      { name: 'isadora', html: '@EVT | 🐲 isadora | 11517' },
      { name: 'rick', html: '@EVT | 🐲 rick | 103' },
      { name: 'MOTOMOTO DO GRAU', html: '@EVT | 🐲 MOTOMOTO DO GRAU | 13563' }
    ]
  }
]
</script>

<style scoped>
.hierarchy {
  margin-top: 40px;
  color: #eee;
  background-color: #222;
  padding: 20px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hierarchy {
    padding: 15px;
    margin-top: 30px;
  }
  .hierarchy h2 {
    font-size: 1.3em;
  }
  .group h3 {
    font-size: 1.1em;
  }
  .group ul li {
    font-size: 0.9em;
    padding: 5px 8px;
  }
}

@media (max-width: 480px) {
  .hierarchy {
    padding: 10px;
    margin-top: 20px;
  }
  .hierarchy h2 {
    font-size: 1.1em;
  }
  .group h3 {
    font-size: 1em;
  }
  .group ul li {
    font-size: 0.85em;
    padding: 4px 6px;
  }
}
</style>
