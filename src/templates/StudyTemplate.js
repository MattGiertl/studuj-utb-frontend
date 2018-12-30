/** @jsx jsx */
import { Component } from 'react';
import { jsx } from '@emotion/core';
import PageLayoutWrapper from '../atoms/PageLayoutWrapper';
import { UtbIcon } from '../atoms/Icon/Icon';
import Paragraph from '../atoms/Paragraph';
import { NavLink } from 'react-router-dom';
import PageHeader from '../organisms/PageHeader';
import PageFooter from '../organisms/PageFooter';
import UnderlinedHeading from '../molecules/UnderlinedHeading';
import Layout from '../atoms/Layout';
import FacultyMenuWidget from '../organisms/FacultyMenuWidget';
import FieldOfStudy from '../molecules/FieldOfStudy';
import FieldsOfStudyContainer from '../atoms/FieldsOfStudyContainer';

class StudyTemplate extends Component {
  render() {
    const {
      showTechnologyFields,
      showManagementFields,
      showMultimediaFields,
      showHumanitiesFields,
      showInformaticsFields,
      showLogisticsFields,
      toggleTechnologyFields,
      toggleHumanitiesFields,
      toggleManagementFields,
      toggleInformaticsFields,
      toggleLogisticsFields,
      toggleMultimediaFields,
    } = this.props;
    return (
      <PageLayoutWrapper
        header={
          <PageHeader
            left={<UtbIcon />}
            middle={
              <Paragraph fontWeight="bold">Univerzita Tomáše Bati</Paragraph>
            }
            right={
              <NavLink
                css={{
                  margin: 0,
                  pading: 0,
                  marginBottom: '10px',
                  textDecoration: 'none',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '25px',
                  color: 'white',
                }}
                to="about"
              >
                ...
              </NavLink>
            }
          />
        }
        footer={<PageFooter />}
      >
        <Layout css={{ flexDirection: 'column', margin: '0 12px' }}>
          <UnderlinedHeading title="Studijní obory podle fakult" />
          <Layout css={{ flexDirection: 'column', marginBottom: '50px' }}>
            <FacultyMenuWidget
              toggleField={toggleTechnologyFields}
              facultyName="Fakulta technologická"
              facultyShortcut="ft"
            />
            {showTechnologyFields && (
              <FieldsOfStudyContainer>
                <FieldOfStudy
                  facultyShortcut="ft"
                  title="Chemie a technologie materiálů"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  facultyShortcut="ft"
                  title="Chemie a technologie potravin"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  facultyShortcut="ft"
                  title="Procesní inženýrství"
                  additionalInfo="Prezenční, bakalářský"
                />
              </FieldsOfStudyContainer>
            )}

            <FacultyMenuWidget
              toggleField={toggleManagementFields}
              facultyName="Fakulta managementu a ekonomiky"
              facultyShortcut="fame"
            />
            {showManagementFields && (
              <FieldsOfStudyContainer>Management</FieldsOfStudyContainer>
            )}
            <FacultyMenuWidget
              toggleMultimediaFields={toggleMultimediaFields}
              facultyName="Fakulta multimediálních komunikací"
              facultyShortcut="fmk"
            />
            {showMultimediaFields && (
              <FieldsOfStudyContainer>Multimedia</FieldsOfStudyContainer>
            )}
            <FacultyMenuWidget
              toggleField={toggleHumanitiesFields}
              facultyName="Fakulta humanitních studií"
              facultyShortcut="fhs"
            />
            {showHumanitiesFields && (
              <FieldsOfStudyContainer>Humanity</FieldsOfStudyContainer>
            )}
            <FacultyMenuWidget
              toggleField={toggleInformaticsFields}
              facultyName="Fakulta aplikované informatiky"
              facultyShortcut="fai"
            />
            {showInformaticsFields && (
              <FieldsOfStudyContainer>Informatics</FieldsOfStudyContainer>
            )}
            <FacultyMenuWidget
              toggleField={toggleLogisticsFields}
              facultyName="Fakulta logistiky a krizového řešení"
              facultyShortcut="flkr"
            />
            {showLogisticsFields && (
              <FieldsOfStudyContainer>Logistics</FieldsOfStudyContainer>
            )}
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default StudyTemplate;
