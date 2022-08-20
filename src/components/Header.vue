<template>
    <header>
        <div @click="goTo('/')">
            <img title="Logo" class="logo_principal" src="../assets/Logo.png"  alt="Logo Vote Certo" />
        </div>
        <div @click="goTo('/candidato-cola')" class="cola-box">
            <img title="Cola" class="icone_mala" src="../assets/mala-de-viagem.png" alt="Ir para cola"  />
        </div>

    </header>
</template>

<script>
export default {
    name: "Header",
    methods: {
        goTo(route){
            this.$router.push(route)
        },
    }
}
</script>

<style>

header {
    display: flex;
    justify-content: space-between;
    background-color: #C7CBCD;
    padding: 20px 40px;
}

.logo_principal {
    width: 50px;
    height: 50px;
}

.icone_mala {
    width: 40px;
    height: 40px;
}

.cola-box {
    display: flex;
    align-items: center;
}
</style>