class Answer {
  constructor(correct, text) {
    this.correct = correct;
    this.text = text;
  }
}

class Question {
  constructor(text, quantityOfAnswers, correct, textOfAnswer) {
    this.text = text;
    this.answers = [];
    for (let i = 0; i <= quantityOfAnswers - 1; i++) this.answers[i] = new Answer(correct[i], textOfAnswer[i]);
  }
}

class Topic {
  constructor(name, quantityOfQuestions, textsOfQuestions, quantityOfAnswers, question) {
    this.nameOfTopic = name;
    this.quantityOfQuestions = quantityOfQuestions;
    this.textsOfQuestions = textsOfQuestions;
    this.questions = [];
    for (let i = 0; i <= this.quantityOfQuestions - 1; i++) 
      this.questions[i] = new Question(this.textsOfQuestions[i], quantityOfAnswers, question[i].correct, question[i].answers);
  }
}

class EducationCourse {
  constructor(nameOfCourse, quantityOfTopics, quantityOfQuestions, namesOfTopics, textsOfQuestions, quantityOfAnswers, answers) {
    this.nameOfCourse = nameOfCourse;
    this.quantityOfTopics = quantityOfTopics;
    this.quantityOfQuestions = quantityOfQuestions;
    this.namesOfTopics = namesOfTopics;
    this.topics = [];
    for (let i = 0; i <= quantityOfTopics - 1; i++) {
      this.topics[i] = new Topic(this.namesOfTopics[i], this.quantityOfQuestions[i], textsOfQuestions[i], quantityOfAnswers, answers[i].questions);
    }
  }
}

const quantityOfQuestions = [3, 4, 4];
const quantityOfAnswers = 4;
const quantityOfTopics = 3;
const nameOfCourse = 'Universe';
const topicNames = ['Solar system', 'Galaxies', 'planet Earth'];
const questionTexts = [
  ['quantity of planets', 'our natural satellite', 'biggest planet in system'],
  ['name of our galazy', 'nearest galaxy', 'what in center of galaxy', 'form of many galaxies'],
  ['how many seas on planet', 'how many mainlands', 'biggest mainland', 'where is Heops pyramid'],
];
const answersOfQuestions = {
  topics: [{
    questions: [{
      answers: [6, 7, 8, 9],
      correct: [false, false, true, false],
    },
    {
      answers: ['moon', 'titan', 'phoenix', 'num'],
      correct: [true, false, false, false],
    },
    {
      answers: ['earth', 'jupiter', 'saturn', 'neptun'],
      correct: [false, true, false, false],
    },
    ],
  },
  {
    questions: [{
      answers: ['milky way', 'coffe break', 'time to tea', 'claster phoenix'],
      correct: [true, false, false, false],
    },
    {
      answers: ['Artemida', 'claster phoenix', 'andromeda', 'stolpy sozidaniya'],
      correct: [false, false, true, false],
    },
    {
      answers: ['orange soda', 'red line', 'lost bkbshechka', 'black hole'],
      correct: [false, false, false, true],
    },
    {
      answers: ['pyramid', 'spiral', 'cube(ice)', 'ball'],
      correct: [false, true, false, false],
    },
    ],
  },
  {
    questions: [{
      answers: [69, 228, 322, 1337],
      correct: [false, false, true, false],
    },
    {
      answers: [6, 7, 8, 9],
      correct: [true, false, false, false],
    },
    {
      answers: ['Evrazia', 'north america', 'australia', 'Mozdok'],
      correct: [true, false, false, false],
    },
    {
      answers: ['North Pole', 'Sahara', 'space', 'Egypt'],
      correct: [false, false, false, true],
    },
    ],
  },
  ],
};

const educationCourse = new EducationCourse(nameOfCourse, quantityOfTopics, quantityOfQuestions, topicNames, questionTexts, quantityOfAnswers, answersOfQuestions.topics);
