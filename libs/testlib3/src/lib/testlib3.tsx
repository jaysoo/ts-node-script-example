import styles from './testlib3.module.css';

/* eslint-disable-next-line */
export interface Testlib3Props {}

export function Testlib3(props: Testlib3Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Testlib3!</h1>
    </div>
  );
}

export default Testlib3;
