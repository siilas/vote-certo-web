<template>
  <div class="page">
    <div class="breadcrumb container">
      <div class="row">
        <div class="column">
          <span>Início / Candidato</span>
        </div>
      </div>
    </div>

    <div class="candidato-info container">
      <div class="row">
        <div class="column">
          <img title="Candidato" src="../assets/foto_candidato.png" alt="candidato">
        </div>
        <div class="column">
          <p class="candidato-name"><b>Fulano</b></p>
          <p>Deputado X - 01234</p>
        </div>
      </div>
    </div>

    <div class="description container">
      <div class="row">
        <div class="column title">
          <b>Descrição</b>
        </div>
      </div>

      <div class="row">
        <div class="column">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a pellentesque mi. 
          Etiam molestie feugiat blandit. Quisque venenatis enim neque, convallis maximus lorem laoreet id. 
          Vivamus id euismod libero. In ultrices odio imperdiet ex fringilla euismod. Class aptent taciti 
          sociosqu ad litora torquent per conubia nostra, per inceptos 
          himenaeos. Fusce ullamcorper vulputate consectetur. Donec sed fermentum neque, sit amet condimentum libero.
        </div>
      </div>
    </div>

    <div class="mandatos container">
      <div class="row">
        <div class="column title">
          <b>Mandatos</b>
        </div>
      </div>

      <div class="row">
        <div class="column">
          Deputado Estadual pelo Estado de São Paulo
        </div>
        <div class="column">
          2002 - 2006
        </div>
      </div>

      <div class="row">
        <div class="column">
          Deputado Estadual pelo Estado de São Paulo
        </div>
        <div class="column">
          2006 - 2010
        </div>
      </div>

      <div class="row">
        <div class="column">
          Prefeito do Município de Iracemápolis
        </div>
        <div class="column">
          2012 - 2016
        </div>
      </div>
    </div>

    <div class="midia container">
      <div class="row">
        <div class="column">
          <div class="social-box">
            <div>
              <img title="Facebook" src="../assets/facebook.png" alt="facebook">
            </div>
            <div>
              <img title="Instagram" src="../assets/instagram.png" alt="instagram">
            </div>
            <div>
              <img title="Linkedin" src="../assets/linkedIn.png" alt="linkedin">
            </div>
            <div>
              <img title="Twitter" src="../assets/twitter.png" alt="twitter">
            </div>
          </div>
        </div>
        <div class="column">
          <button>ADICIONAR A COLA</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
.page {
  padding: 20px 40px;
}

.container {
  margin: 20px 0px;
}

.column {
  padding: 0px 12px;
}

.description .title {
  margin-bottom: 8px;
}

.candidato-info > .row {
  display: flex;
}

.candidato-info .candidato-name {
  font-size: 26px;
}

.mandatos .title {
  margin-bottom: 8px;
}

.mandatos > .row {
  display: flex;
  justify-content: space-between;
  width: 32rem;
  margin-bottom: 6px;
}

.mandatos {
  margin-bottom: 120px;
}

.midia > .row {
  display: flex;
  justify-content: space-between;
}

.midia button {
  padding: 6px 22px;
  background-color: #BAFFB4; 
  color: black;
  border: 0;
}

.midia .social-box {
  display: flex;
}

.midia img {
  padding-right: 12px;
}
</style>