import React, { Component } from 'react';
import StudyTemplate from '../templates/StudyTemplate';

class StudyPage extends Component {
  state = {
    showTechnologyFields: false,
    showManagementFields: false,
    showMultimediaFields: false,
    showHumanitiesFields: false,
    showInformaticsFields: false,
    showLogisticsFields: false,
  };

  toggleTechnologyFields = () => {
    const { showTechnologyFields } = this.state;
    this.setState({ showTechnologyFields: !showTechnologyFields });
  };

  render() {
    const {
      showTechnologyFields,
      showManagementFields,
      showMultimediaFields,
      showInformaticsFields,
      showLogisticsFields,
    } = this.state;
    return (
      <StudyTemplate
        showTechnologyFields={showTechnologyFields}
        showManagementFields={showManagementFields}
        showMultimediaFields={showMultimediaFields}
        showInformaticsFields={showInformaticsFields}
        showLogisticsFields={showLogisticsFields}
        toggleTechnologyFields={this.toggleTechnologyFields}
      />
    );
  }
}

export default StudyPage;
