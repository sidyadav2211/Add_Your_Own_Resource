<template>
    <base-card>
    <form action="" @submit.prevent="handleSubmit">
    <div class="form-control">
        <label for="title">Title</label>
        <input id="title" type="text" v-model="title" placeholder="Title" />
    </div>
    <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description"  v-model="description"   placeholder="Description" rows="3" name="description" />
    </div>
    <div class="form-control">
        <label for="link">Link</label>
        <input id="link" type="url" placeholder="Link"  v-model="link"/>
    </div>
    <div>
    <base-button type="submit"> Add Resource </base-button>
    </div>
    </form>

    </base-card>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue"
export default {
    components: { BaseButton},
    inject: ['addResource' ],
    data() {
        return {
            title: "",
            description: "",
            link: ""
        }
    },
 
    methods: {
        handleSubmit() {
            const data = {
                title: this.title,
                description: this.description,
                link: this.link,
            }
           this.addResource(data)
            
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

</style>