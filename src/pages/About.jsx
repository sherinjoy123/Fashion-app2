import React from 'react'
import Title from '../Components/title'
import { assets } from '../assets/assets'
import NewsletterBox from '../Components/NewsletterBox'

function About() {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>

        <Title text1={'ABOUT'}  text2={'US'}/>

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>

        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>

          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic et, ab eum tempore illo debitis quaerat ducimus nostrum inventore ut ea voluptate omnis voluptates dignissimos voluptas, ex repudiandae obcaecati a?</p> 
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium vel totam cumque. Cum voluptate velit tempore porro, architecto assumenda repellat, voluptas numquam itaque animi deleniti exercitationem? Unde quisquam impedit possimus?</p>

          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vero, expedita, laudantium harum accusantium sequi totam commodi omnis ut nesciunt doloribus neque. Quisquam odit nemo inventore voluptatem laboriosam illum repellat.</p>

        </div>

      </div>

      <div className='text-4xl py-4'>

        <Title text1={'WHY'} text2={'US'}/>

      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

          <b>Quality Assurence:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quod, minus incidunt porro quisquam possimus officia assumenda fugiat obcaecati quaerat eum nostrum voluptatum voluptate, consectetur nam inventore amet ipsa rem?</p>

        </div>

 <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

<b>Convenience:</b>
<p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quod, minus incidunt porro quisquam possimus officia assumenda fugiat obcaecati quaerat eum nostrum voluptatum voluptate, consectetur nam inventore amet ipsa rem?</p>

</div>

<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>

<b>Exceptional Customer Service:</b>
<p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quod, minus incidunt porro quisquam possimus officia assumenda fugiat obcaecati quaerat eum nostrum voluptatum voluptate, consectetur nam inventore amet ipsa rem?</p>

</div>

      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About