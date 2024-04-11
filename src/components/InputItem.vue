<template>
  <div class="main">
    <div class="inputArea">
      <h4>Add Item :</h4>
      <label for="title">Item Name:</label>
      <input type="text" v-model.trim="title" /><br />
      <label for="price">Price:</label>
      <input type="number" v-model="price" /><br />
      <label for="whoPaid">whoPaid:</label>
      <select name="" id="" v-model="whoPaid">
        <option v-for="(m, index) in members" v-bind:value="m" :key="index">
          {{ m }}
        </option></select
      ><br />
      <label for="note">note:</label>
      <input type="text" v-model="note" /><br />
      <button @click="addItems()">add</button>
    </div>
    <div class="itemsArea">
      <div>
        filter by member:
        <select name="" id="" v-model="filterSelect">
          <option value="">All</option>
          <option v-for="(m, index) in members" v-bind:value="m" :key="index">
            {{ m }}
          </option>
        </select>
      </div>
      <div class="itemListArea">
        <table class="itemListTable">
          <thead>
            <tr>
              <th>項目</th>
              <th>價格</th>
              <th colspan="3">付款的人</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in filterByMember" :key="index">
              <td>{{ i.title }}</td>
              <td>${{ i.price }}</td>
              <td>{{ i.whoPaid }}</td>
              <td class="noteCol">
                <button
                  v-if="i.note !== ''"
                  class="note"
                  :data-tooltip="i.note"
                >
                  note
                </button>
              </td>
              <td class="deleteCol">
                <button @click="deleteItem(index)">delete</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>total:</td>
              <td colspan="4">${{ total }}</td>
            </tr>
            <tr>
              <td>
                <span v-if="(allItems.length > 0) & (filterSelect == '')"
                  >average:</span
                >
              </td>
              <td colspan="4">
                <span v-if="(allItems.length > 0) & (filterSelect == '')"
                  >${{ averageAmount }}</span
                >
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="calBtnArea">
        <button @click="finalCalculate()">Calculate</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "InputItem",
  data() {
    return {
      title: "",
      price: 0,
      whoPaid: "",
      note: "",
      filterSelect: "",
      filterByMember: [],
    };
  },
  computed: {
    ...mapState(["allItems", "members", "total", "averageAmount"]),
  },
  methods: {
    addItems() {
      if ((this.title !== "") & (this.price !== 0) & (this.whoPaid !== "")) {
        let itemInfo = {
          title: this.title,
          price: this.price,
          whoPaid: this.whoPaid,
          note: this.note,
        };
        this.$store.commit("addItems", itemInfo);
        this.title = "";
        this.price = 0;
        // this.whoPaid = "";
        this.note = "";
      }
      this.totalCal();
      this.filterSelect = "";
      // this.total = this.filterByMember.reduce((acc, data) => {
      //   return (acc += data.price);
      // }, 0);
    },
    deleteItem(index) {
      console.log(this.filterByMember[index].title);
      let check = confirm("Do u want to delete item?");
      if (check) {
        this.$store.commit("deleteItem", index);
        this.filterByMember = this.allItems;
        this.filterSelect = "";
        this.totalCal();
        // this.cartItems.splice(index,1)
        // this.allItems[itemIndex].added = false
      }
      // this.finalCalculate();
    },
    totalCal() {
      let total = this.filterByMember.reduce((acc, data) => {
        return (acc += data.price);
      }, 0);
      console.log("total" + total);
      this.$store.commit("changeAverage", total);

      console.log(this.members.length);
    },
    finalCalculate() {
      let totalAmount = this.total;
      let memberSpending = [];

      if ((totalAmount !== 0) & (this.filterSelect == "")) {
        // let data = {};
        this.members.forEach((member) => {
          let dataByMember = this.allItems.filter((x) => {
            return x.whoPaid == member;
          });
          let amountByMember = dataByMember.reduce((acc, data) => {
            return (acc += data.price);
          }, 0);
          let result = Math.round(amountByMember - this.averageAmount); //.toFixed(1);

          if (result < 0) {
            result = result.toString();
            result = result.replace("-", "");
            result = "-$" + result;
          } else {
            result = "$" + result;
          }
          let data = {
            memberName: member,
            amountByMember: amountByMember,
            result: result,
          };
          memberSpending.push(data);
        });
      }
      // console.log(memberSpending);
      this.$store.commit("setResult", memberSpending);
    },
  },
  watch: {
    filterSelect() {
      if (this.filterSelect == "") {
        console.log("all");
        this.filterByMember = this.allItems;
      } else {
        this.filterByMember = this.allItems.filter((x) => {
          return x.whoPaid == this.filterSelect;
        });
      }
      // this.totalCal();
      let total = this.filterByMember.reduce((acc, data) => {
        return (acc += data.price);
      }, 0);
      this.$store.commit("changeAverage", total);
    },
  },
  mounted() {
    this.filterByMember = this.allItems;
    this.totalCal();
    // this.total = this.filterByMember.reduce((acc, data) => {
    //   return (acc += data.price);
    // }, 0);
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
}
.inputArea {
  width: 600px;
  border: 1px solid lightgreen;
  padding: 10px;
}
.itemsArea {
  width: 600px;
  height: 380px;
  border: 1px solid lightsteelblue;
  padding: 10px;
}

.itemListTable {
  width: 100%;
  border-collapse: collapse;
  word-wrap: break-word;
  table-layout: fixed;
}

.itemListTable th {
  border-bottom: 3px solid lightsalmon;
}

.itemListTable tbody > tr {
  border-bottom: 2px solid lightslategray;
}
/* here 4 test*/
/* .itemListTable td {
  border: 1px solid lightslategray;
} */

.itemListTable tbody > tr button {
  margin: 5px;
}

.itemListTable tbody > tr button:hover {
  background-color: lightsalmon;
}

.itemListTable tbody > tr button.note:focus {
  background-color: unset;
  color: lightsteelblue;
}

.itemListTable tbody > tr button.note {
  background-color: unset;
  color: grey;
}

.itemListTable th:first-child {
  width: 30%;
}

.itemListTable th:last-child {
  width: 50%;
}

.itemListTable tfoot > tr:last-child {
  color: lightsalmon;
}
.itemListTable tfoot > tr:last-child > td:last-child {
  text-decoration: underline;
}

.itemListArea {
  /* background-color: yellow; */
  height: 300px;
  overflow: auto;
}
.calBtnArea {
  /* background-color: pink; */
  text-align: center;
}

tfoot td {
  padding-top: 5px;
  font-weight: bold;
}

button {
  border-radius: 10px;
  padding: 5px;
  border: none;
  margin-top: 10px;
}

button:hover {
  background-color: grey;
  color: white;
  cursor: pointer;
}

input {
  margin-bottom: 5px;
}

select {
  margin-bottom: 5px;
}

button[data-tooltip]:focus:after {
  content: attr(data-tooltip);
  position: relative;
  background-color: lightsteelblue;
  color: black;
  top: 0px;
  left: 10px;
  word-break: break-all;
  white-space: nowrap;
  z-index: 1;
  padding: 3px;
}

h4 {
  text-decoration: underline;
  margin-bottom: 5px;
}

@media screen and (max-width: 1214px) {
  .itemsArea {
    width: 100%;
  }
  .inputArea {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  * {
    font-size: 0.7rem;
  }
}
</style>
