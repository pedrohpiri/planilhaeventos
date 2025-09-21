<template>
  <div id="app">
    <header>
      <h1>Controle de Eventos - Cidade Grande </h1>
      <button class="absence-button" @click="$router.push('/absence')">Ausência</button>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2024 Cidade Grande GTARP - Controle de Eventos</p>
      <p>DeV PH ID : 8493</p>
    </footer>
  </div>
</template>

<script setup>
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
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
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

/* Botão Ausência no header */
.absence-button {
  background-color: #444;
  color: #eee;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}
.absence-button:hover {
  background-color: #666;
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
