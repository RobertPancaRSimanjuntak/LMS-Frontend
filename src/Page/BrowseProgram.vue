<template>
    <div v-if="showBrowseCard">
        <BrowseCard />
        </div>
        <div>
        <router-view></router-view>
    </div>
    <div>
        
    </div>
   
</template>
<script>
import BrowseCard from '@/components/Section/Browse/BrowseCard.vue';


export default {
    components:{
    BrowseCard,
    
    },
    computed: {
    showBrowseCard() {
      // Hanya tampilkan BrowseCard jika route adalah '/browse'
      return this.$route.path === '/user/browser';
    }
  }
}
</script>