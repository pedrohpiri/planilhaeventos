<template>
  <section class="performance-rules">
    <h2>Regra de Desempenho - Diário</h2>
    <table>
      <thead>
        <tr>
          <th>Valor</th>
          <th>Significado</th>
          <th>Cor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo de 3</td>
          <td>Baixo rendimento</td>
          <td class="red">Vermelho</td>
        </tr>
        <tr>
          <td>Entre 4 e 6</td>
          <td>Regular</td>
          <td class="yellow">Amarelo</td>
        </tr>
        <tr>
          <td>Acima de 6</td>
          <td>Excelente</td>
          <td class="green">Verde</td>
        </tr>
      </tbody>
    </table>

    <h2>Regra de Desempenho - Total (7 dias)</h2>
    <table>
      <thead>
        <tr>
          <th>Valor</th>
          <th>Significado</th>
          <th>Cor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Abaixo de 21</td>
          <td>Baixo rendimento</td>
          <td class="red">Vermelho</td>
        </tr>
        <tr>
          <td>Entre 28 e 42</td>
          <td>Regular</td>
          <td class="yellow">Amarelo</td>
        </tr>
        <tr>
          <td>Acima de 49</td>
          <td>Excelente</td>
          <td class="green">Verde</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
.performance-rules {
  margin-top: 30px;
  color: #eee;
  font-family: Arial, sans-serif;
}
.performance-rules h2 {
  margin-bottom: 10px;
}
.performance-rules table {
  width: 100%;
  border-collapse: collapse;
  background-color: #222;
  color: #eee;
}
.performance-rules th,
.performance-rules td {
  border: 1px solid #444;
  padding: 8px;
  text-align: center;
}
.performance-rules .green {
  background-color: #4caf50;
  color: #fff;
}
.performance-rules .yellow {
  background-color: #ffeb3b;
  color: #000;
}
.performance-rules .red {
  background-color: #f44336;
  color: #fff;
}
</style>
