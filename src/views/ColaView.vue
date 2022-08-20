<template>

    <div class="main-div">
        <div class="breadcrumb container">
            <div class="row">
                <div class="column">
                    <span>Início / Candidato</span>
                </div>
            </div>
        </div>

        <h2>
            Seus Candidatos
        </h2>

        <div  class="card-size">
            <img  class="img-size" src="../assets/cand1.png" /> 
            <div class="action">
              <div>
                  <p class="card-text">NOME1</p>
                  <p class="card-text">SENADOR</p>
                  <p class="card-text">123</p>
              </div>
              <button class="remove">Remover</button>
            </div>
        </div>
        
        <div class="card-size">
            <img class="img-size" src="../assets/cand2.png" />
            <div class="action">
              <div>
                  <p class="card-text">NOME1</p>
                  <p class="card-text">SENADOR</p>
                  <p class="card-text">123</p>
              </div>
              <button class="remove">Remover</button>
            </div>
        </div>
        <div  class="card-size">
            <img  class="img-size" src="../assets/cand3.png" />
            <div class="action">
              <div>
                  <p class="card-text">NOME1</p>
                  <p class="card-text">SENADOR</p>
                  <p class="card-text">123</p>
              </div>
              <button class="remove">Remover</button>
            </div>
        </div>
    </div>
    <div class="botton-div">
        <button>Imprimir</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.remove {
  background-color: #FF9D9D
}

.action {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding-left: 16px;
}

.action p {
  text-align: left;
  margin-bottom: 4px;
}

.img-size {
  height: 150px;
  width:  150px;
  float: left;
}

.card-size {
  width: 600px;
  height: 150px;
  margin: 32px 0;
}

.card-text {
  text-align: center;
  vertical-align: center;
    
}

.botton-div {
  display: flex;
  justify-content: space-between;
}

button {
  padding: 6px 22px;
  background-color: #BAFFB4; 
  color: black;
  border: 0;
}
</style>