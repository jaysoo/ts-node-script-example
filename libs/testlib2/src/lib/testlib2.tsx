import styles from './testlib2.module.css';

/* eslint-disable-next-line */
export interface Testlib2Props {}

export function Testlib2(props: Testlib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Testlib2!</h1>
    </div>
  );
}

export default Testlib2;
