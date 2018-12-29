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

class StudyTemplate extends Component {
  render() {
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
              facultyName="Fakulta technologická"
              facultyShortcut="ft"
            />
            <FacultyMenuWidget
              facultyName="Fakulta managementu a ekonomiky"
              facultyShortcut="fame"
            />
            <FacultyMenuWidget
              facultyName="Fakulta multimediálních komunikací"
              facultyShortcut="fmk"
            />
            <FacultyMenuWidget
              facultyName="Fakulta humanitních studií"
              facultyShortcut="fhs"
            />
            <FacultyMenuWidget
              facultyName="Fakulta aplikované informatiky"
              facultyShortcut="fai"
            />
            <FacultyMenuWidget
              facultyName="Fakulta logistiky a krizového řešení"
              facultyShortcut="flkr"
            />
          </Layout>
        </Layout>
      </PageLayoutWrapper>
    );
  }
}

export default StudyTemplate;
