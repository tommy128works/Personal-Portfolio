function AboutMe() {
  return (
    <div className="center">
      <span>
        <img
          src={require("./images/placeholder_profile.jpg")}
          alt="Tommy Tran"
        />
      </span>
      <span>
        <h1>About Me</h1>
        <div>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </div>
      </span>
    </div>
  );
}

export default AboutMe;
