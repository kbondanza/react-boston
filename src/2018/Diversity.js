import React from 'react';
import styled from 'styled-components';
import Link from './components/Link';
import Section, { Container } from './components/Layout';

const P = styled.p`
  margin-bottom: 1em;
`;

const Diverity = ({ id }) => (
  <Section title="Diversity" id={id}>
    <Container>
      <P>
        React Boston believes that diversity is an important part of creating a
        welcoming, inclusive, and innovative tech community.
      </P>
      <P>
        For React Boston 2018, we've allocated a set of diversity tickets to be
        offered at no cost to members of underrepresented groups in tech. We
        will also prioritize CFP submissions from speakers who indicate they are
        part of an underrepresented group in tech.
      </P>
      <P>
        We're excited to be working with the{' '}
        <Link openInNewWindow={true} href="http://foundation.travis-ci.org/">
          Travis Foundation
        </Link>{' '}
        to offer several of these through their diversitytickets.org program.
        Applications for diversity tickets are open until Saturday, June 30th,
        2018:{' '}
        <Link
          openInNewWindow={true}
          href="https://diversitytickets.org/events/180"
        >
          Apply Now!
        </Link>
      </P>
      <P>
        We are committed to ensuring that React Boston is accessible for all
        attendees. For questions about accessibility or to request an
        accommodation, please reach out to{' '}
        <Link href="mailto:reactboston2018@gmail.com">
          reactboston2018@gmail.com
        </Link>{' '}
        prior to the conference.
      </P>
    </Container>
  </Section>
);

export default Diverity;
