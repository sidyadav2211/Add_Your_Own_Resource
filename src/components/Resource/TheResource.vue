<template>
    <base-card>
    <base-button @click="setSelectedTab('resource-store')" :mode="selectedTab ==='resource-store' ? null : 'flat'">Store Resource </base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="selectedTab ==='add-resource' ? null : 'flat'">Add Resource </base-button>
    </base-card>
    <keep-alive>
    <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue'
import ResourceStore from './ResourceStore.vue'
import BaseButton from '../UI/BaseButton.vue'
export default {
  components: { BaseButton ,
  AddResource,  ResourceStore},
    data() {
        return {
        selectedTab :'resource-store',
        storedResources: [
        {
          id: '01',
          title: 'Vue Guide',
          description: 'The official vuejs guide',
          link: 'https://vuejs.org',
        },
        {
          id: ' 02',
          title: 'React Guide',
          description: 'The official reactjs guide',
          link: 'https://reactjs.org',
        },
        {
          id: '03',
          title: 'Google',
          description: 'Learn using google',
          link: 'https://google.com',
        },
      ],
        }
    },
    provide(){
        return {
            resourceStore: this.storedResources,
            addResource :this.addResource,
            removeValue: this.removeValue,

            }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab; 
        },
        addResource(resource) {
        const payload = {
            id:new Date().toISOString(),
            title: resource.title,
            description: resource.description,
            link: resource.link,
            }
            this.storedResources.unshift(payload);
            this.selectedTab ='resource-store';
        },
        removeValue(id){
        const removeIndex = this.storedResources.findIndex((el)=>el.id ===id);
        this.storedResources.splice(removeIndex, 1);
        }


    }
}
</script>