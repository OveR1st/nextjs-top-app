import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Button, Htag } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button
        onClick={() => console.log('CLICK')}
        appearance="primary"
        className="customClass"
      >
        Узнать подробнее
      </Button>
      <Button appearance="ghost">Читать отзывы</Button>
    </>
  );
}
