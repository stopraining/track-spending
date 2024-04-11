import { createStore } from "vuex";
// import items from "../components/items";

export default createStore({
  state: {
    allItems: [],
    members: [],
    result: [],
    averageAmount: [],
    total: 0,
  },
  getters: {},
  mutations: {
    addItems(state, item) {
      // console.log(item);
      return state.allItems.push(item);
    },
    addMembers(state, memberName) {
      if (state.members.indexOf(memberName) == -1) {
        state.members.push(memberName);
        state.averageAmount = Math.round(state.total / state.members.length); //.toFixed(1);
        return;
      } else {
        alert("already exist");
      }
    },
    deleteItem(state, index) {
      return state.allItems.splice(index, 1);
    },
    setResult(state, result) {
      return (state.result = result);
    },
    changeAverage(state, total) {
      state.total = total;
      state.averageAmount = Math.round(state.total / state.members.length); //.toFixed(1);
    },
    uploadItems(state, dataArray) {
      // console.log(dataArray);
      // state.allItems.push(data);
      dataArray.forEach((item) => {
        state.allItems.push(item);
        this.commit("addMembers", item.whoPaid);
        state.total += item.price;
        this.commit("changeAverage", state.total);
      });
      // this.commit("addMembers", data.whoPaid);

      // state.allItems.
    },
  },
  actions: {},
  modules: {},
});
