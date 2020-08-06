<template>
<div>
   <router-link class="link-inicio" v-bind:to="{path: '/'}">Home</router-link>
       <div class="row">
      <div class="col s2 m2"></div>
      <div class="col s8 m8">
        <table class="striped centered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Network</th>
              <th>Seasons</th>
              <th>Current</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ title }}</td>
              <td>{{ network }}</td>
              <td>{{ number }}</td>
              <td>{{current}}</td>
              <td ><span v-for="(genre, i) in genres" :key="i">{{ genre }} </span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col s2 m2"></div>
    </div>
</div>
 
</template>

<script>
import { db } from '@/firebase';
export default {
    name: 'infoShow',
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
  }

}
</script>

<style>

</style>