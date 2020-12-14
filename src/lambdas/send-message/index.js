const AWS = require('aws-sdk');

export const handler = async ({ input }) => {
  const ses = new AWS.SES({ region: process.env.AWS_REGION });

  await ses
    .sendEmail({
      Destination: { ToAddresses: ['hello@cade.me'] },
      Message: {
        Body: { Text: { Data: input.message } },
        Subject: { Data: input.subject },
      },
      ReplyToAddresses: [`"${input.name}" <${input.email}>`],
      Source: '"Contact Form" <ses@cade.me>',
    })
    .promise();

  return true;
};
