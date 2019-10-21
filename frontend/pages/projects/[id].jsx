import React from 'react';
import fetch from 'isomorphic-unfetch';
import absoluteUrl from 'next-absolute-url';

import ReactMarkdown from 'react-markdown';
import RemarkBreaks from 'remark-breaks';
import RemarkEmoji from 'remark-emoji';
import RemarkBehead from 'remark-behead';

import GlobalStyles from '../../styles/global';
import Layout from '../../components/Layout';
import HeroHeader from '../../components/HeroHeader';
import ProjectHeroImage from '../../components/ProjectHeroImage';
import Copyright from '../../components/Copyright';

import { List, ListItem } from '../../components/List';
import Link from '../../components/Link';
import Image from '../../components/Image';
import Loading from '../../components/Loading';

import {
  Text, H1, H2, H3, Paragraph,
} from '../../components/Typography';

import redirect from '../../utils/redirect';
import { projectPropTypes } from '../../utils/proptypes/project';

const ProjectById = ({ project }) => (
  <>
    <GlobalStyles />
    <Loading>
      <HeroHeader />
      <Layout>
        <ProjectHeroImage src={project.mainImage} />
        <ReactMarkdown
          source={project.readme}
          plugins={[
            RemarkBreaks,
            RemarkEmoji,
            [RemarkBehead, { depth: 1 }],
          ]}
          linkTarget="_blank"
          renderers={{
            paragraph: props => <Paragraph muted {...props} />,
            strong: Text,
            image: Image,
            list: List,
            listItem: ListItem,
            link: Link,
            heading: ({ level, ...props }) => {
              switch (level) {
                case 1: {
                  return <H1 {...props} />;
                }
                case 2: {
                  return <H2 {...props} />;
                }
                case 3: {
                  return <H3 {...props} />;
                }
                default: {
                  return <Text {...props} />;
                }
              }
            },
          }}
        />
      </Layout>
      <Copyright />
    </Loading>
  </>
);

ProjectById.getInitialProps = async ({ res, req, query }) => {
  const projectId = query.id;
  if (!projectId) {
    return redirect(res, '/');
  }

  const { origin } = absoluteUrl(req);
  const apiURL = `${origin}/api/projects/${projectId}`;

  const { project } = await (await fetch(apiURL)).json();

  if (project === undefined) {
    return redirect(res, '/');
  }

  return {
    project,
  };
};

ProjectById.propTypes = {
  project: projectPropTypes.isRequired,
};

export default ProjectById;