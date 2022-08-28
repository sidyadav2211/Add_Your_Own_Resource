<template>
    <ul>
    <resource-list
    v-for="( res, i) in resourceStore" :key="i"
    :resourceData="res"
    @delete-row="removeValue"
  ></resource-list>
    </ul>
</template>

<script>
import ResourceList from "./Resource-list.vue"
export default {
    components: {
    ResourceList
},
    inject:[
        'resourceStore',
        'removeValue'
    ],
    data() {
        
    },
     methods:{
    //     deleteData(id) {

    //         this.deleteVal(id)
      
    // },
}
}


</script>

<style scoped>
ul{
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;

}

</style>