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
import Github from '/pictures/Github.png'
import Microsoft from '/pictures/Microsoft.png'
import Redis from '/pictures/Redis.png'
import Amazon from '/pictures/Amazon.png'
import Paypal from '/pictures/Paypal.png'
import Linkedin from '/pictures/Linkedin.png'
import Reddit from '/pictures/Reddit.png'
import Medium from '/pictures/Medium.png'
import JasonPNG from '/pictures/Jason.png'
import CassandraKPNG from '/pictures/CassandraK.png'
import PeterPPNG from '/pictures/PeterP.png'
import JeanGPNG from '/pictures/JeanG.png'
import logo from '/pictures/favicon.png'

function App() {

  return (
    <>
      <div className="py-10">
        {/* Navbar */}
        <Container>
          <Navbar logo={logo} />
        </Container>
        {/* Home */}
        <Container>
          <div id='home' className="flex flex-col-reverse gap-y-10 sm:flex-row py-20 sm:pb-0">
            <div className="flex flex-col flex-1">
              <p className='text-[#8C82FC] font-bold tracking-widest'>SUXZ MAKE IT EASY</p>
              <h2 className='text-6xl font-bold leading-tight'>Find Your Way Of Success</h2>
              <p className='my-5'>We help you to increase self-confidence and train yourself in a direction and make you more creative in developing a work</p>
              <div className="flex gap-x-8 sm:justify-between">
                <Button className={'bg-[#8C82FC] text-white py-3 px-8'}>Get Started</Button>
                <Button className={'bg-zinc-100 text-gray-400 py-3 px-8'}>Our Services</Button>
              </div>
            </div>
            <div className="flex flex-1 justify-center items-end">
              <img src={CompanyPNG} alt="company.png" className='h-[400px] object-cover' />
            </div>
          </div>
        </Container>
        {/* Learnings */}
        <div id='learnings' className="bg-gray-100">
          <Container>
            <div className="flex flex-col gap-y-6 py-16">
              <div className="flex">
                <div className="flex flex-col flex-1 gap-y-2">
                  <p className='text-[#8C82FC] font-bold'>LEARNINGS</p>
                  <h3 className='text-4xl text-zinc-800 font-bold leading-tight'>Online Learning Platform International Curriculum</h3>
                  <p>Study and understand the material class is more relaxed without time limit.</p>
                </div>
                <div className="sm:flex-1"></div>
              </div>
              <div className="flex flex-col sm:flex-row gap-x-4 gap-y-10">
                <Card img={CardIMG1} title={'Starter'} p={'Free class access for that start learning code and design'} />
                <Card img={CardIMG2} title={'Premium'} p={'Advanced material from the Starter & learn to build projects'} />
                <Card img={CardIMG3} title={'Superstar'} p={'Materials for experts who have completed the premium package'} />
                <Card img={CardIMG4} title={'Bootcamp'} p={'Informatics science training program with the latest material'} />
              </div>
            </div>
          </Container>
        </div>
        {/* About Us */}
        <Container>
          <div id='about-us' className="flex flex-col sm:flex-row space-x-10 py-20 sm:pb-0">
            <div className="flex flex-1 items-center">
              <img src={AboutIMG} alt="" className='flex items-center' />
            </div>
            <div className="flex-1">
              <div className="flex flex-col space-y-2">
                <p className='text-[#8C82FC] font-bold'>ABOUT US</p>
                <h3 className='text-4xl text-zinc-800 font-extrabold leading-tight'>We Help Improve Your Work Experience</h3>
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
        {/* Media */}
        <div className="bg-gray-100">
          <Container>
            <div className="py-20 sm:max-w-[960px] mx-auto text-center flex flex-col space-y-20">
              <div className="flex flex-col space-y-4">
                <h2 className='text-4xl text-zinc-800 font-extrabold'>Companies That Recruit Our Graduates</h2>
                <p className='text-2xl'>Our graduates have worked in more than 400 companies around the World</p>
              </div>
              <div className="flex flex-col space-y-10 sm:space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-none gap-y-10 lg:grid-cols-4 justify-items-center items-center">
                  <img src={Github} alt="Github.png" className='object-contain' />
                  <img src={Microsoft} alt="Microsoft.png" className='object-contain' />
                  <img src={Redis} alt="Redis.png" className='object-contain' />
                  <img src={Amazon} alt="Amazon.png" className='object-contain' />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-none gap-y-10 lg:grid-cols-4 justify-items-center items-center">
                  <img src={Paypal} alt="Paypal.png" className='object-contain' />
                  <img src={Linkedin} alt="Linkedin.png" className='object-contain' />
                  <img src={Reddit} alt="Reddit.png" className='object-contain' />
                  <img src={Medium} alt="Medium.png" className='object-contain' />
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* Testimonial */}
        <Container>
          <div id='testimonial' className="pb-20">
            <div className="flex flex-col space-y-4 items-center text-center py-16">
              <p className='text-[#8C82FC] font-bold'>TESTIMONIAL</p>
              <h2 className='text-4xl text-zinc-800 font-extrabold'>Our Alumni Say</h2>
              <p className='text-xl'>These are the words of people who have taken our class</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
              <ProfileCard img={JasonPNG} name={'Jason Todd'} title={'Entrepreneur'} />
              <ProfileCard img={CassandraKPNG} name={'Cassandra K'} title={'Web Developer'} />
              <ProfileCard img={PeterPPNG} name={'Peter Parker'} title={'PHP Enthusiast'} />
              <ProfileCard img={JeanGPNG} name={'Jean Gray'} title={'Designer'} />
            </div>
          </div>
        </Container>
        {/* Contact */}
        <div className="bg-[rgba(0,0,0,0.5)] bg-[url('/pictures/banner.png')] bg-cover bg-blend-darken">
          <Container>
            <div className="flex flex-col space-y-4 items-center text-center py-16">
              <h2 className='text-4xl text-white font-extrabold'>So? What Are You Waiting For</h2>
              <p className='text-xl text-white'>It's time to build your career, study in a relaxed and purposeful manner</p>
              <div className="flex items-center py-5">
                <Button className={'bg-[#8C82FC] text-white py-3 px-8'}>Get Started</Button>
                <Button className={'text-white py-3 px-8'}>Contact Us</Button>
              </div>
            </div>
          </Container>
        </div>
        {/* Footer */}
        <Container>
          <div id="footer" className="py-16">
            <div className="flex flex-col sm:flex-row sm:space-x-14 space-y-14 sm:space-y-0">
              <div className="flex flex-col space-y-5 flex-[2_2_0%]">
                <div className="flex gap-x-3 items-center">
                  <img src={logo} className='object-cover w-8' alt="logo.png" />
                  <h3 className='font-bold text-2xl'>Suxz</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga placeat suscipit eum mollitia sapiente hic quisquam totam, ad eligendi repellat?</p>
              </div>
              <div className="flex flex-col flex-1">
                <h5 className='font-extrabold text-xl text-zinc-800 pb-4'>Company</h5>
                <ul className='flex flex-col space-y-3'>
                  <li>Home</li>
                  <li>Blogs</li>
                  <li>Careers</li>
                  <li>Portfolios</li>
                </ul>
              </div>
              <div className="flex flex-col flex-1">
                <h5 className='font-extrabold text-xl text-zinc-800 pb-4'>Links</h5>
                <ul className='flex flex-col space-y-3'>
                  <li>Privacy & Policy</li>
                  <li>Github</li>
                  <li>Supports</li>
                  <li>FAQs</li>
                </ul>
              </div>
              <div className="flex flex-col flex-[2_2_0%]">
                <h5 className='font-extrabold text-xl text-zinc-800 pb-4'>Contact</h5>
                <ul className='flex flex-col space-y-3'>
                  <li>
                    <a href="" className="flex items-center text-[#8C82FC]">
                      <svg class="flex w-5 h-5" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                        <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                      </svg>
                      <span className='ml-2'>(021) 31048184</span>
                    </a>
                  </li>
                  <li>
                    <a href="" className="flex items-center text-[#8C82FC]">
                      <svg class="w-5 h-5" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                      </svg>
                      <span className='ml-2'>irham@suxz.com</span>
                    </a>
                  </li>
                  <li>Jl. Narogong. Perum Cileungsi Elok Blok A No.5. Jakarta Selatan. 12240.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

function Card({ img, title, p }) {
  return (
    <div className="flex flex-col space-y-8 bg-white hover:bg-[#8C82FC] hover:text-white transition-colors rounded-md p-5 flex-1 justify-between">
      <img src={img} alt="" className='sm:w-12 w-32 xl:w-16' />
      <div className="flex flex-col space-y-2">
        <h5 className='text-lg'>{title}</h5>
        <p className='text-sm'>{p}</p>
      </div>
      <Button className={'flex bg-[#44E4C9] text-white text-sm py-2 justify-center'}>See Class</Button>
    </div>
  )
}

function ProfileCard({ img, name, title }) {
  return (
    <div className="relative border border-[#8C82FC] rounded-md p-8 text-center">
      <img src={img} alt="jason.png" className='absolute -top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
      <div className="py-8">
        <h5 className='font-extrabold text-lg'>{name}</h5>
        <p className='text-sm text-gray-300 font-bold'>{title}</p>
      </div>
      <p>“The mentor is cool, how to convey each material is also detailed and easy to understand..”</p>
    </div>
  )
}

export default App
