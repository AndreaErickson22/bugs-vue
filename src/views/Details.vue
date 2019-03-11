<template>
  <div class="Bug Comment">
    <div class="col-12 d-flex justify-content-center">
      <div class="home container-fluid">
        <div class="row">
          <div class="col d-flex justify-content-center">
            <table class="table">
              <thead class="bg-light">
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
                <tr>
                  <th scope="row">•</th>
                  <td>{{bug.title}}</td>
                  <td>{{bug.description}}</td>
                  <td>{{bug.creator}}</td>
                  <td>{{bug.user}}</td>
                  <td>{{bug.createdAt}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Notes></Notes>
    <div class="row">
      <div class="col d-flex justify-content-center">
        <form>
          <div @submit.prevent="makeNote" class="form-group">
            <label for="exampleFormControlTextarea1">Enter your comments about the bug here!</label>
            <textarea class="form-control" id="bugNoteComment" rows="3"></textarea>
          </div>
          <button @click="setActiveNote">SET ACTIVE NOTE- Comment</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Bugs from "@/components/Bugs.vue";
import Notes from "@/components/Notes.vue";
export default {
  name: "details",
  props: [],
  data() {
    return {
      activeBug: {
        creator: "",
        description: "",
        title: "",
        notes: ""
      }
    };
  },
  computed: {
    bug() {
      return this.$store.state.activeBug;
    }
  },
  methods: {
    addNote() {
      this.$store.dispatch("addNote", this.newNote);
    }
  },
  components: {
    Bugs,
    Notes
  }
};
</script>

