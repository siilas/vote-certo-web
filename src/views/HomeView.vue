<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="content">
    <div class="title">
      Conheca seus candidatos!
      Apresenta informações detalhadas sobre todos os candidatos que pediram registro à Justiça Eleitoral 
      e sobre as suas contas eleitorais e as dos partidos políticos.
    </div>

    <div class="form-search">
      Buscar candidato: 
      <input type="text" /> 
      <button v-on:click="mostrarCandidatos = true">Buscar</button>
    </div>

    <div>
      <table class="candidates-table" v-if="mostrarCandidatos">
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

  .content {
    padding: 0 5% 5% 5%;
  }

  .title {

  }

  .form-search {

  }

  .candidates-table {
    width: 100%;
  }

  .candidates-table thead {
    color: black;
    font-weight: bold;
  }

  .candidates-table tbody {
    text-align: center;
  }

  .candidates-table td, th {
    padding: 0.5rem 0.5rem;
  }

  caption {
    font-size: 18px;
    font-weight: bold;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
  }
</style>