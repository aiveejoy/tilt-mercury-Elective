$(document).ready(function () {
  var topic = ["bargs/jane", "mogal", "princechan", "group1/temperature", "genjess", "aspire/device", "z", "sensor/tanilonnadela"]
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
  client.on("connect", function () {
    console.log("Successfully connected");
    client.subscribe("tilt");
  })
  client.on("message", function (topic, payload) {
    console.log("recieved:\ntopic: " + topic + "\npayload: " + payload);
    $('#history').text(payload)
    // $(topic).val(payload);
    // alert( $("#"+topic).val(payload))
   
  })

})

