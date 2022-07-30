interface MessagesErrors {
  message: string,
  code: number,
}

const messagesErrors: MessagesErrors[] = [  
  {
    message: '"name" is required',
    code: 400,
  },
  {
    message: '"name" must be a string',
    code: 422,
  },
  {
    message: '"name" length must be at least 3 characters long',
    code: 422,
  },
  {
    message: '"amount" is required',
    code: 400,
  },
  {
    message: '"amount" must be a string',
    code: 422,
  },
  {
    message: '"amount" length must be at least 3 characters long',
    code: 422,
  },
  {
    message: '"username" is required',
    code: 400,
  },
  {
    message: '"username" must be a string',
    code: 422,
  },
  {
    message: '"username" length must be at least 3 characters long',
    code: 422,
  },
  {
    message: '"classe" is required',
    code: 400,
  },
  {
    message: '"classe" must be a string',
    code: 422,
  },
  {
    message: '"classe" length must be at least 3 characters long',
    code: 422,
  },
  {
    message: '"password" is required',
    code: 400,
  },
  {
    message: '"password" must be a string',
    code: 422,
  },
  {
    message: '"password" length must be at least 8 characters long',
    code: 422,
  },
  {
    message: '"level" is required',
    code: 400,
  },
  {
    message: '"level" must be a number',
    code: 422,
  },
  {
    message: '"level" must be an integer',
    code: 422,
  },
  {
    message: '"level" must be greater than or equal to 1',
    code: 422,
  },
];

export default messagesErrors;
