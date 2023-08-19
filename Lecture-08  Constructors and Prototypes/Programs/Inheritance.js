class Person {
    constructor(name) {
        this.name = name;
    }
  }
  
  class Student extends Person
  {
    constructor(name,rollNo,Class){
    super(name);
     this.Class=Class;
     this.rollNo=rollNo;
    }
     getDetails(){
        return [this.name,this.rollNo,this.Class];
    }
  }
  
  class Teacher extends Person
  {
    constructor(name,teacherID,subject){
        super(name);
         this.teacherID=teacherID;
         this.subject=subject;
        }
         getDetails(){
            return [this.name,this.teacherID,this.subject];
        }
     
  }
