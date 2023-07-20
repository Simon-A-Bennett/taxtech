const ContentBox = ({ source, alt, children, fontSize = '35px' }) => {
  // * reusable standalone contentBox component, using a two column grid for an image on the left and text on the right

  // * image src and alt are passed in via the source and alt props

  // * text for the right side is passed in via the children prop

  // * can be configured with other props to control colors and other styling properties. At the moment only the image source, alt, and the text content is being passed through as props

  //# Grid container

  const ContentBoxContainer = {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    background: 'linear-gradient(45deg, #03a9f4 0%, #dddddd 100%)',
    width: '100%',
    margin: 0,
  };

  // # right grid column content alignment properties

  const rightGridColumn = {
    alignSelf: 'center',
    justifySelf: 'center',
  };

  // # left grid column alignment properties for image

  const imgStyle = {
    objectFit: 'cover',
    maxWidth: '100%',
    height: '100%',
  };

  // # styling for text content for the right grid column (using the children prop the pass the text into the component)

  const childrenContent = {
    color: '#fff',
    animation: 'fadeIn 2s',
    fontSize: `${fontSize}`,
    padding: '5px',
    textAlign: 'center',
  };

  //# Animation for text - fadeIn

  <style>
    @keyframes fadeIn {(5 % { opacity: '0' }, 100 % { opacity: '1' })}
  </style>;

  // # component body

  return (
    <div>
      <div style={ContentBoxContainer}>
        <div>
          <img style={imgStyle} src={source} alt={alt} />
        </div>
        <div style={rightGridColumn}>
          <div style={childrenContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentBox;
