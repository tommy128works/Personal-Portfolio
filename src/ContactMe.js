function ContactMe() {
  return (
    <div className="contact-me">
      <span>
        <h1>Contact Me</h1>
        <div>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </div>
      </span>
      <span>
        <img
          className="contact-me-image"
          src={require("./images/placeholder_profile.jpg")}
          alt="Tommy Tran"
        />
      </span>
    </div>
  );
}

export default ContactMe;
