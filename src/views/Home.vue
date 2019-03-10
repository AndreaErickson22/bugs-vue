<template>
  <div class="home">
    <!-- tenative form -->
    <div class="container-fluid">
      <div class="row">
        <div id="FORM" class="col d-flex justify-content-center">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Tell me about your bug</span>
            </div>
            <form @submit.prevent="makeBugs">
              <input
                v-model="newBug.creator"
                type="text"
                aria-label="user name"
                placeholder="user name"
                class="form-control"
              >
              <input
                v-model="newBug.description"
                type="text"
                aria-label="bug description"
                placeholder="bug description"
                class="form-control"
              >
              <input
                v-model="newBug.title"
                type="text"
                aria-label="bug title"
                placeholder="bug title"
                class="form-control"
              >
              <button @click="setActiveBug" type="submit">Submit the bugger</button>
            </form>
          </div>
        </div>
      </div>
      <!-- <bugs v-for="bug in bugs" :bugData="bug" :key="bug._id"></bugs> -->
    </div>
    <div class="home container-fluid">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <Bugs></Bugs>
        </div>
      </div>
    </div>

    <Notes></Notes>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src

import Bugs from "@/components/Bugs.vue";
import Notes from "@/components/Notes.vue";

export default {
  name: "home",
  data() {
    return {
      newBug: {
        creator: "",
        description: "",
        title: "",
        closed: "",
        closedDate: ""
      }
    };
  },
  methods: {
    makeBugs() {
      this.$store.dispatch("addBug", this.newBug);
    }
    // markDone:{
    //   function(done){
    //     console.log(done)
    //     this.isDone = true
    //   }
    // }
  },
  components: {
    Bugs,
    Notes
  }
};
</script>
<style scoped>
#FORM {
  justify-content: center;
  margin-top: 10px;
}
.input-group {
  justify-content: center;
}
.done {
  text-decoration: line-through red;
}
</style>
