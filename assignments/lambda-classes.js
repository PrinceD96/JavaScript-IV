// CODE here for your Lambda Classes

class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(instructorProps) {
    super(instructorProps);
    this.specialty = instructorProps.specialty;
    this.favLanguage = instructorProps.favLanguage;
    this.catchPhrase = instructorProps.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(studentProps) {
    super(studentProps);
    this.previousBackground = studentProps.previousBackground;
    this.className = studentProps.className;
    this.favSubjects = studentProps.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach(subj => console.log(subj));
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class TeamLead extends Instructor {
  constructor(TeamLeadProps) {
    super(TeamLeadProps);
    this.gradClassName = TeamLeadProps.gradClassName;
    this.favInstructor = TeamLeadProps.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const jack = new Instructor({
  name: 'Jack',
  location: 'Colorado',
  age: 41,
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `Shut that door!`
});

const megan = new Instructor({
  name: 'Megan',
  location: 'San Diego',
  age: 35,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Look at the muck on 'ere!`
});

const matt = new Student({
  name: 'Matt',
  location: 'Los Angeles',
  age: 21,
  previousBackground: 'Assistant Manager',
  className: 'Webpt9',
  favSubjects: ['Html', 'CSS', 'JavaScript', 'Python']
});

const becky = new Student({
  name: 'Becky',
  location: 'Charlotte',
  age: 23,
  previousBackground: 'Accountant',
  className: 'Webpt11',
  favSubjects: ['Html', 'Less', 'React']
});

const josh = new TeamLead({
  name: 'Josh',
  location: 'Syracuse',
  age: 29,
  gradClassName: 'CS6',
  favInstructor: 'Julia'
});

const eric = new TeamLead({
  name: 'Eric',
  location: 'Houston',
  age: 27,
  gradClassName: 'iOS7',
  favInstructor: 'Ryan'
});

// Testing Instructor's code!
console.log(jack.speak());
console.log(jack.demo('closures'));
console.log(jack.grade(matt, matt.favSubjects));

console.log(megan.speak());
console.log(megan.demo('JavaScript prototypes'));
console.log(megan.grade(becky, 'JavaScript prototypes'));

// Testing Student's code!
console.log(matt.favSubjects);
console.log(matt.listsSubjects());
console.log(matt.PRAssignment('CSS'));
console.log(matt.sprintChallenge('JavaScript'));

console.log(becky.favSubjects);
console.log(becky.listsSubjects());
console.log(becky.PRAssignment('React'));
console.log(becky.sprintChallenge('Python'));

// Testing TeamLead's code!
console.log(josh.speak());
console.log(josh.demo('Git Flow'));
console.log(josh.standUp('#Webpt9'));
console.log(josh.debugsCode(becky, 'React'));

console.log(eric.speak());
console.log(eric.demo('Swift'));
console.log(eric.standUp('#iOS9'));
console.log(eric.debugsCode(matt, 'JavaScript'));
