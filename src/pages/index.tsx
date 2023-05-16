import Image from 'next/image';

import { Button, Htag, PText } from '@/components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Текст</Htag>
      <Button
        arrow="down"
        onClick={() => console.log('CLICK')}
        appearance="primary"
        className="customClass"
      >
        Кнопка 1
      </Button>
      <Button appearance="ghost" arrow="right">
        Кнопка 2
      </Button>
      <PText size="l">ddd</PText>
    </>
  );
}
