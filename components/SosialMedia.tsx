import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = () => {
  return (
    <div className="fixed bottom-2 right-4 p-2 hover:bg-green-600 transition duration-150 text-white rounded-full bg-green-500 drop-shadow-md z-10">
      <a href="" target="_blank">
        <BsWhatsapp size={25} />
      </a>
    </div>
  );
};

export default Whatsapp;
