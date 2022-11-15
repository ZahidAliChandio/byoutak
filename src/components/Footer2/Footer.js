const Footer = () => {
  return (
    <div className="flex justify-center gap-4 sm:gap-6 md:gap-6 lg:gap-8">
      <div>
        <span><i class="fad fa-headphones-alt"></i></span>
        <span>Call us</span>
      </div>
      <div>
        <span><i class="fad fa-comment-alt-dots"></i></span>
        <span>Message us</span>
      </div>
      <div>
        <span><i class="far fa-user"></i></span>
        <span>Schedule a Meeting</span>
      </div>
    </div>
  );
};
export default Footer;
