import logo from '/pictures/favicon.png'
import Button from './Button'

export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-between">
        <div className="flex">
          <div id="logo" className="flex gap-x-3 items-center">
            <img src={logo} className='object-cover w-8' alt="logo.png" />
            <h3 className='font-bold text-2xl'>Suxz</h3>
          </div>
          <ul className='sm:flex hidden items-center text-sm gap-x-6 text-zinc-600 ml-14'>
            <li><a href="">Home</a></li>
            <li><a href="">Learnings</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Testimonial</a></li>
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