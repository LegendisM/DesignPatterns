function QuestionsFactory() {
    this.questions = [];

    this.add = (title,answers,category,ownerID)=> {
        let question = new Question((this.questions.length+1),title,answers,category,ownerID);
        this.questions.push(question);
    }

    this.remove = (id)=> {
        delete this.questions[id];
    }
}

function Question(id,title,answers,category,ownerID) {
    this.id = id;
    this.title = title;
    this.answers = answers;
    this.category = category;
    this.ownerID = ownerID;

    this.say = ()=> {
        console.log(`ID : ${this.id} Title : ${this.title} Category : ${this.category} OwnerID : ${this.ownerID}`);
    }
}

function run() {
    const questionsFactory = new QuestionsFactory();

    questionsFactory.add("Hi",["a","b","c","d"],"sport",12);
    questionsFactory.add("Bye",["a","b","c","d"],"tv",7);

    for (let questionsFactoryKey in questionsFactory.questions) {
        let Question = questionsFactory.questions[questionsFactoryKey];
        Question.say();
    }
}
run();