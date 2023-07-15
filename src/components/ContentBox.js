const ContentBox = ({ source, alt, children }) => {
  const ContentBoxContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    marginTop: '50px',
  };

  const box = {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '70%',
  };

  const left = {
    width: '50%',
    backgroundColor: 'black',
  };

  const imgStyle = {
    objectFit: 'scale-down',
    maxWidth: '100%',
    height: '100%',
  };

  const right = {
    width: '50%',
    height: '100%',
    backgroundColor: 'black',
    marginLeft: '10px',
    color: '#fff',
  };

  const childrenContent = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
  };

  return (
    <div>
      <div style={ContentBoxContainer}>
        <div style={box}>
          <div style={left}>
            <div>
              <img style={imgStyle} src={source} alt={alt} />
            </div>
          </div>
          <div style={right}>
            <div style={childrenContent}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentBox;
