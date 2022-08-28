<template>
    <header>
        <h1>
            {{title}}
        </h1>
    </header>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
        }
    },
    data() {
        
    },
}
</script>
<style scoped>

header {
    width: 100%;
    height: 5rem;
    background-color: #640032;
    display: flex;
    align-items: center;
    justify-content: center;
}
header h1 {
    color: white;
    margin:0;
}
</style>