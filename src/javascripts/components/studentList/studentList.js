import './studentList.scss';
import utils from '../../helpers/utils';

const createStudentList = (students) => {
  let domString = '';

  students.forEach((student) => {
    domString += '<ul class="student-list">';
    domString += `<li>${student.name}</li>`;
    domString += '</ul>';
  });

  utils.printToDom('student-container', domString);
};

export default { createStudentList };
