import Newsletter from "./Newsletter";

function Footer() {
  return (
    <footer className="bg-deep-black">
      <Newsletter />
      <div className="container w-full mx-auto text-center text-color-grey-500 text-sm pb-10 md:flex justify-center md:max-w-screen-md ">
        <div className="container md:flex gap-5 md:text-left">
          <p>Privacy Policy</p>
          <p>Terms of Conditions</p>
        </div>
        <p className="block">22NIGHTS BV. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
