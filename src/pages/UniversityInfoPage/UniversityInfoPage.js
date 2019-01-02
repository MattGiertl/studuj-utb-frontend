import React, { Component } from 'react';
import UniversityInfoTemplate from '../../templates/UniversityInfoTemplate';
import {
  StudyOfferInfo,
  EnvironmentInfo,
  TravelAbroadInfo,
  InternshipInfo,
  JobCentreInfo,
  FunAndSportInfo,
  AcademicCounselInfo,
  StudentProjectsInfo,
} from './UniversityInfo';

class UniversityInfoPage extends Component {
  state = {
    pageName: this.props.match.params.infoPageName,
    info: <h1>Info not provided</h1>,
  };

  componentWillMount() {
    const { pageName } = this.state;

    switch (pageName) {
      case 'nabidka-studia':
        this.setState({ info: <StudyOfferInfo /> });
        break;
      case 'atraktivni-prostredi':
        this.setState({ info: <EnvironmentInfo /> });
        break;
      case 'vyjezdy-do-zahranici':
        this.setState({ info: <TravelAbroadInfo /> });
        break;
      case 'praxe-ve-firmach':
        this.setState({ info: <InternshipInfo /> });
        break;
      case 'job-centrum':
        this.setState({ info: <JobCentreInfo /> });
        break;
      case 'akademicka-poradna':
        this.setState({ info: <AcademicCounselInfo /> });
        break;
      case 'studentske-projekty':
        this.setState({ info: <StudentProjectsInfo /> });
        break;
      case 'zabava-a-sport':
        this.setState({ info: <FunAndSportInfo /> });
        break;
      default:
        break;
    }
  }

  render() {
    const { info } = this.state;
    return <UniversityInfoTemplate info={info} />;
  }
}

export default UniversityInfoPage;
