<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="content">
    <div class="title">
      <h1 tabindex="0">Vote Certo! Conheca seus candidatos!</h1>
      <br/>
      <span tabindex="0">
      Apresentamos informações detalhadas sobre os candidatos e suas propostas e também te ajudamos a não esquecer 
      em que vai votar, criando uma "colinha".
      </span>
    </div>

    <div class="form-search">
      <label tabindex="0">Buscar candidato:</label>
      <input type="text" placeholder="Digite o nome do candidato, partido ou tema de proposta..." /> 
      <button v-on:click="mostrarCandidatos = true">Buscar</button>
    </div>

    <div>
      <table class="candidates-table" v-if="mostrarCandidatos" tabindex="0">
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
    padding: 3%;
  }

  .title {
    margin-bottom: 30px;
  }

  .form-search input, button {
    margin-left: 10px !important;
  }

  .form-search input {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    width: 50%;
  }

  .candidates-table {
    width: 100%;
    margin-top: 3%;
    margin-bottom: 3%;
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

  button {
    background-color: #0d6efd;
    color: white !important;
    cursor: pointer;
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-family: ;
    --bs-btn-font-size: 1rem;
    --bs-btn-font-weight: 400;
    --bs-btn-line-height: 1.5;
    display: inline-block;
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
    font-family: var(--bs-btn-font-family);
    font-size: var(--bs-btn-font-size);
    font-weight: var(--bs-btn-font-weight);
    line-height: var(--bs-btn-line-height);
    color: var(--bs-btn-color);
    text-align: center;
    text-decoration: none;
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
    border-radius: var(--bs-btn-border-radius);
  }

  caption {
    font-size: 18px;
    font-weight: bold;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
  }
</style>