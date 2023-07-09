import Image from "next/image";
import Bg from "../public/intensive-cream.webp";
const Card = () => {
  const hadiahGratis = true;
  return (
    <div className="w-[200px] bg-white hover:border-purple-500 hover:translate-y-[-4px] border  rounded-sm group shadow-md shadow-black/10 relative h-80 flex items-start flex-col gap-2">
      <Image src={Bg} loading="lazy" alt="Background Product" width={200} height={160} className="w-full h-[160px]" />
      <div className="absolute top-0 right-0 h-10 before:w-4 before:h-2 before:bg-red-500 w-10 text-sm text-center bg-yellow-500">
        <p className="text-red-500">40%</p>
        <p className="text-white">OFF</p>
      </div>
      <div className="px-2 py-1">
        <h1 className="tracking-wide text-md">REGLOW - Intensive Cream</h1>
        <div className="flex items-center gap-2 text-sm">
          <p className="text-slate-500 relative">
            Rp169.000
            <span className="absolute w-[110%] h-[1px] -right-1 bottom-[10px] bg-black/90"></span>
          </p>
          <p className="text-purple-500">Rp90.000</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs tracking-wide border text-red-400 rounded-sm border-red-400 px-1 py-[2px]">Murah Lebay</button>
          {hadiahGratis && (
            <button type="button" className="py-[2px] px-1 text-xs  tracking-wide bg-purple-500 text-white">
              Diskon 40%
            </button>
          )}
        </div>
        <p className="text-slate-600 absolute bottom-1 tracking-widest text-[15px]">KOTA SEMARANG</p>
      </div>
      <button type="button" name="buttonProduk" aria-label="buttonProdukSerupa" className="opacity-0 absolute -bottom-8 w-full z-10 h-8 bg-purple-500 group-hover:opacity-100 transition duration-200 rounded-b-lg text-center text-white pt-1">
        Produk Serupa
      </button>
    </div>
  );
};

export default Card;
