import styles from './page.module.css';

export default function Home() {
  return (
    <div className={`${styles.boxContainer} container flex`}>
      <div className="box">a</div>
      <div className="box">b</div>
      <div className="box sr-only">c</div>
      <div className="box">d</div>
    </div>
  );
}
