

const About = () => {

  const handleContact = (e) => {
    e.preventDefault();
    alert("Your message successfully send ✅");
  };

  return (
    <div className="about-page">
      <div className="about">

        <h2 style={{textDecoration: 'underline'}}>About</h2>
        <p><b>I am Mohanapriyan developer of this website</b></p>
        <p>Welcome to Mews, your trusted source for timely and reliable news. Built with modern technologies like React.js and Bootstrap, and powered by robust APIs, Mews delivers an engaging and seamless experience to keep you informed on the stories that matter most.</p>
        <p>Our mission is to provide accurate, up-to-date news while ensuring an intuitive user experience. With a clean design and lightning-fast updates, Mews brings you the latest headlines, insights, and perspectives from around the world—all at your fingertips.</p>
        <p>At Mews, we believe in transparency, reliability, and the power of information to connect communities. Explore our platform and stay informed, one story at a time.</p>
        <p>Thank you for choosing Mews as your news destination.</p>
      </div>

      {/* contact */}

      <div className="contact">
        <h2 style={{textDecoration: 'underline'}}>Contact Us</h2>
        <form onSubmit={handleContact}>
          <label>Name</label>
          <input type="text" required />
          <label>Email</label>
          <input type="email" required />
          <label>Message</label>
          <textarea required></textarea>
          <div className="btn">
            <button className="contact-btn" type="submit">
              send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default About