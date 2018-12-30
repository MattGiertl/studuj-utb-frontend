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

  toggleManagementFields = () => {
    const { showManagementFields } = this.state;
    this.setState({ showManagementFields: !showManagementFields });
  };

  toggleMultimediaFields = () => {
    const { showMultimediaFields } = this.state;
    this.setState({ showMultimediaFields: !showMultimediaFields });
  };

  toggleHumanitiesFields = () => {
    const { showHumanitiesFields } = this.state;
    this.setState({ showHumanitiesFields: !showHumanitiesFields });
  };

  toggleInformaticsFields = () => {
    const { showInformaticsFields } = this.state;
    this.setState({ showInformaticsFields: !showInformaticsFields });
  };

  toggleLogisticsFields = () => {
    const { showLogisticsFields } = this.state;
    this.setState({ showLogisticsFields: !showLogisticsFields });
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
        toggleHumanitiesFields={this.toggleHumanitiesFields}
        toggleInformaticsFields={this.toggleInformaticsFields}
        toggleLogisticsFields={this.toggleLogisticsFields}
        toggleManagementFields={this.toggleManagementFields}
        toggleMultimediaFields={this.toggleMultimediaFields}
      />
    );
  }
}

export default StudyPage;
