var messages = [];
function message(){
  this.message
  message.Send('Here is a send message!')
  message.Reply('Here is a reply message!')
}
handleMessage(successMessage) {
    var messageReceived = {
      type: 'success',
      value: successMessage
    };
    this.setState({
      messageReceived: messageReceived
    });
  }
  switch(message) {
    case "send":
      text = "Send a Message";
      break;
    case "reply":
      text = "Reply to a Message";
      break;
    default:
      text = "Error";
  }
.Send {display: out-message}
.Reply {display: in-message}

init: Message (send, reply){
  this.send = send;
  this.reply = reply;
}
document.getElementById('send-button').onclick = handleMessage;
