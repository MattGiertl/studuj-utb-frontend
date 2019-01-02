import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import MainPage from '../pages/UniversityPage';
import NotFoundPage from '../pages/NotFoundPage';
import AboutPage from '../pages/AboutPage';
import StudyPage from '../pages/StudyPage';
import FieldOfStudyDetailPage from '../pages/FieldOfStudyDetailPage';
import FacultyInfoPage from '../pages/FacultyInfoPage';
import LibraryPage from '../pages/LibraryPage';
import UniversityInfoPage from '../pages/UniversityInfoPage/UniversityInfoPage';
import { Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
});

withRouter(RoutesContainer);

const Routes = props => {
  return (
    <HashRouter>
      <Route
        render={({ location }) => (
          <PoseGroup>
            <RoutesContainer key={location.pathname}>
              <Switch location={location}>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/o-aplikaci" component={AboutPage} />
                <Route exact path="/studium" component={StudyPage} />
                <Route
                  exact
                  path="/studium/obor-:fieldName"
                  component={FieldOfStudyDetailPage}
                />
                <Route
                  exact
                  path="/studium/fakulta-:facultyName"
                  component={FacultyInfoPage}
                />
                <Route path="/knihovna" component={LibraryPage} />
                <Route
                  path="/univerzita/info-:infoPageName"
                  component={UniversityInfoPage}
                />
                <Route component={NotFoundPage} />
              </Switch>
            </RoutesContainer>
          </PoseGroup>
        )}
      />
    </HashRouter>
  );
};

export default Routes;
