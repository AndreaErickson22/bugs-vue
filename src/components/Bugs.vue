<template>
  <div id="TABLE" class="row">
    <div class="col d-flex justify-content-center">
      <div class="Bugs">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Make Comment</th>
              <th scope="col">Bug Title</th>
              <th scope="col">Bug Description</th>
              <th scope="col">Creator</th>

              <th scope="col">Completed</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody v-for="bug in bugs" :key="bug.id">
            <tr>
              <th scope="row">{{bug.num}}</th>
              <td @click="setActiveBug(bug); $router.push({name: 'details', params:{id: bug._id}})">
                <button class="COMMENT btn-success">Comment</button>
              </td>
              <td>{{bug.title}}</td>
              <td>{{bug.description}}</td>
              <td>{{bug.creator}}</td>

              <td class="Bugs-Completed" v-bind:class="{'is-complete':bug.completed}">
                Click
                <input type="checkbox" v-on:change="markComplete">
              </td>

              <td>
                <button @click="$emit('del-bug', bug.id)" class="del">Delete</button>
              </td>
            </tr>

            <!-- <button @click="markDone">Complete</button> -->
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
    setActiveBug(bug) {
      this.$store.dispatch("setActiveBug", bug);
    },
    markComplete() {
      this.bug.completed = !this.bug.completed;
    }
  },
  components: {}
};
</script>
<style>
#TABLE {
  margin-top: 20px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: -10px -10px;
  margin-left: 10px;
  border-radius: 5%;
  cursor: pointer;
  float: right;
}
.Bugs-Completed {
  -ms-flex-align: end;
}
.COMMENT {
  border-radius: 5%;
}
</style>
