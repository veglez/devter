import type { NextApiRequest, NextApiResponse } from 'next/types';

const timeline = [
  {
    id: 1,
    username: 'Osc4rdev',
    name: 'Oscar Higareda Rodriguez',
    avatar: 'https://picsum.photos/50',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea, obcaecati voluptates explicabo quos, perspiciatis minima at error in, magnam deleniti voluptatum architecto. Qui est at fugiat vero quis, harum commodi recusandae odio iusto dolorum a veniam delectus. Aspernatur ipsum delectus numquam pariatur sint nemo. ',
  },
  {
    id: 2,
    username: 'B3nj4mindev',
    name: 'Benjamin Jeber Quiroz Teeran',
    avatar: 'https://picsum.photos/50',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea, obcaecati voluptates explicabo quos, perspiciatis minima at error in, magnam deleniti voluptatum architecto. Qui est at fugiat vero quis, harum commodi recusandae odio iusto dolorum a veniam delectus. Aspernatur ipsum delectus numquam pariatur sint nemo. ',
  },
  {
    id: 3,
    username: 'VmrHdev',
    name: 'Victor Miguel Rotundo Hayama',
    avatar: 'https://picsum.photos/50',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea, obcaecati voluptates explicabo quos, perspiciatis minima at error in, magnam deleniti voluptatum architecto. Qui est at fugiat vero quis, harum commodi recusandae odio iusto dolorum a veniam delectus. Aspernatur ipsum delectus numquam pariatur sint nemo. ',
  },
  {
    id: 4,
    username: 'Osc4rdev',
    name: 'Oscar Higareda Rodriguez',
    avatar: 'https://picsum.photos/50',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea, obcaecati voluptates explicabo quos, perspiciatis minima at error in, magnam deleniti voluptatum architecto. Qui est at fugiat vero quis, harum commodi recusandae odio iusto dolorum a veniam delectus. Aspernatur ipsum delectus numquam pariatur sint nemo. ',
  },
  {
    id: 5,
    username: 'B3nj4mindev',
    name: 'Benjamin Jeber Quiroz Teeran',
    avatar: 'https://picsum.photos/50',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea, obcaecati voluptates explicabo quos, perspiciatis minima at error in, magnam deleniti voluptatum architecto. Qui est at fugiat vero quis, harum commodi recusandae odio iusto dolorum a veniam delectus. Aspernatur ipsum delectus numquam pariatur sint nemo. ',
  },
  {
    id: 6,
    username: 'VmrHdev',
    name: 'Victor Miguel Rotundo Hayama',
    avatar: 'https://picsum.photos/50',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea, obcaecati voluptates explicabo quos, perspiciatis minima at error in, magnam deleniti voluptatum architecto. Qui est at fugiat vero quis, harum commodi recusandae odio iusto dolorum a veniam delectus. Aspernatur ipsum delectus numquam pariatur sint nemo. ',
  },
  {
    id: 7,
    username: 'Osc4rdev',
    name: 'Oscar Higareda Rodriguez',
    avatar: 'https://picsum.photos/50',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea, obcaecati voluptates explicabo quos, perspiciatis minima at error in, magnam deleniti voluptatum architecto. Qui est at fugiat vero quis, harum commodi recusandae odio iusto dolorum a veniam delectus. Aspernatur ipsum delectus numquam pariatur sint nemo. ',
  },
  {
    id: 8,
    username: 'B3nj4mindev',
    name: 'Benjamin Jeber Quiroz Teeran',
    avatar: 'https://picsum.photos/50',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea, obcaecati voluptates explicabo quos, perspiciatis minima at error in, magnam deleniti voluptatum architecto. Qui est at fugiat vero quis, harum commodi recusandae odio iusto dolorum a veniam delectus. Aspernatur ipsum delectus numquam pariatur sint nemo. ',
  },
  {
    id: 9,
    username: 'VmrHdev',
    name: 'Victor Miguel Rotundo Hayama',
    avatar: 'https://picsum.photos/50',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ea, obcaecati voluptates explicabo quos, perspiciatis minima at error in, magnam deleniti voluptatum architecto. Qui est at fugiat vero quis, harum commodi recusandae odio iusto dolorum a veniam delectus. Aspernatur ipsum delectus numquam pariatur sint nemo. ',
  },
];

const output = (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(timeline));
};

export default output;
