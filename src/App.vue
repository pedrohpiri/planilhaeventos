<template>
  <div id="app">
    <header>
      <h1>Controle de Eventos - Cidade Grande </h1>
    </header>
    <main>
      <EventTable />
      <PerformanceRules />
      <Hierarchy />
    </main>
    <footer>
      <p>© 2024 Cidade Grande GTARP - Controle de Eventos</p>
      <p>DeV PH ID : 8493</p>
    </footer>
  </div>
</template>

<script setup>
import EventTable from './components/EventTable.vue'
import Hierarchy from './components/Hierarchy.vue'
import PerformanceRules from './components/PerformanceRules.vue'
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  color: #eee;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
header {
  background-color: #1e1e1e;
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #333;
}
main {
  flex: 1;
  padding: 20px;
}
footer {
  background-color: #1e1e1e;
  padding: 10px;
  text-align: center;
  border-top: 1px solid #333;
  font-size: 0.9em;
  color: #888;
}
h1 {
  margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  header {
    padding: 15px 10px;
  }

  h1 {
    font-size: 1.5em;
  }

  main {
    padding: 15px 10px;
  }

  footer {
    padding: 8px 10px;
    font-size: 0.8em;
  }
}

@media (max-width: 480px) {
  header {
    padding: 12px 8px;
  }

  h1 {
    font-size: 1.3em;
  }

  main {
    padding: 10px 8px;
  }

  footer {
    padding: 6px 8px;
    font-size: 0.75em;
  }
}
</style>
