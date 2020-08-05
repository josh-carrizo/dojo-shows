<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
            <tr  v-for="(show, i) in shows" v-bind:key="i" >
              <td>{{ show.title }}</td>
              <td>{{ show.network }}</td>
              <td>{{ show.numberOfSeasons }}</td>
              <td>{{ show.isCurrent }}</td>
              <td><span v-for="(genre, i) in show.genres" :key="i">{{ genre }}  / </span></td>
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
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
        shows: []        // to start, the list is empty
    }
  },
  firestore() {           // adding this key/function
    return {
      shows: db.collection('shows')
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
