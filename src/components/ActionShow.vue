<template>
      
    <div class="row">
      <div class="col s2 m2" ></div>
        <form class="col s8 m8" @submit.prevent="UpdateShow">
        <router-link class="link-inicio" v-bind:to="{path: '/'}">Home</router-link>
          <div class="row"><h3>Edit {{$route.params.id}}</h3>
            <div class="input-field col s6">
              <input id="title" type="text" class="validate" v-model="title">
              <label for="title">Title</label>
            </div>
            <div class="input-field col s6">
              <input id="network" type="text" class="validate" v-model="network">
              <label for="network">Network</label>
            </div>
          </div>      
          <div class="row">
            <div class="input-field col s6">
              <input id="genres" type="text" class="validate" v-model="genres">
              <label for="genres">Genres Separated w/space</label>
            </div>
            <div class="input-field col s6">
              <input id="numberOfSeasons" type="number" class="validate" v-model="number">
              <label for="numberOfSeasons">Number of Seasons</label>
            </div>
          </div>
          <div class="row"> 
              <div class="switch col s6">
                <label>
                  No, isn't current
                  <input type="checkbox" v-model="current" >
                  <span class="lever"></span>
                  Is current
                </label>
              </div>
            <button class="btn waves-effect waves-light col s6 right" type="submit" name="action">Edit doJOSHow
            </button>
          </div>  
        </form>
      <div class="col s2 m2"></div>
    </div>
        
</template>

<script>
import { db } from '@/firebase';
export default {
    name: 'ActionShow',
    data() {
        return {
        title: '',
        network: '',
        number: '',
        current: '',
        genres:[]

    }
  },
  mounted() {
    db.collection("shows").doc(this.$route.params.id).get()
    .then(datos => {  // acá capturamos los datos de mi mascota, entonces los podemos asociar al objeto data
        const miShow = datos.data();  

        this.title= miShow.title,
        this.network= miShow.network,
        this.number= miShow.numberOfSeasons,
        this.current= miShow.isCurrent,
        this.genres= miShow.genres,
        console.log(miShow)
    });
  },
    methods:{
        UpdateShow(){

            console.log('Funciona UpdateShow')
            db.collection('shows').doc(this.$route.params.id).update({
            title: this.title,
            network: this.network,
            numberOfSeasons: parseInt(this.number),
            isCurrent: this.current,
            genres: this.genres.split(' ')
            })
            .then(() => {
              this.$router.push('/');
            })

    
    }
    
  }

}
</script>

<style>

</style>