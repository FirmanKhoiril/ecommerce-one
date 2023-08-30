import { sosialMedias } from "@/utils/constan";
import { Button } from "./";

const Whatsapp = () => {
  return (
    <div className="flex w-full flex-row justify-center gap-2">
      {sosialMedias.map((item) => (
        <Button
          key={item.name}
          type="button"
          className={`flex px-2 sm:px-3.5 sm:py-3 py-2 text-white ${item?.backgroundColor} transition duration-150 items-center drop-shadow-md rounded-lg`}
          name={item.name}
          label={item.label}
          icon={<span className="text-lg md:text-xl">{item.icon}</span>}
        />
      ))}
    </div>
  );
};

export default Whatsapp;
