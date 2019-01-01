import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import MainPage from '../pages/UniversityPage';
import NotFoundPage from '../pages/NotFoundPage';
import OtherPage from '../pages/OtherPage';
import AboutPage from '../pages/AboutPage';
import StudyPage from '../pages/StudyPage';
import FieldOfStudyDetailPage from '../pages/FieldOfStudyDetailPage';
import FacultyInfoPage from '../pages/FacultyInfoPage';
import LibraryPage from '../pages/LibraryPage';
import UniversityInfoPage from '../pages/UniversityInfoPage/UniversityInfoPage';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/other" component={OtherPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/study" component={StudyPage} />
      <Route
        exact
        path="/study/study-field/:fieldName"
        component={FieldOfStudyDetailPage}
      />
      <Route
        exact
        path="/study/faculty/:facultyName"
        component={FacultyInfoPage}
      />
      <Route path="/knihovna" component={LibraryPage} />
      <Route
        path="/univerzita/info-:infoPageName"
        component={UniversityInfoPage}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default Routes;
