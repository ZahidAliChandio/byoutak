const Contact = (props) => {
  return (
    <div className={`${props.className} grid grid-cols-3`}>
      <div className="flex gap-2 px-8">
        <i class="fa-sharp fa-solid fa-video"></i>
        <span>Zoom</span>
      </div>

      <a href="tel:03482146022" className="flex gap-2 px-8">
        <span>
          <i className="fas fa-headphones-alt text-xl text-gray-400"></i>
        </span>
        <span className="font-semibold text-white text-sm sm:text-base">
          Call
        </span>
      </a>

      <a
        href="whatsapp://send?text=Lets chat!&phone=+923163366566"
        className="flex gap-2 px-8"
      >
        <i className="fas fa-comment-dots text-xl text-gray-400"></i>
        <span className="font-semibold text-white text-sm sm:text-base">
          Message Us
        </span>
      </a>
    </div>
  );
};
export default Contact;
