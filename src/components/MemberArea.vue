<template>
  <div class="main">
    <label for="membersName">Members Name:</label>
    <input type="text" @keyup.enter="addMembers()" v-model.trim="memberName" />
    <button @click="addMembers()">Add</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MemberArea",
  data() {
    return {
      memberName: "",
    };
  },
  computed: {
    ...mapState(["members"]),
  },
  methods: {
    addMembers() {
      if (this.memberName !== "") {
        let confirmAdd = confirm("確定要新增嗎?");
        if (confirmAdd) {
          this.$store.commit("addMembers", this.memberName);
        }
        this.memberName = "";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  text-align: left;
}
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

button {
  padding: 3px;
  border: none;
  /* margin-top: 10px; */
}
button:hover {
  background-color: grey;
  color: white;
  cursor: pointer;
}
</style>
