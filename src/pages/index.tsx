import styles from './index.less';

const IndexPage = (props: any) => {
  console.log('=process.env', process.env);
  return (
    <div>
      <h1 className={styles.title}>Page index === {APP_ENV}</h1>
      <button
        onClick={() => {
          console.log('===', props);
          props.history.push('/demo');
        }}
      >
        跳转
      </button>
    </div>
  );
};

export default IndexPage;
