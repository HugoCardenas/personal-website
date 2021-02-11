import * as React from "react";
import styled from "styled-components";
import avatar from "../images/avatar.png";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { SEO } from "../components/SEO";

type ChildrenProps = {
  children: React.ReactNode;
};

const TwitterIcon = styled(FaTwitter)`
  font-size: 24px;
`;

const LinkedInIcon = styled(FaLinkedin)`
  font-size: 24px;
`;

const Title = ({ children }: ChildrenProps) => (
  <h1 className="text-4xl text-gray-800 font-light">{children}</h1>
);

const P = ({ children }: ChildrenProps) => (
  <p className="leading-normal md:leading-normal text-2xl md:text-xl text-gray-500 font-light">
    {children}
  </p>
);

export default () => (
  <main className="px-6 pt-8 pb-16 md:py-20 md:px-32 bg-gray-50 min-h-screen md:min-h-screen box-border border-t-8 border-blue-600">
    <SEO />
    <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-16 md:flex-row md:items-start">
      <img src={avatar} alt="Avatar" height="132px" width="132px" />
      <div className="space-y-6 max-w-xl">
        <Title>Hugo Cárdenas</Title>
        <P>I am a software developer from Spain, based in Helsinki, Finland.</P>
        <P>
          Currently working as a consultant in{" "}
          <a
            className="font-medium text-gray-600 hover:text-blue-600"
            href="https://newthings.co"
          >
            newthings.co
          </a>
          , helping clients in the health sector and food delivery, building
          some <span className="italic">cool stuff™</span>.
        </P>
        <P>
          I get excited about building beautiful products where I feel aligned
          to the end value provided to the user.
        </P>
        <P>
          I have experience working across the whole web stack, but these days I
          gravitate towards the frontend side and design.
        </P>
        <div className="flex flex-row items-center space-x-6">
          <a
            href="https://twitter.com/_hugocardenas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon className="text-gray-400 hover:text-blue-600" />
          </a>
          <a
            href="https://www.linkedin.com/in/hugocardenas/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="text-gray-400 hover:text-blue-600" />
          </a>
        </div>
      </div>
    </div>
  </main>
);
