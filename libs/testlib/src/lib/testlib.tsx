import styles from './testlib.module.css';

/* eslint-disable-next-line */
export interface TestlibProps {}

export function Testlib(props: TestlibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Testlib!</h1>
    </div>
  );
}

export default Testlib;
