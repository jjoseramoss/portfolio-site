 
import pfpImage from '../images/pfp-transparent.png';

const Navbar = () => {
  return (
    <div className="flex w-full justify-between md:justify-around px-8  pt-5">

        {/* Avatar */}
        <div className="">
            <div className="w-15 h-15 rounded-full bg-cyan-300 border-2 border-black">
                <img className="rounded-full" src={pfpImage.src} alt="Profile Avatar" />
            </div>
        </div>


        {/* Navbar Controls: Blog Page(Future Feature), Accessibility Feature  */}
        <div className="flex">
            <ul className="flex gap-4 items-center">
                <li className="text-orange-600 hover:text-orange-5  00 transition hover:underline font-semibold"><a href="/pdfs/jose-resume-2026-swe-internship.pdf">Resume</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar