import { directions, style } from './Divider.styles';

export type DividerProps = {
  direction: 'row' | 'column';
};

const Divider = ({ direction }: DividerProps) => {
  return <div css={[style, directions[direction]]} />;
};

Divider.defaultProps = {
  direction: 'row',
};

export default Divider;
