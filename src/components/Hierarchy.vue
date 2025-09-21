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
    icon: '🌞',
    members: [
      { name: 'Polly', html: '@ORGs | 🎭 Polly' }
    ]
  },
  {
    name: 'ADM',
    count: 1,
    icon: '🌞',
    members: [
      { name: 'Zack', html: '@ADM | Zack #EvT🏆' }
    ]
  },
  {
    name: 'Responsável EvT',
    count: 1,
    icon: '🌞',
    members: [
      { name: 'PH', html: '@Resp.EvT | 💔  PH 20/24 | 8493' }
    ]
  },
  {
    name: 'Auxiliar EvT',
    count: 1,
    icon: '🎉',
    members: [
      { name: 'MarLock', html: '@AuX. EvT |🐲 MarLock #EvT| 1120' }
    ]
  },
  {
    name: 'Líder EvT',
    count: 1,
    icon: '🚀',
    members: [
      { name: 'Kira', html: '@Lid. EVT | 🐲Kira #EvT 🏆 | 117' }
    ]
  },
  {
    name: 'Sub-Líder EvT',
    count: 2,
    icon: '🚀',
    members: [
      { name: 'Neggo trufa', html: '@Sub. EVT |🐲Neggo trufa | 1302' },
      { name: 'Ducra', html: '@Sub.EvT | 🐲 Ducra | 9959' }
    ]
  },
  {
    name: 'Equipe EvT',
    count: 4,
    icon: '✨',
    members: [
      { name: 'THX ZIKA', html: '@EvT | 🐲THX ZIKA | 12719' },
      { name: 'henrique muniz', html: '@EVT |🐲 henrique muniz | 11888' },
      { name: 'Luluzinho Azul', html: '@EVT | 🐲Luluzinho Azul | 25482' },
      { name: 'SOUZA', html: '@EvT | 🐲 SOUZA | 11814' }
    ]
  },
  {
    name: 'Equipe EvT-T',
    count: 2,
    icon: '✨',
    members: [
      { name: 'CLEBER', html: '@EvT | 🐲CLEBER | 12555' },
      { name: 'Nick Piloto', html: '@EvT-T | 🐲Nick Piloto | 16338' }
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
