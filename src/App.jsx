import './App.css'
import Button from './components/Button'
import Navbar from './components/navbar'
import Container from './components/Container'
import CompanyPNG from '/pictures/header_img.png'
import CardIMG1 from '/pictures/card1.png'
import CardIMG2 from '/pictures/card2.png'
import CardIMG3 from '/pictures/card3.png'
import CardIMG4 from '/pictures/card4.png'
import AboutIMG from '/pictures/about_img.png'
import Check from '/pictures/check.png'

function App() {

  return (
    <>
      <div className="py-10">
        <Container>
          <Navbar />
        </Container>
        <Container>
          <div id='home' className="flex flex-col-reverse sm:flex-row mt-20">
            <div className="flex flex-col flex-1">
              <p className='text-[#8C82FC] tracking-widest'>SUXZ MAKE IT EASY</p>
              <h2 className='text-6xl font-bold leading-tight'>Find Your Way Of Success</h2>
              <p className='my-5'>We help you to increase self-confidence and train yourself in a direction and make you more creative in developing a work</p>
              <div className="flex gap-x-8 justify-between">
                <Button className={'bg-[#8C82FC] text-white py-3 px-8'}>Get Started</Button>
                <Button className={'bg-zinc-100 text-gray-400 py-3 px-8'}>Our Services</Button>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-end">
              <img src={CompanyPNG} alt="company.png" className='h-[400px] object-cover' />
            </div>
          </div>
        </Container>
        <div id='learnings' className="bg-gray-100">
          <Container>
            <div className="flex flex-col gap-y-6 py-16">
              <div className="flex">
                <div className="flex flex-col flex-1 gap-y-2">
                  <p className='text-[#8C82FC]'>LEARNINGS</p>
                  <h3 className='text-4xl font-bold leading-tight'>Online Learning Platform International Curriculum</h3>
                  <p>Study and understand the material class is more relaxed without time limit.</p>
                </div>
                <div className="flex-1"></div>
              </div>
              <div className="flex gap-x-4">
                <Card img={CardIMG1} title={'Starter'} p={'Free class access for that start learning code and design'} />
                <Card img={CardIMG2} title={'Premium'} p={'Advanced material from the Starter & learn to build projects'} />
                <Card img={CardIMG3} title={'Superstar'} p={'Materials for experts who have completed the premium package'} />
                <Card img={CardIMG4} title={'Bootcamp'} p={'Informatics science training program with the latest material'} />
              </div>
            </div>
          </Container>
        </div>
        <Container>
          <div id='about-us' className="flex space-x-10 pt-20">
            <div className="flex flex-1 items-center">
              <img src={AboutIMG} alt="" className='flex items-center' />
            </div>
            <div className="flex-1">
              <div className="flex flex-col space-y-2">
                <p className='text-[#8C82FC]'>ABOUT US</p>
                <h3 className='text-4xl font-bold leading-tight'>We Help Improve Your Work Experience</h3>
                <p>We help you to increase self-confidence and train yourself in a direction.</p>
              </div>
              <ul className={`flex flex-col flex-1 space-y-3 py-7`}>
                <li className="flex items-center">
                  <img src={Check} alt="Check Icon" className="mr-4 w-10" />
                  Study and produce creation to get a job
                </li>
                <li className="flex items-center">
                  <img src={Check} alt="Check Icon" className="mr-4 w-10" />
                  Up to date material and created by expert creators
                </li>
                <li className="flex items-center">
                  <img src={Check} alt="Check Icon" className="mr-4 w-10" />
                  Complete classes and projects and get a certificate from us
                </li>
              </ul>

            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

function Card({ img, title, p }) {
  return (
    <div className="flex flex-col h-[280px] bg-white hover:bg-[#8C82FC] hover:text-white transition-colors rounded-md p-5 flex-1 justify-between">
      <img src={img} alt="" className='w-12 xl:w-16' />
      <div className="flex flex-col space-y-2">
        <h5 className='text-lg'>{title}</h5>
        <p className='text-sm'>{p}</p>
      </div>
      <Button className={'flex bg-[#44E4C9] text-white text-sm py-2 justify-center'}>See Class</Button>
    </div>
  )
}

export default App
