import Button from "./Button";

export default function Navbar({ logo }) {
  return (
    <>
      <nav className="flex flex-row justify-between">
        <div className="flex">
          <div id="logo" className="flex gap-x-3 items-center">
            <img src={logo} className='object-cover w-8' alt="logo.png" />
            <h3 className='font-bold text-2xl'>Suxz</h3>
          </div>
          <ul className='sm:flex hidden items-center text-sm gap-x-6 text-zinc-600 ml-14'>
            <li><a href="#home">Home</a></li>
            <li><a href="#learnings">Learnings</a></li>
            <li><a href="#about-us">About us</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
          </ul>
        </div>
        <div className="flex flex-row justify-end text-sm">
          <Button className={'text-[#8C82FC]'}>Log in</Button>
          <Button className={'bg-[#8C82FC] text-white'}>Sign Up</Button>
        </div>
      </nav>
    </>
  )
}