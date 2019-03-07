import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlueBackground from "../images/bg_blue.jpg"
import SintesisLogo from "../images/logos/sintesis_white.svg"
import GithubIcon from "../images/icons/github/active.svg"
import TwitterIcon from "../images/icons/twitter/active.svg"

const WrapperDiv = styled.div`
  position: relative;
  min-height: 100vh;
  min-width: 100%;
  overflow-x: hidden;
  display: flex;
`

const WrapperTechnologies = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: black;
  flex-grow: 27;
`

const WrapperProgrammaDesc = styled.div`
  position: relative;
  border-left: 2.2rem solid ${props => props.theme.yellow};
  background: url(${BlueBackground}) no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  flex-grow: 73;
`

const WrapperLogo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 38rem;
  height: 12rem;
`

const Logo = styled.img`
  max-height: 12rem;
  max-width: 10rem;
  display: inline-block;
  margin-right: 2rem;
`

const Text = styled.h1`
  font-weight: 600;
  color: white;
  display: inline-block;
  height: 13rem;
  vertical-align: middle;
  font-size: 3rem;
`

const iconSize = '2.5rem';

const IconWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 3rem;
  bottom: 3rem;
  width: 6rem;
  height: ${iconSize};
  justify-content: space-between;
`

const Icon = styled.img`
  width: ${iconSize};
  height: ${iconSize};
  filter: saturate(0%) opacity(70%);
  &:hover, &:active {
    filter: saturate(100%) opacity(100%);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <WrapperDiv>
      <WrapperTechnologies>A</WrapperTechnologies>
      <WrapperProgrammaDesc>
        <WrapperLogo>
          <Logo src={SintesisLogo} alt="Logo" />
          <Text>database design</Text>
        </WrapperLogo>
        <IconWrapper>
          <a href="https://github.com/programma-group">
            <Icon src={GithubIcon} alt="Github" />
          </a>
          <a href="https://twitter.com/programmagroup">
            <Icon src={TwitterIcon} alt="Twitter" />
          </a>
        </IconWrapper>
      </WrapperProgrammaDesc>
    </WrapperDiv>
  </Layout>
)

export default IndexPage
