import React from 'react';
import { OrderedList, ListItem, UnorderedList, Box, Heading, Divider, Square, Link, Container } from '@chakra-ui/core';

import { NUMBER_OF_BLOCKS_TO_WIN, CONTRIBUTION_AMOUNT_STRING } from '../../constants';

const getLink = (name: string, link: string) => {
  return <Link href={link}>{name}</Link>;
};

const beaconLink: JSX.Element = getLink('Beacon', 'https://www.walletbeacon.io/');
const taquitoLink: JSX.Element = getLink('Taquito', 'https://tezostaquito.io/');
const buttonRedditLink: JSX.Element = getLink('Reddit "The Button"', 'https://www.reddit.com/r/thebutton/');

const HowTo: React.FC = () => {
  const elements = [
    {
      title: 'How does it work?',
      description: (
        <>
          The TZButton experiment is controlled by a smart contract deployed on the Tezos blockchain. Whenever anyone
          presses the button three things will happen:
          <OrderedList>
            <ListItem>You will add {CONTRIBUTION_AMOUNT_STRING()} to the smart contract’s balance</ListItem>
            <ListItem>The address of the sender will become the leader</ListItem>
            <ListItem>A countdown of {NUMBER_OF_BLOCKS_TO_WIN} minutes is reset and started</ListItem>
          </OrderedList>
          The address that is set after the countdown expired will be eligible to withdraw the total balance on the
          smart contract. Example:
          <OrderedList>
            <ListItem>
              Alice presses the button, {CONTRIBUTION_AMOUNT_STRING()} are now on the smart contract, the countdown of{' '}
              {NUMBER_OF_BLOCKS_TO_WIN} minutes starts.
            </ListItem>
            <ListItem>
              After 200 minutes Bob presses the button, {CONTRIBUTION_AMOUNT_STRING(2)} are now on the smart contract,
              the countdown resets to {NUMBER_OF_BLOCKS_TO_WIN} minutes and starts.
            </ListItem>
            <ListItem>
              After 5 minutes Charlie presses the button, {CONTRIBUTION_AMOUNT_STRING(3)} are now on the smart contract,
              the countdown resets to {NUMBER_OF_BLOCKS_TO_WIN} minutes and starts.
            </ListItem>
            <ListItem>No one presses the button for more than {NUMBER_OF_BLOCKS_TO_WIN} minutes. </ListItem>
            <ListItem>
              Charlie can now withdraw {CONTRIBUTION_AMOUNT_STRING(3)}, because he was the last leader and his countdown
              has expired.
            </ListItem>
          </OrderedList>
        </>
      ),
    },
    {
      title: 'Why TzButton?',
      description: (
        <>
          The experiment was inspired by “the Button” (an experiment conducted with Reddit users {buttonRedditLink}).
          Besides the fact that the behavior of the participating users will be automatically recorded on the blockchain
          and analyzed + published on this site, there are also other reasons why this experiment is interesting:
          <UnorderedList>
            <ListItem>
              It showcases how easy it is for dApps to interact securely with the Tezos blockchain using the existing
              libraries in the ecosystem (like {beaconLink} and {taquitoLink})
            </ListItem>
            <ListItem>
              It sets an incentive for security engineers to try to break and exploit the smart contract. This could
              mean two things:
              <OrderedList>
                <ListItem>
                  The contract and tooling used is secure and can be used as a reference for future applications.
                </ListItem>
                <ListItem>
                  A breach would be transparent and recorded on the blockchain, meaning the entire community would be
                  able to learn from it.
                </ListItem>
              </OrderedList>
            </ListItem>
            <ListItem>
              It provides to the community an open source boilerplate/project to create dApps on the Tezos Blockchain.
            </ListItem>
          </UnorderedList>
        </>
      ),
    },
  ];
  return (
    <Box bg="gray.100" py={16}>
      {elements.map((el, index) => (
        <span key={index}>
          {index !== 0 ? <Divider my={16} /> : ''}
          <Container>
            <Heading mb={4}>{el.title}</Heading>
            {el.description}
          </Container>
        </span>
      ))}
    </Box>
  );
};

export default HowTo;