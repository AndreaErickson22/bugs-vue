<template>
  <div class="Bug Comment">
    <div class="col-12 d-flex justify-content-center">
      <div class="home container-fluid">
        <div class="row">
          <Notes></Notes>
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
              <tbody v-for="bug in activeBug" :key="bug.id">
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
    activeBug() {
      return this.$store.state.acitveBug;
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

