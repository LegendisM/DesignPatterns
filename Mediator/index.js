// Chat room
function Chatroom() {
    this.participants = {};
}

Chatroom.prototype.register = function (Participant) {
    this.participants[Participant.name] = Participant;
    Participant.chatroom = this;
}

Chatroom.prototype.send = function (message, from, to) {
    if (to) {
        to.receive(message,from);
    } else {
        for (let key in this.participants) {
            if (this.participants[key] !== from) {
                this.participants[key].receive(message,from);
            }
        }
    }
}

// Participant
function Participant(avatar,name) {
    this.name = name;
    this.avatar = avatar;
    this.chatroom = null;
}

Participant.prototype.receive = function (message,from) {
    console.log(`You Receive Message From ${from.name} To ${this.name} with Content : ${message}`);
}
Participant.prototype.send = function (message, to) {
    this.chatroom.send(message,this,to);
}

// Run Section
function run() {
    let ParticipantA = new Participant(23,"Ali");
    let ParticipantB = new Participant(41,"Hamid");
    let ParticipantC = new Participant(12,"Reza");

    let chatroom = new Chatroom();
    chatroom.register(ParticipantA);
    chatroom.register(ParticipantB);
    chatroom.register(ParticipantC);

    ParticipantA.send("Hi",ParticipantB);
    ParticipantC.send("Hi to all alive people");
}
run()