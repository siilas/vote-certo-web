<template>
    <header>
        <div>
            <img  class="logo_principal" src="../assets/Logo.png"  />
        </div>
        <div>
            <img  class="icone_mala" src="../assets/icone2.png"  />
        </div>


    </header>
</template>

<script>
export default {
    name: "Header"
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
    width: 50px;
    height: 50px;
}


</style>