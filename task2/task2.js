const authorInput = document.getElementById("author");
const messageInput = document.getElementById("message");
const sendBtn = document.querySelector(".btn");

class Message {
  constructor(sender, content) {
    this.sender = sender;
    this.date = gettime();
    this.content = content;
  }

  toString() {
    return `${this.date} ${this.sender}: ${this.content}`;
  }

  toHtml() {
    return `<p>${this.date} ${this.sender}: ${this.content}</p></b>`;
  }
}

class Messenger {
  constructor() {
    this.history = [];
    this.historyelement = document.querySelector(`.history`);
  }

  show_history() {
    this.history.forEach((message) => {
      console.log(message.toString());
    });
  }


}

function gettime() {
  let now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

let messenger = new Messenger("messenger");

sendBtn.addEventListener("click", () => {
  const author = authorInput.value;
  const message = messageInput.value;
  console.log(author, message,gettime())
});
