<template>
  <div>
     {{data}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        socket: null,
        data: " 没有改变"
      }
    },
    created() {
      let namespace = '/edit_message_test';
      let wsUrl = "ws://180.169.75.199:5004/edit";
      this.socket = new WebSocket(wsUrl + namespace);
      this.socket.onopen = function (msg) {
        console.log('WebSocket opened!');
      };
      let self = this;
      this.socket.onmessage = function (message) {
        console.log('receive message: ' + message.data.i);

        let {i } = message.data;
        self.data = i;
      };
      this.socket.onerror = function (error) {
        console.log('Error: ' + error.name + error.number);
      };
      this.socket.onclose = function (e) {
        console.log('WebSocket closed!' + e.code + ' ' + e.reason + ' ' + e.wasClean);
      };
    },
    destroyed() {

    },
    methods: {}
  }
</script>

<style scoped>

</style>

