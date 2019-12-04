
var date = new Date();
$(document).ready(function () {
  client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt");
  client.on("connect", function () {
    console.log("Successfully connected");
    client.subscribe("tilt");
  })
  
  client.on("message", function (topic, payload) {
    console.log("recieved:\ntopic: " + topic + "\npayload: " + payload);
    var text =  payload.toString().split("-");
   
    var time = date.getHours()+':'+date.getMinutes()
    if (payload.toString().split("-")[1] == "door1") {
      $('.room1').prepend('<tr class="nr"><td>'+text[0]+'</td><td>'+time+'</td></tr>')
    } else {
      $('.room2').prepend('<tr class="nr" ><td>'+text[0]+'</td><td>'+time+'</td></tr>')
    }
    // $('#history').text(payload)
    // $(topic).val(payload);
    // alert( $("#"+topic).val(payload))
   
  })

})

