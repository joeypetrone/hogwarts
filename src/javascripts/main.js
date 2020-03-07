import studentData from './helpers/data/studentData';
import houseButtonGroup from './components/houseButtonGroup/houseButtonGroup';
import navbar from './components/navbar/navbar';
import studentList from './components/studentList/studentList';
import '../styles/main.scss';

const init = () => {
  const allStudents = studentData.getStudents();
  navbar.loadNavbar();
  houseButtonGroup.createHouseButtonGroup();
  studentList.createStudentList(allStudents);
};

init();
