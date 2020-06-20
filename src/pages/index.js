import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { GitHub, Instagram, Linkedin, Twitter } from 'react-feather';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import breakpoints from '../utilities/breakpoints';
import padding from '../utilities/padding';
import { rhythm } from '../utilities/typography';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  max-width: ${breakpoints.lg};
  margin: 0 auto;
  padding: ${padding.xs};

  @media (min-width: ${breakpoints.md}) {
    justify-content: center;
    align-items: center;
  }
`;

const Content = styled.div`
  margin-bottom: ${padding.xs};

  @media (min-width: ${breakpoints.md}) {
    margin-bottom: 0;
    text-align: center;
  }

  @media (min-width: ${breakpoints.lg}) {
    display: flex;
    align-items: center;
    text-align: left;
  }
`;

const Selfie = styled(Img)`
  flex-shrink: 0;
  margin-bottom: ${padding.xxs};
  border-radius: 10px;
  box-shadow: rgba(14, 14, 33, 0.1) 0px 22px 44px 0px;

  @media (min-width: ${breakpoints.md}) {
    border-radius: 50%;
  }

  @media (min-width: ${breakpoints.lg}) {
    margin-right: ${padding.sm};
    margin-bottom: 0;
  }
`;

const BioStyled = styled.p`
  margin-bottom: ${padding.xxs};

  a {
    position: relative;

    &::after {
      content: ' ';
      position: absolute;
      bottom: 0.3em;
      left: 0;
      width: 100%;
      height: 1px;
      border-radius: 1px;
      background-color: ${(p) => p.theme.light.textBodyPrimary};
    }
  }
`;

const BioGlobal = createGlobalStyle`
  body.dark .${BioStyled.styledComponentId} {
    a {
      &::after {
        background-color: ${(p) => p.theme.dark.textBodyPrimary};
      }
    }
  }
`;

const Bio = (props) => (
  <>
    <BioGlobal />
    <BioStyled {...props} />
  </>
);

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${padding.xs};

  @media (min-width: ${breakpoints.md}) {
    justify-content: center;
    padding-bottom: 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    justify-content: left;
  }
`;

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  padding: ${padding.xxxs} 0;
  margin-right: ${padding.xs};
  color: ${(p) => p.theme.light.accentSecondary};
  font-size: ${rhythm(0.41)};
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.14em;

  &:hover {
    color: ${(p) => p.theme.light.textBodyPrimary};
  }

  span {
    margin-left: ${padding.xxxs};
  }

  @media (min-width: ${breakpoints.md}) {
    margin: 0 ${padding.xxs};
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 0;
    margin: 0 ${padding.sm} 0 0;
  }
`;

const LinkGlobal = createGlobalStyle`
  body.dark .${LinkStyled.styledComponentId} {
    color: ${(p) => p.theme.dark.accentSecondary};

    &:hover {
      color: ${(p) => p.theme.dark.textBodyPrimary};
    }
  }
`;

const Link = (props) => (
  <>
    <LinkGlobal />
    <LinkStyled {...props} />
  </>
);

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Cade Scroggins — Software Engineer" />
    <Wrapper>
      <Content>
        <Selfie alt="Cade Scroggins" fixed={data.file.childImageSharp.fixed} />
        <div>
          <Bio>
            Hey, I&rsquo;m <b>Cade Scroggins</b>. You can find me on the
            internet below.
          </Bio>
          <List>
            <li>
              <Link href="https://github.com/cadejscroggins">
                <GitHub width={20} />
                <span>GitHub</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/cadejscroggins">
                <Linkedin width={20} />
                <span>LinkedIn</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/cadejscroggins">
                <Instagram width={20} />
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/cadejscroggins">
                <Twitter width={20} />
                <span>Twitter</span>
              </Link>
            </li>
          </List>
        </div>
      </Content>
    </Wrapper>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    file: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fixed: PropTypes.shape({}),
      }),
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    file(relativePath: { eq: "selfie.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;

export default IndexPage;
