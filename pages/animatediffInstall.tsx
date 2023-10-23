import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import Header from '../components/Header';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <Head>
        <title>Animatediff: The best text to video AI tool available right now.</title>
        <meta
          name="description"
          content="Animatediff has been seamlessly incorporated into the webUI, rendering it incredibly user-friendly."
        />
        <meta
          name="keywords"
          content="AnimateDiff webui, Animatediff insatll"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://animatediffaitool.com" />
      </Head>
      <Header />


      <div className='bg-[rgba(51,51,72,0.1)] w-full flex flex-col items-center lg:pb-0 overflow-auto break-words'>
        <div className='bg-[#f7f8f9] w-full flex flex-col items-center pt-3 px-20'>
        <div className='bg-[#fff] w-full flex flex-col items-center px-10 lg:px-16'>
          {/* <h1 className='text-2xl lg:text-4xl font-bold mt-3'>Animatediff AI Tool: easy text-to-video</h1> */}

          


          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            Animatediff WebUI install
          </h2>
          <div className='w-full'>
            <p className='font-normal text-lg font-sans mt-5'>
              Animatediff has been seamlessly incorporated into the webUI, rendering it incredibly user-friendly.
            </p>
            <a className='text-sky-600' href='https://github.com/continue-revolution/sd-webui-animatediff#motion-module-model-zoo'><strong>github: sd-webui-animatediff</strong></a>
            <div className='justify-center items-center w-full'>
              <figure className='w-9/12 mt-5'>
                <Image
                  src="/animatediff_github.png"
                  alt='animatediff github install'
                  width='1200'
                  height='800'
                  layout="responsive"
                />
              </figure>
            </div>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            Install the animation model
          </h2>
          <div className='w-full'>
            <p className='font-normal text-lg font-sans mt-5 w-full'>
              Next, we need to install the dedicated animation model. The download link is: 
              <a className='text-sky-600' href='https://huggingface.co/guoyww/animatediff/tree/refs%2Fpr%2F3'>https://huggingface.co/guoyww/animatediff/tree/refs%2Fpr%2F3</a>.
              The latest is mm_sd_v15_v2.safetensors, which has a wider range of animation activity and the best effect. We can just download this one.
            </p>
            <p className='font-normal text-lg font-sans mt-5 w-full'>
              The model needs to be placed under this address: &apos;……\sd-webui-aki-v4.2\extensions\sd-webui-animatediff\model&apos;
            </p>
            <div className='justify-center items-center w-full'>
              <figure className='w-9/12 mt-5'>
                <Image
                  src="/animation_model.png"
                  alt='animation model'
                  width='1200'
                  height='800'
                  layout="responsive"
                />
              </figure>
            </div>
            <div className='justify-center items-center w-full mt-5'>
              <figure className='w-9/12 mt-5'>
                <Image
                  src="/place_model.png"
                  alt='model place'
                  width='1200'
                  height='800'
                  layout="responsive"
                />
              </figure>
            </div>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
              How to use
          </h2>
          <div className='w-full mt-5'>
            <p className='font-normal text-lg font-sans mt-5' >Once you&apos;ve successfully installed the plugin, you&apos;ll need to upgrade your WebUI to version 1.6.0 and also update ControlNet to version 1.1.410. And yes, this plugin is fully compatible with ControlNet.</p>
            <p className='font-normal text-lg font-sans mt-5' >After that, you&apos;ll be able to see the plugin in action. Just select the animation model that we downloaded earlier, enable it, and you&apos;re good to go.</p>
            <p className='font-normal text-lg font-sans mt-5' >By default, the frame rate is at 8. For a 4-second animation, you would simply need to adjust the total frame count to 32.</p>
            <p className='font-normal text-lg font-sans mt-5' >Turning on the loop feature allows for an animation that endlessly repeats itself.</p>
            <p className='font-normal text-lg font-sans mt-5' >When it comes to selecting an output format, GIF or mp4 are typically our go-to choices. However, if you&apos;re looking for individual frame output, png might be the perfect fit.</p>
            <p className='font-normal text-lg font-sans mt-5'>Next, we choose the model. Prompt words, parameters, and so on can be set according to the normal idea of generating an image. The default size is 512x512, which should be chosen based on your computer&apos;s configuration.</p>
          </div>

          <a href=" https://shorturl.at/gwWX6" target="_blank" rel="noreferrer noopener">  https://shorturl.at/gwWX6</a>
        </div>
        </div>
      </div>
    </>
  );
}
