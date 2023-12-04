import './App.css'
import Button from './components/Button'
import Navbar from './components/navbar'
import CompanyPNG from '../public/pictures/header_img.png'

function App() {

  return (
    <>
      <div className="py-10 px-14 max-w-[1280px] w-full mx-auto box-border">
        <Navbar />
        <div className="flex flex-row mt-20">
          <div className="flex flex-col flex-1">
            <p className='text-[#8C82FC] tracking-widest'>SUXZ MAKE IT EASY</p>
            <h2 className='text-6xl font-bold leading-tight'>Find Your Way Of Success</h2>
            <p className='my-5'>We help you to increase self-confidence and train yourself in a direction and make you more creative in developing a work</p>
            <div className="flex gap-x-8 justify-between">
              <Button className={'bg-[#8C82FC] text-white py-3 px-8'}>Get Started</Button>
              <Button className={'bg-zinc-100 text-gray-400 py-3 px-8'}>Our Services</Button>
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <img src={CompanyPNG} alt="company.png" className='h-[400px] object-cover' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
