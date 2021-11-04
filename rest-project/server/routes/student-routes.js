let express = require('express');
let router = express.Router();
let lodash = require('lodash');

const fields = ['firstName', 'lastName', 'location'];

function findAllStudents(db, criteria = null) {
  let students = db.get('students').value();
  if (criteria) {
    let keys = lodash.intersection(Object.keys(criteria, fields));
    for (let key of keys) {
      // Conditions treated as "AND", but case-insensitive as well as partial
      students = students.filter((student) => {
        return new RegExp(criteria[key], 'i').test(student[key]);
      });
    }
  }
  return students;
}

function findStudent(db, id) {
  // This could return null/undefined!
  return db.get('students').find({ id }).value();
}

function addStudent(db, student) {
  return db.get('students').insert(student).write();
}

function updateStudent(db, student) {
  return db.get('students').find({ id: student.id }).assign(student).write();
}

function deleteStudent(db, id) {
  db.get('students').remove({ id }).write();
}

module.exports = function (db) {
  // TODO: Part 2, set up a minimal route for /students

  // TODO: Part 3, replace the minimal route implementation with a more
  // complete version.

  return router;
};
