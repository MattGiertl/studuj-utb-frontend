import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import MainPage from '../pages/UniversityPage';
import NotFoundPage from '../pages/NotFoundPage';
import OtherPage from '../pages/OtherPage';
import StudyOfferPage from '../pages/StudyOfferPage';
import EnvironmentInfoPage from '../pages/EnvironmentInfoPage';
import ErasmusInfoPage from '../pages/ErasmusInfoPage';
import InternshipInfoPage from '../pages/InternshipInfoPage';
import JobCentrumInfoTemplate from '../templates/JobCentrumInfoTemplate';
import AcademicCounselTemplate from '../templates/AcademicCounselTemplate';
import StudentProjectsInfoPage from '../pages/StudentProjectsInfoPage';
import SportInfoPage from '../pages/SportInfoPage';
import AboutPage from '../pages/AboutPage';
import StudyPage from '../pages/StudyPage';
import FieldOfStudyDetailPage from '../pages/FieldOfStudyDetailPage';
import FacultyInfoPage from '../pages/FacultyInfoPage';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/other" component={OtherPage} />
      <Route exact path="/nabidka-studia" component={StudyOfferPage} />
      <Route
        exact
        path="/atraktivni-prostredi"
        component={EnvironmentInfoPage}
      />
      <Route exact path="/vyjezdy-do-zahranici" component={ErasmusInfoPage} />
      <Route exact path="/praxe-ve-firmach" component={InternshipInfoPage} />
      <Route exact path="/job-centrum" component={JobCentrumInfoTemplate} />
      <Route
        exact
        path="/akademicka-poradna"
        component={AcademicCounselTemplate}
      />
      <Route
        exact
        path="/studentske-projekty"
        component={StudentProjectsInfoPage}
      />
      <Route exact path="/zabava-a-sport" component={SportInfoPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/study" component={StudyPage} />
      <Route
        exact
        path="/study/study-field/:fieldName"
        component={FieldOfStudyDetailPage}
      />
      <Route exact path="/study/faculty/:facultyName" component={FacultyInfoPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default Routes;
