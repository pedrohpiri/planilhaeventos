<template>
  <div>
    <h1>Ausências Registradas</h1>
    <div v-if="absences.length === 0" style="text-align: center; font-style: italic;">
      Nenhuma ausência registrada
    </div>
    <div v-else>
      <div v-for="(absence, index) in absences" :key="index" class="absence-card">
        <div class="header">
          <span class="event">{{ absence.event }}</span> |
          <span class="name" v-html="absence.name"></span> |
          <span class="time">{{ absence.time }}</span>
        </div>
        <div class="details">
          <div><strong>Nome:</strong> <span v-html="absence.name"></span></div>
          <div><strong>Tempo:</strong> {{ absence.time }}</div>
          <div><strong>Mot:</strong> {{ absence.reason }}</div>
          <div v-html="absence.extra"></div>
        </div>
      </div>
    </div>
    <div class="button-container">
      <button class="back-button" @click="$router.push('/')">Voltar para Página Inicial</button>
    </div>
  </div>
</template>

<style scoped>
.absence-card {
  background-color: #1e1e1e;
  color: #eee;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  box-shadow: 0 0 8px rgba(0,0,0,0.7);
}
.header {
  font-weight: bold;
  font-size: 1.1em;
  margin-bottom: 8px;
}
.event {
  color: #4caf50;
}
.name {
  color: #2196f3;
}
.details div {
  margin: 4px 0;
}
.button-container {
  margin-top: 20px;
  text-align: right;
}
.back-button {
  background-color: #444;
  color: #eee;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}
.back-button:hover {
  background-color: #666;
}
</style>

<script setup>
import { reactive } from 'vue'

const getTodayDate = () => {
  const today = new Date()
  return today.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
}

const absences = reactive([
  {
    event: 'EvT | 🐲 SOUZA | 11814 — 12:40',
    name: '@EvT | 🐲 SOUZA | 11814',
    time: getTodayDate(),
    reason: 'trabalho',
    extra: '@ADM | Zack #EvT🏆  @Resp.EvT | 💔  PH 20/24 | 8493'
  }
])
</script>
