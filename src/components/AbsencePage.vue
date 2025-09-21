<template>
  <div>
    <h1>Ausências Registradas</h1>
    <table>
      <thead>
        <tr>
          <th>Membro</th>
          <th>Motivo</th>
          <th>Período</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="absences.length === 0">
          <td colspan="3" style="text-align: center;">Nenhuma ausência registrada</td>
        </tr>
        <tr v-for="(absence, index) in absences" :key="index" v-else>
          <td>{{ absence.member }}</td>
          <td>{{ absence.reason }}</td>
          <td>{{ absence.startDate }} até {{ absence.endDate }}</td>
        </tr>
      </tbody>
    </table>
    <div class="button-container">
      <button class="back-button" @click="$router.push('/')">Voltar para Página Inicial</button>
    </div>
  </div>
</template>

<style scoped>
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

const absences = reactive([])
</script>
