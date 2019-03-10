<template>
  <div id="TABLE" class="row">
    <div class="col d-flex justify-content-center">
      <div class="Bugs">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bug Title</th>
              <th scope="col">Bug Description</th>
              <th scope="col">Creator</th>
              <th scope="col">Closed</th>
              <th scope="col">Date Closed</th>
              <th scope="col">Comment</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="bug in bugs">
              <th scope="row">•</th>
              <td>{{bug.title}}</td>
              <td>{{bug.description}}</td>
              <td>{{bug.creator}}</td>
              <td>{{bug.closed}}</td>
              <td>{{bug.closedDate}}</td>

              <button @click="activeBug">SET ACT BUG - Comment</button>
              <!-- <button @click="markDone">Complete</button> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bugs",
  props: {},
  data() {
    return {
      activeBug: {}
    };
    // return {
    //   isDone: false,
    // }
  },
  mounted() {
    this.$store.dispatch("initialize");
  },
  //computed is talking to the state
  computed: {
    bugs() {
      return this.$store.state.bugs;
    }
  },
  methods: {
    setActiveBug(bugs) {
      this.activeBug = bugs;
    }
    // toggleDone(){
    //   this.isDone = !this.isDone;
    //
  },
  components: {}
};
</script>
<style>
#TABLE {
  margin-top: 20px;
}
</style>
