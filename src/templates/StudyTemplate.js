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
      showHumanitiesFields,
      showInformaticsFields,
      showLogisticsFields,
      showMultimediaFields,
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
                to="o-aplikaci"
              >
                ...
              </NavLink>
            }
          />
        }
        footer={<PageFooter />}
      >
        <Layout
          css={{
            flexDirection: 'column',
            marginBottom: '50px',
            margin: '12px',
          }}
        >
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
                  to="ctp"
                  facultyShortcut="ft"
                  title="Chemie a technologie potravin"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="ctm"
                  facultyShortcut="ft"
                  title="Chemie a technologie materiálů"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="pci"
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
              <FieldsOfStudyContainer>
                <FieldOfStudy
                  to="ekm"
                  facultyShortcut="fame"
                  title="Ekonomika a management"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="ucd"
                  facultyShortcut="fame"
                  title="Účetnictví a daně"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="hps"
                  facultyShortcut="fame"
                  title="Hospodářská politika a správa"
                  additionalInfo="Prezenční, bakalářský"
                />
              </FieldsOfStudyContainer>
            )}

            <FacultyMenuWidget
              toggleField={toggleMultimediaFields}
              facultyName="Fakulta multimediálních komunikací"
              facultyShortcut="fmk"
            />
            {showMultimediaFields && (
              <FieldsOfStudyContainer>
                <FieldOfStudy
                  to="mks"
                  facultyShortcut="fmk"
                  title="Mediální a komunikační studia"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="vyu"
                  facultyShortcut="fmk"
                  title="Výtvarná umění"
                  additionalInfo="Prezenční, bakalářský"
                />
              </FieldsOfStudyContainer>
            )}

            <FacultyMenuWidget
              toggleField={toggleHumanitiesFields}
              facultyName="Fakulta humanitních studií"
              facultyShortcut="fhs"
            />
            {showHumanitiesFields && (
              <FieldsOfStudyContainer>
                <FieldOfStudy
                  to="fll"
                  facultyShortcut="fhs"
                  title="Filologie"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="ose"
                  facultyShortcut="fhs"
                  title="Ošetřování"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="ped"
                  facultyShortcut="fhs"
                  title="Pedagogika"
                  additionalInfo="Prezenční, bakalářský"
                />
              </FieldsOfStudyContainer>
            )}

            <FacultyMenuWidget
              toggleField={toggleInformaticsFields}
              facultyName="Fakulta aplikované informatiky"
              facultyShortcut="fai"
            />
            {showInformaticsFields && (
              <FieldsOfStudyContainer>
                <FieldOfStudy
                  to="swi"
                  facultyShortcut="fai"
                  title="Softwarové inženýrství"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="irt"
                  facultyShortcut="fai"
                  title="Informatické a řídící technologie"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="btsm"
                  facultyShortcut="fai"
                  title="Bezpečnostní technologie, systémy a management"
                  additionalInfo="Prezenční, bakalářský"
                />
              </FieldsOfStudyContainer>
            )}

            <FacultyMenuWidget
              toggleField={toggleLogisticsFields}
              facultyName="Fakulta logistiky a krizového řešení"
              facultyShortcut="flkr"
            />
            {showLogisticsFields && (
              <FieldsOfStudyContainer>
                <FieldOfStudy
                  to="bsp"
                  facultyShortcut="flkr"
                  title="Bezpečnost společnosti"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="ocb"
                  facultyShortcut="flkr"
                  title="Ochrana obyvatelstva"
                  additionalInfo="Prezenční, bakalářský"
                />
                <FieldOfStudy
                  to="pri"
                  facultyShortcut="flkr"
                  title="Procesní inženýrství"
                  additionalInfo="Prezenční, bakalářský"
                />
              </FieldsOfStudyContainer>
            )}
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default StudyTemplate;
