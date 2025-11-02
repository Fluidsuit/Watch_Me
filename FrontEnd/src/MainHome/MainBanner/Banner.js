import poster from "../../Images/Icon/poster.jpg";
import title from "../../Images/Icon/title.png";
import play from "../../Images/Icon/play.png";
import { MdInfoOutline } from "react-icons/md";

function Banner() {
  return (
    <div className="relative w-full text-white">
      
      <img
        src={poster}
        alt="poster"
        className="w-full h-[60vh] sm:h-[70vh] md:h-[100vh] object-cover 
        [mask-image:linear-gradient(to_right,transparent,black_75%)] 
        [-webkit-mask-image:linear-gradient(to_right,transparent,black_75%)]"
      />

      
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

      
      <div className="absolute bottom-0 w-full px-[6%] pb-10 sm:pb-16 md:pb-20">
       
        <img
          src={title}
          alt="title"
          className="w-[70%] sm:w-[60%] md:w-[40%] max-w-[420px] mb-4 sm:mb-6"
        />

       
        <p className="max-w-[700px] text-sm sm:text-base md:text-lg leading-snug text-gray-200 mb-5">
          The Protector is an action-packed drama that follows the journey of a
          young man discovering his destiny as a mystical guardian, tasked with
          saving his city from dark forces.
        </p>

        
        <div className="flex flex-wrap gap-3 sm:gap-5 mb-6">
          <button className="flex items-center gap-2 px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-md cursor-pointer border-0 outline-0 bg-white text-black hover:bg-gray-300 transition-all">
            <img src={play} alt="play" className="w-4 h-4 sm:w-5 sm:h-5" />
            Play
          </button>

          <button className="flex items-center gap-2 px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold rounded-md cursor-pointer border-0 outline-0 bg-[#595959b3] text-[#ddd8d8] hover:bg-white/75 hover:text-black transition-all">
            <MdInfoOutline size={20} className="sm:size-22" />
            Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
