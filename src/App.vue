<template>
  <MemberArea></MemberArea>
  <UploadArea></UploadArea>
  <hr />
  <InputItem></InputItem>
  <ResultArea></ResultArea>
</template>

<script>
import InputItem from "./components/InputItem.vue";
import MemberArea from "./components/MemberArea.vue";
import ResultArea from "./components/ResultArea.vue";
import UploadArea from "./components/UploadArea.vue";

export default {
  name: "App",
  components: {
    InputItem,
    MemberArea,
    ResultArea,
    UploadArea,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
