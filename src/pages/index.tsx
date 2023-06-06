import { withLayout } from '../../layout/Layout';
import { Button, Htag, PText, Tag } from '@/components';
import { Rating } from '@/components/Rating/Rating';
import { useState } from 'react';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);
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
      <Tag size="m" color="ghost">
        Tag 1
      </Tag>
      <Tag size="s" color="green">
        Tag 2
      </Tag>
      <Tag href="d" color="grey">
        Tag 3
      </Tag>
      <Tag size="m" color="red">
        Tag 4
      </Tag>
      <Tag size="m" color="primary">
        Tag 4
      </Tag>
      <Rating isEditable rating={rating} setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
