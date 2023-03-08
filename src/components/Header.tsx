import { FlexBox, Input, Label, Title } from '@ui5/webcomponents-react';
import '../styles/styles.scss';

export default function Header() {

  return (
    <FlexBox
      alignItems="Center"
      direction="Row"
      justifyContent="SpaceBetween"
      wrap="NoWrap"
      className='header'
    >
    
  <Title>
    InfoFlix
  </Title>
  <Input placeholder="Item 4" />
  <Label>
    Item 6
  </Label>
  </FlexBox>
  );

}