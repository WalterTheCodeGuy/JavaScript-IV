// CODE here for your Lambda Classes

// Base class
class Person {
  constructor(attrs){
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }
  speak() {
    return console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
}
}

// Instructor Class
class Instructors extends Person {
  constructor(instr){
    super(instr);
    this.specialty = instr.specialty;
    this.favLanguage = instr.favLanguage;
    this.catchPhrase = instr.catchPhrase;
  }
  demo(subject){
    return console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject){
    return console.log(`${student.name} receives a 3 on ${subject}.`);
  }
}

// Student Class
class Students extends Person {
  constructor(student){
    super(student);
    this.previousBackground = student.previousBackground;
    this.className = student.className;
    this.favSubjects = student.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(subject => {
       return console.log(`One of my favorite subjects is ${subject}.`);
   })
  }
  PRAssignment(subject){
    return console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject){
    return console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

// Project Manager class
class ProjectManagers extends Instructors {
  constructor(pm){
    super(pm);
    this.gradClassName = pm.gradClassName;
    this.favInstructor = pm.favInstructor;
  }
  standUp(channel){
    return console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject){
    return console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

// New Instructor
const britt = new Instructors({
  name: 'Britt',
  location: 'Canada',
  age: '30ish',
  favLanguage: 'JavaScript',
  specailty: 'Front-End',
  catchPhrase: 'Canada, eh?',
});

// New Student
const walter = new Students({
  name: 'Walter',
  location: 'Florida',
  age: '$)',
  previousBackground: 'Customer Service',
  className: 'WEB25',
  favSubjects: ['HTML', 'CSS', 'JavaScript'],
});

// New Project Manager
const allie = new ProjectManagers({
  name: 'Allie',
  location: 'Illinois',
  age: '20ish',
  favLanguage: 'CSS',
  speciality: 'FlexBox',
  gradClassName: 'WEBPT18',
  favInstructor: 'Do not know',
});

// console.log(walter.listsSubjects());
britt.speak();
walter.speak();
allie.speak();
britt.demo('JavaScript-IV');
britt.grade(walter, 'JavaScript Fundamentals');
walter.listsSubjects();
walter.PRAssignment('JavaScript-IV');
walter.sprintChallenge('JavaScript Fundamentals');
allie.standUp('web25_allie');
allie.debugsCode(walter, 'JavaScript');