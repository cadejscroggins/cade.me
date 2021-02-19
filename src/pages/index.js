import * as C from '@chakra-ui/react';
import React from 'react';
import { NextSeo } from 'next-seo';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import SEND_MESSAGE from '../graphql/mutations/send-message';

const IndexPage = () => {
  const form = useForm();
  const [sendMessage] = useMutation(SEND_MESSAGE);

  return (
    <>
      <NextSeo />
      <C.Box
        as="form"
        noValidate
        onSubmit={form.handleSubmit(async (input) => {
          try {
            await sendMessage({ variables: { input } });
          } catch (e) {
            // oh well
          }
        })}
      >
        <C.FormControl isInvalid={form.errors.name} name="name">
          <C.Input
            ref={form.register({ required: 'Required' })}
            disabled={form.formState.isSubmitSuccessful}
            id="name"
            name="name"
            placeholder="Name"
          />
        </C.FormControl>
        <C.FormControl isInvalid={form.errors.email} name="email">
          <C.Input
            ref={form.register({
              pattern: {
                message: 'Invalid email',
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              },
              required: 'Required',
            })}
            disabled={form.formState.isSubmitSuccessful}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />
        </C.FormControl>
        <C.FormControl isInvalid={form.errors.subject} name="subject">
          <C.Input
            ref={form.register({ required: 'Required' })}
            disabled={form.formState.isSubmitSuccessful}
            id="subject"
            name="subject"
            placeholder="Subject"
          />
        </C.FormControl>
        <C.FormControl isInvalid={form.errors.message} name="message">
          <C.Textarea
            ref={form.register({ required: 'Required' })}
            disabled={form.formState.isSubmitSuccessful}
            id="message"
            name="message"
            placeholder="Message"
            resize="none"
          />
        </C.FormControl>
        <C.Button
          disabled={form.formState.isSubmitSuccessful}
          float="right"
          isLoading={form.formState.isSubmitting}
          loadingText="Sending"
          onClick={() => form.clearErrors()}
          type="submit"
        >
          {form.formState.isSubmitSuccessful ? 'Sent!' : 'Send'}
        </C.Button>
      </C.Box>
    </>
  );
};

export default IndexPage;
