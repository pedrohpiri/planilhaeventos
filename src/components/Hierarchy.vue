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
      { name: 'Gabiss', html: '@MASTER | 💔Gabiss' }
    ]
  },
  {
    name: 'ADM',
    count: 1,
    icon: '🌞',
    members: [
      { name: 'Zack', html: '@ADM | Zack #GCP🏆' }
    ]
  },
  {
    name: 'Responsável EvT',
    count: 1,
    icon: '🌞',
    members: [
      { name: 'PH', html: '@Resp.EvT | 🐲 PH 20/24 | 8493' }
    ]
  },
  {
    name: 'Auxiliar EvT',
    count: 1,
    icon: '🎉',
    members: [
      { name: 'Sev777en', html: '@Aux.EvT | 🍀 Sev777en | 2450' }
    ]
  },
  {
    name: 'Líder EvT',
    count: 3,
    icon: '🚀',
    members: [
      { name: 'Geraldo', html: '@Lid.EvT | 🐲Geraldo | 14158' },
      { name: 'MarLock', html: '@Lid.EvT |🐲 MarLock#EvT🚀 | 1120' },
      { name: 'Kira', html: '@Lid. EVT | 🐲Kira #GCP🏆 | 117' }
    ]
  },
  {
    name: 'Sub-Líder EvT',
    count: 2,
    icon: '🚀',
    members: [
      { name: 'Neggo trufa', html: '@Sub. EVT |🐲Neggo trufa | 1302' },
      { name: 'Chucky', html: '@Sub.EvT| 🐲 Chucky #85% | 7809' }
    ]
  },
  {
    name: 'Equipe EvT',
    count: 11,
    icon: '✨',
    members: [
      { name: 'Camilla', html: '@EvT |🐉Camilla | 30224' },
      { name: 'Carter', html: '@EvT | 🐲 Carter | 1176' },
      { name: 'Luiz', html: '@EvT | 🐲 Luiz | 15427' },
      { name: 'Matheus JM TD', html: '@EvT | 🐲 Matheus JM TD | 12074' },
      { name: 'Rick Santana', html: '@EVT | 🐲 Rick Santana | 103' },
      { name: 'Ruivo', html: '@EVT | 🐲 Ruivo | 102' },
      { name: 'Gusta PLz', html: '@EvT | 🐲Gusta PLz | 4969' },
      { name: 'THX ZIKA', html: '@EvT | 🐲THX ZIKA | 12719' },
      { name: 'henrique muniz', html: '@EVT |🐲 henrique muniz | 11888' },
      { name: 'Japones', html: '@EvT | 🐲 Japones | 31895' },
      { name: 'Luluzinho Azul', html: '@EVT |🐲Luluzinho Azul | 25482' }
    ]
  },
  {
    name: 'Equipe EvT-T',
    count: 7,
    icon: '✨',
    members: [
      { name: 'Eduardo Milk', html: '@EvT-T | 🐲Eduardo Milk | 6399' },
      { name: 'Gabriel Magnata', html: '@EVT-T | 🐲Gabriel Magnata | 1954' },
      { name: 'Matheus', html: '@EVT-T | 🐲Matheus | 11517' },
      { name: 'CLEBER', html: '@EvT-T | 🐲CLEBER | 12555' },
      { name: 'Nick Piloto', html: '@EvT-T | 🐲Nick Piloto | 16338' },
      { name: 'Astro', html: '@EvT-T | 🐲Astro #AntXit | 34971' },
      { name: 'Bernardo', html: '@EVT-T | 🐲 Bernardo| 19652' }
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
