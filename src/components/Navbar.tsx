 
const Navbar = () => {
  return (
    <div className="flex w-full justify-between md:justify-around px-8  pt-5">

        {/* Avatar */}
        <div className="">
            <div className="w-15 h-15 rounded-full bg-cyan-300 border-2 border-black">
                <img className="rounded-full" src="/src/images/pfp-transparent.png" alt="Profile Avatar" />
            </div>
        </div>




        {/* Navbar Controls: Blog Page(Future Feature), Accessibility Feature  */}
        <div className="flex">
            <ul className="flex gap-4 items-center">
                <li>Blog</li>
                <li>Resume</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar