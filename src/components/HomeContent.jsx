import video1 from '../assets/video1.mp4'
import video2 from '../assets/video1.mp4'

const HomeContent = () => {
  return (
    <div>
      <div className='flex flex-col items-center mt-6 lg:mt-20 '>
          <h1 className='text-3xl sm:text-4xl lg:text-6xl text-center tracking-tighter'>VirtualR hepls to build projects <span className='bg-gradient-to-r bg-orange-500 from-red-800 text-transparent bg-clip-text'>for developers</span></h1>
      </div>

      <div className=' mt-10 lg:ml-20 text-lg text-gray-400 text-center max-w-4xl'>
      <p>A technology that immerses users in a computer-generated 3D environment, offering interactive and lifelike experiences. It is widely used in gaming, education, healthcare, and training simulations. VR systems typically involve headsets, motion controllers, and sensors to track movements. This technology enables users to explore virtual worlds and perform tasks in ways that feel real and engaging.</p>
      </div>

      <div className=' flex justify-center m-4 space-x-12'>
        <a href='#' className='rounded-md bg-gradient-to-l bg-orange-400 from-orange-800 p-3 text-nowrap'> start Free </a>
        <a href='#' className='rounded-md bg-gradient-to-l bg-orange-400 from-orange-800 p-3'> Documentation </a>
      </div>

      <div className='flex items-center justify-center space-x-10 m-6'>
        <video autoPlay muted loop className='rounded-lg w-1/2 border border-orange-700'>
        <source src={video1} type='video/mp4' />
        </video>
        <video autoPlay muted loop className='rounded-lg w-1/2 border border-orange-900'>
        <source src={video2} type='video/mp4' />
        </video>
      </div>

    </div>
  )
}

export default HomeContent;
