const Button = ({ bgColor, link, children }) => {
  return (
    <>
      <button
        className='btnComponent'
        style={{ backgroundColor: `${bgColor}` }}
      >
        {children}
      </button>
    </>
  );
};
export default Button;
