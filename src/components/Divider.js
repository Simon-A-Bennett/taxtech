const Divider = ({ children }) => {
  const dividerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    width: '100%',
  };

  return <div style={dividerStyle}>{children}</div>;
};
export default Divider;
