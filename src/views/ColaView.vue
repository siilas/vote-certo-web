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

        <div  class="card-size" style="border:1px solid red;">
            <img  class="img-size" src="../assets/cand1.png" /> 
            <div style="border:1px solid green;">
                <p class="card-text">NOME1</p>
                <p class="card-text">SENADOR</p>
                <p class="card-text">123</p>
            </div>
        </div>
        
        <div class="card-size" style="border:1px solid red;">
            <img  class="img-size" src="../assets/cand2.png" />
            <div style="border:1px solid green;">
                <p class="card-text">NOME1</p>
                <p class="card-text">SENADOR</p>
                <p class="card-text">123</p>
            </div>
        </div>
        <div  class="card-size" style="border:1px solid red;">
            <img  class="img-size" src="../assets/cand3.png" />
            <div style="border:1px solid green;">
                <p class="card-text">NOME1</p>
                <p class="card-text">SENADOR</p>
                <p class="card-text">123</p>
            </div>
        </div>
    </div>
    <div style="border:1px solid red;" class="botton-div">
        <Button>Voltar</Button>
        <Button>Imprimir</Button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.img-size {
    height: 150px;
    width:  150px;
    float: left;
}

.card-size {
    width: 600px;
    height: 150px;
}

.main-div {
    /* flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center; */

}

.card-text {
    text-align: center;
    vertical-align: center;
    
}

.botton-div {
        display: flex;
    justify-content: space-between;
}
</style>