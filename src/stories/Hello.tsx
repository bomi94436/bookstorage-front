import { css } from '@emotion/react';

type HelloProps = {
  /** hi */
  name: string;
  big?: boolean;
  onHello: () => void;
  onBye: () => void;
};

const Hello = ({ name, big, onHello, onBye }: HelloProps) => {
  return (
    <div>
      {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
      <div>
        <button css={style} onClick={onHello}>
          Hello
        </button>
        <button css={style} onClick={onBye}>
          Bye
        </button>
      </div>
    </div>
  );
};

const style = css`
  color: red;
`;

export default Hello;
