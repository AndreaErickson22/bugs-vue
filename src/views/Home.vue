<template>
  <div class="home">
    <!-- tenative form -->
    <div class="container-fluid">
      <div class="row">
        <div id="FORM" class="col d-flex justify-content-center">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Tell Us About Your Bugs</span>
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
              <button id="Submit-Bugger" type="submit">Submit the bug that's buggin' you</button>
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

    <notes></notes>
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
        title: ""
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
.input-group-text {
  background: rgb(254, 254, 254);
  color: rgb(249, 99, 7);
  width: 400px;
  text-align: center;
  justify-content: center;
  font: bold;
}
span {
  text-align: center;
}
.input-group-prepend {
  justify-content: center;
}
.input-group {
  justify-content: center;
  width: 50%;
}
.done {
  text-decoration: line-through red;
}
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.form-control {
  width: 400px;
  text-align: center;
}
#Submit-Bugger {
  background-color: rgb(249, 99, 7);

  color: white;
  width: 400px;
  padding-botton: 5px;
  padding-top: 5px;
  font-weight: 500px;
}
</style>
