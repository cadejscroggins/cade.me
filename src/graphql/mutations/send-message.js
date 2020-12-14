import { gql } from '@apollo/client';

const SEND_MESSAGE = gql`
  mutation SendMessage($input: SendMessageInput!) {
    sendMessage(input: $input)
  }
`;

export default SEND_MESSAGE;
