const Testimonials = ({ testimonial }) => {
  return (
    <>
      <div className='testimonial'>
        <p>
          <em>"{testimonial.text}"</em>
        </p>
      </div>
    </>
  );
};
export default Testimonials;
