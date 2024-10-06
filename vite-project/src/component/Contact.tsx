import { CONTACT } from "../constans/index";

const Contact: React.FC = () => {
  return (
    <div className="border-t border-ston-900 pb-20">
      <h2 className="my-10 text-center txt-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter ">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
