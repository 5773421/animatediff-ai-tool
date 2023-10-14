import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Image from 'next/image'

export default function Home() {

  return (
    <>
      <Head>
        <title>Animatediff AI Tool: easy text-to-video</title>
        <meta
          name="description"
          content="AnimateDiff AI Tool is a powerful tool that enables you to effortlessly transform text into animated images, without any specific adjustments. It provides users with infinite creative and exploratory space, allowing you to turn text descriptions into stunning animated scenes."
        />
        <meta
          name="keywords"
          content="AnimateDiff AI Tool, Animatediff"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://animatediffaitool.com" />
      </Head>
      <div className='bg-[rgba(51,51,72,0.1)] w-full flex flex-col items-center lg:pb-0 overflow-auto break-words'>
        {/* <Header /> */}
        <div className='bg-[#f7f8f9] w-full flex flex-col items-center pt-3'>
        <div className='bg-[#fff] w-full flex flex-col items-center px-10 lg:px-16'>
          <h1 className='text-2xl lg:text-4xl font-bold mt-3'>Animatediff AI Tool: easy text-to-video</h1>
          <h5 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            Animatediff AI Tool: easy text-to-video
          </h5>
          <div>
            <p className='font-normal text-lg font-sans mt-5'>
            AnimateDiff, an open-source framework, empowers static images with dynamic expressions by applying tailored text-to-image models for animation creation. It does this without compromising the image quality of the original model, thus generating animated clips that add a new dimension to static imagery.
            </p>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            What is AnimateDiff AI Tool?
          </h2>
          <div>
            <p className='font-normal text-lg font-sans mt-5'>
            AnimateDiff is an innovative tool that effortlessly turns your text into dynamic visuals, no specialized tweaking required. It offers a boundless playground for creativity, letting you breathe life into your text descriptions by transforming them into stunning animations.What sets it apart is its ability to morph real-life movie footage into animated content. Even amidst high-octane action, the resulting video maintains remarkable stability. The project introduces a streamlined solution that brings animated flair to a wide range of personalized text-to-image models at once, bypassing the need for individual model tweaks.
            </p>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            AnimateDiff AI Tool Features
          </h2>
          <div>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Embrace the power of the MotionLoRA Model:</strong>With the latest launch of the MotionLoRA model and its comprehensive library, controlling your camera&apos;s movements is now at your fingertips. Effortlessly create dynamic animation scenes with features like zoom, pan, tilt, and rotation.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Experience the Power of the Motion Module:</strong>This tool comes packed with a variety of Motion modules such as mm_sd_v14.ckpt, mm_sd_v15.ckpt, and mm_sd_v15_v2.ckpt. Not only do they support high-resolution, but they also facilitate batch processing training, all while delivering exceptional image quality.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Setting up your environment is a breeze:</strong>With just a few commands, you can have AnimateDiff installed and configured effortlessly. Inference can be run on a single RTX3090GPU, needing only around 12GB of graphics memory.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Model Collection:</strong>AnimateDiff offers an extensive collection of models, featuring the Motion and MotionLoRA modules, along with a variety of adaptable model parameters for diverse situations. Feel free to select the model that best suits your requirements for inference.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Showcasing Gradio:</strong>To make AnimateDiff more user-friendly, the team has put together a Gradio demo. A few simple commands are all it takes to get the demo up and running on your local machine, providing an interactive experience through an intuitive interface.
            </p>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            Contents of the Latest Animatediff V2 Version Update
          </h2>
          <div className='w-full'>
            <p className='font-normal text-lg font-sans mt-5 text-left'>
              This latest update primarily introduces support for three new features in the plugin: Lora, ControlNet, and Prompt Travel.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Lora, </strong>the team has rolled out updates for 8 sports models in Lora, giving us the freedom to dictate the course of the animation display.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>ControlNet</strong> - we all know it excels at control. But what kind of magic can it conjure when it&apos;s applied in the realm of animation?
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>With Prompt Travel,</strong> we can dictate specific actions or scenes at certain frames using prompt words. This gives us dynamic control over our animation.
            </p>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            How to use AnimateDiff AI Tool for free?
          </h2>
          <div className='w-full'>
            <p className='font-normal text-lg font-sans mt-5 w-full'>
              <strong>Github: </strong><br/>
              <a rel="noreferrer noopener" href="https://github.com/guoyww/AnimateDiff" target="_blank">https://github.com/guoyww/AnimateDiff</a>
            </p>
            <p className='font-normal text-lg font-sans mt-5 overflow-auto w-full'>
              <strong>Paper URL: </strong><br/>
              <a href="https://arxiv.org/abs/2307.04725" target="_blank" rel="noreferrer noopener"> https://arxiv.org/abs/2307.04725</a>
            </p>
            <p className='font-normal text-lg font-sans mt-5 overflow-auto w-full'>
              <strong>Experience Online</strong><br/>
              <strong>(You can also use it below):</strong>
              <a className='break-words' href="https://huggingface.co/spaces/guoyww/AnimateDiff" target="_blank" rel="noreferrer noopener"> https://huggingface.co/spaces/guoyww/AnimateDiff</a>
            </p>
            <p className='mt-3'>Given its widespread use, it might occasionally malfunction. We encourage you to either give it multiple attempts or consider deploying it on your own computer.</p>
          </div>

          <div className='w-full'>
            <iframe
              src="https://guoyww-animatediff.hf.space"
              frameBorder="0"
              className='w-full min-h-[500px]'
            ></iframe>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            Step 1: Accessing Hugging Face
          </h2>
          <div className='w-full mt-5 flex flex-col justify-center items-center'>
            <a className='text-3xl font-bold' href="https://huggingface.co/" target="_blank" rel="noreferrer noopener">click https://huggingface.co/</a>
            <figure className='w-9/12 mt-5'>
              <Image
                src="/animatediff_hug.png"
                alt='animatediff huggingface'
                width='1200'
                height='800'
                layout="responsive"
              />
            </figure>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            Step 2: Search in the Space tag page of Hugging Face.
          </h2>
          <div className='w-full mt-5 flex flex-col justify-center items-center'>
            <p className='font-normal text-lg font-sans mt-3 text-left'>
              Hugging Face is a cloud service where individuals upload their AI projects, and you can access these models for free. We will use its &apos;space&apos; feature to generate video animations.。
            </p>
            <ol className='mt-5 w-full'>
              <li>
                Once on the Hugging Face website, navigate to the <strong>Space</strong> section.
              </li>
              <li>
                In the <strong>Space</strong> section, you can search for various spaces. We’re interested in the <strong>animatediff</strong> space.
              </li>
              <li>
                Search for <strong>animatediff</strong> in the search bar to find the available spaces.
              </li>
            </ol>
            <figure className='w-9/12 mt-5'>
              <Image
                src="/animatediff_search.png"
                alt='animatediff huggingface search'
                width='1200'
                height='800'
                layout="responsive"
              />
            </figure>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            Step 3: Quick Start
          </h2>
          <div className='w-full mt-5 flex flex-col justify-center items-center'>
            <p className='font-normal text-lg font-sans mt-3 text-left'>
              Hugging Face is a cloud service where individuals upload their AI projects, and you can access these models for free. We will use its &apos;space&apos; feature to generate video animations.
              Given its widespread use, it might occasionally malfunction. We encourage you to either give it multiple attempts or consider deploying it on your own computer.
            </p>
            <ol>
              <li>1. Select desired Base DreamBooth Model.</li>
              <li>2. Select Motion Module from mm_sd_v14.ckpt and mm_sd_v15.ckpt. We recommend trying both of them for the best results.</li>
              <li>3. Provide Prompt and Negative Prompt for each model. You are encouraged to refer to each model’s webpage on CivitAI to learn how to write prompts for them. Below are the DreamBooth models in this demo. Click to visit their homepage.</li>
              <li>4. Click Generate, wait for ~1 min, and enjoy.</li>
            </ol>
            <figure className='w-9/12 mt-5'>
              <Image
                src="/animatediff_online_use.png"
                alt='animatediff online use'
                width='1200'
                height='800'
                layout="responsive"
              />
            </figure>
          </div>



          <a href=" https://shorturl.at/gwWX6" target="_blank" rel="noreferrer noopener">  https://shorturl.at/gwWX6</a>
        </div>
        </div>
      </div>
    </>
  );
}
