function AboutMe() {
  return (
    <div className="about-me">
      <div>
        <img
          className="about-me-image"
          src={require("./images/placeholder_profile.jpg")}
          alt="Tommy Tran"
        />
      </div>
      <div className="about-me-desc">
        <h1 className="highlight">Hi there!</h1>
        <h1 className="highlight">I'm Tommy Tran</h1>
        <p>
          TEST
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
