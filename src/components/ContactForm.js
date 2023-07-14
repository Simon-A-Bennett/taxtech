const ContactForm = () => {
  const submitContactFormHandler = (e) => {
    e.preventDefault(e);
  };

  return (
    <>
      <div className='contact-form-container'>
        <form onSubmit={submitContactFormHandler}>
          <h2> Get in touch</h2>
          <label htmlFor='name' />
          <input placeholder='Name' id='name' type='text' />
          <label htmlFor='email' />
          <input placeholder='Email' id='email' type='email' />
          <label htmlFor='number' />
          <input placeholder='Contact number' id='number' type='number' />
          <label htmlFor='message' />
          <textarea placeholder='How can we help you today?' />
          <button className='contact-btn'>Send</button>
        </form>
      </div>
    </>
  );
};
export default ContactForm;
