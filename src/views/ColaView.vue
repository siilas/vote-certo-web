<template>
    <div class="main-div">
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
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-text {
    text-align: center;
    vertical-align: center;
    
}
</style>