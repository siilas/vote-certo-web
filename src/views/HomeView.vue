<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <div>
      Conheca seus candidatos!
      Apresenta informações detalhadas sobre todos os candidatos que pediram registro à Justiça Eleitoral 
      e sobre as suas contas eleitorais e as dos partidos políticos.
    </div>

    <div>
      Buscar candidato: 
      <input type="text" /> 
      <button v-on:click="mostrarCandidatos = true">Buscar</button>
    </div>

    <div>
      <table v-if="mostrarCandidatos">
          <caption>Listagem de candidatos</caption>
          <thead>
              <th>Nome</th>
              <th>Cargo</th>
              <th>Número</th>
              <th>Partido</th>
              <th>#</th>
          </thead>
          <tbody>
              <tr>
                <td>Nelsinho</td>
                <td>Dep. Estadual</td>
                <td>12345</td>
                <td>UFSCar</td>
                <td>Ver | Compartilhar</td>
              </tr>
              <tr>
                <td>João</td>
                <td>Dep. Federal</td>
                <td>1234</td>
                <td>UFSCar</td>
                <td>Ver | Compartilhar</td>
              </tr>
              <tr>
                <td>Juninho</td>
                <td>Governador</td>
                <td>12</td>
                <td>UFSCar</td>
                <td>Ver | Compartilhar</td>
              </tr>
          </tbody>
      </table>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      mostrarCandidatos: false
    }
  }
};
</script>

<style scoped>

</style>