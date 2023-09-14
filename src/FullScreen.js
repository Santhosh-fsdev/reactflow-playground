import Flow from './components/Flow';

const FullScreen = ({ steps })  => {
  return (
    <div style={{ height: '100%', backgroundColor: '#efefef',marginLeft:"-150px" }}>
      <Flow mode="fullscreen" steps={steps} />
    </div>
  );
};

export default FullScreen;