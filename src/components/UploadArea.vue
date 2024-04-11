<template>
  <br />
  <div class="main">
    <div class="box">
      <span> 🔸Download sample csv: </span>
      <button class="downloadBtn" @click="downloadSample()">Download</button>
    </div>
    <div class="box">
      <span> 🔸Upload file: </span>
      <input
        type="file"
        @change="onFileChange($event)"
        accept="text/csv"
        capture
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "UploadArea",
  data() {
    return {
      fileinput: "",
    };
  },
  computed: {
    ...mapState(["result"]),
  },
  methods: {
    async onFileChange(event) {
      const file = event.target.files[0];

      let itemsFromCSV = await this.readFile(file);
      if (itemsFromCSV.length !== 0) {
        // console.log("items:::" + JSON.stringify(itemsFromCSV));
        this.$store.commit("uploadItems", itemsFromCSV);
      }
    },
    async readFile(file) {
      return new Promise((resolve, reject) => {
        let itemsFromCSV = [];
        const reader = new FileReader();
        reader.onload = (e) => {
          const text = e.target.result;
          const lines = text.split("\r\n");

          for (var i = 1; i < lines.length; i++) {
            const columns = lines[i].split(",");
            if (columns[0] !== "") {
              let data = {
                title: columns[0],
                price: Number(columns[1]),
                whoPaid: columns[2],
                note: columns[3],
              };
              itemsFromCSV.push(data);
            }
          }
          resolve(itemsFromCSV);
        };
        reader.onerror = reject;
        reader.readAsText(file, "Big5");
      });
    },
    downloadSample() {
      console.log("downloadSample");
      let test_array = [
        ["title", "price", "whoPaid", "note"],
        ["Item Name1", 100, "Member1", "note1"],
        ["Item Name2", 200, "Member2", "note2"],
      ];
      // let fname = "sample.csv";
      let csvContent = "data:text/csv;charset=utf-8,";
      test_array.forEach(function (infoArray) {
        let dataString = infoArray.join(",");
        csvContent += dataString + "\r\n";
      });

      var encodedUri = encodeURI(csvContent);
      window.open(encodedUri);
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
  text-align: center;
  font-size: 0.8rem;
}
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.box {
  /* text-align: left; */
  width: 350px;
  margin-bottom: 10px;
}

.downloadBtn {
  padding: 3px;
  cursor: pointer;
}

@media screen and (max-width: 720px) {
  .box {
    text-align: left;
  }
}
</style>
