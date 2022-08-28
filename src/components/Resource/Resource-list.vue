<template>
    <ul>
        <li>
            <base-card>
                <header>
                    <h1>{{resourceData.title}}</h1>
                    <base-button @click="deleteRow(resourceData.id)" mode="flat"> Delete </base-button>
                    <!-- <button @click="deleteRow(resourceData.id)">Delete</button> -->
                </header>
            
            <p>{{resourceData.description}}</p>
            <nav>
                 <a :href="resourceData.link">View Resource</a>
            </nav>
             </base-card>
        </li>
       
    </ul>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue"
export default {
    components: { BaseButton  },
    props:{
        resourceData:{
            type:Array,
            required:true
        }
    },
    data() {

    return{

    }
    
    },
    methods:{
        deleteRow(id){
            this.$emit('delete-row',id)
            
        }
    }
}
</script>

<style scoped>
li{
    margin: auto;
    max-width: 40rem;
}

header{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>