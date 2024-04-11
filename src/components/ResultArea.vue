<template>
  <br />
  <h3>Result:</h3>
  <div class="main">
    <table v-if="result.length > 0" class="resultTable">
      <thead>
        <tr>
          <th>Member Name</th>
          <th>Total Paid</th>
          <th>+/-</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r, index) in result" :key="index">
          <td>{{ r.memberName }}</td>
          <td>{{ r.amountByMember }}</td>
          <td :class="{ shouldPaid: r.result.includes('-') > 0 }">
            {{ r.result }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ResultArea",
  data() {
    return {};
  },
  computed: {
    ...mapState(["result"]),
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  text-align: center;
}

.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.resultTable {
  width: 600px;
  border-collapse: collapse;
  word-wrap: break-word;
  table-layout: fixed;
}

.resultTable thead > tr {
  border-bottom: 3px solid lightsalmon;
}

.resultTable tbody > tr {
  border-bottom: 1px solid lightsalmon;
}

.shouldPaid {
  color: lightsalmon;
  font-weight: bold;
}

@media screen and (max-width: 630px) {
  .resultTable {
    width: 100%;
  }
}
</style>
