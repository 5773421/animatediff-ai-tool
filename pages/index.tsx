import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';

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
      <div className='flex flex-col min-h-screen'>
        {/* <Header /> */}
        <div className='bg-[#f7f8f9] grow flex flex-col items-center pt-3'>
        <div className='bg-[#fff] grow flex flex-col items-center px-16'>
          <h1 className='text-4xl font-bold mt-3'>Animatediff AI Tool: easy text-to-video</h1>
          <h5 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            Animatediff AI Tool: easy text-to-video
          </h5>
          <div>
            <p className='font-normal text-base font-sans'>
              The latest open-source framework, AnimateDiff, can extend any customized text-to-image model to the domain of animation generation. Moreover, it can produce corresponding animation clips while maintaining the image quality of the original customized model.
            </p>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            What is AnimateDiff AI Tool?
          </h2>
          <div>
            <p className='font-normal text-lg font-sans'>
              AnimateDiff AI Tool is a powerful tool that enables you to effortlessly transform text into animated images, without any specific adjustments. It provides users with infinite creative and exploratory space, allowing you to turn text descriptions into stunning animated scenes.
            </p>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            AnimateDiff AI Tool Features
          </h2>
          <div>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Support for MotionLoRA Model</strong>: The newly released MotionLoRA model and its model library offer you the ability to control camera motion. You can easily implement camera actions such as zooming, panning, tilting, and rotating to create vibrant animation scenes.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Powerful Motion Modules:</strong> This tool provides multiple Motion modules, including mm_sd_v14.ckpt, mm_sd_v15.ckpt, and mm_sd_v15_v2.ckpt. They support high-resolution and batch training, delivering excellent image quality.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Easy Environment Setup:</strong> Installing and configuring AnimateDiff is very straightforward, with just a few commands required for easy startup. You can perform inference on a single RTX3090GPU, requiring only about 12GB of VRAM.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Model Library:</strong> AnimateDiff offers a rich model library, including Motion modules and MotionLoRA modules, as well as a variety of model parameters suitable for different scenarios. You can choose the appropriate model for inference based on your needs.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Gradio Demo:</strong> To make AnimateDiff easier for users to use, the team has also developed a Gradio demo. With just a few commands, you can start the demo on your local host and interact through a user-friendly interface.
            </p>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            How to use AnimateDiff AI Tool?
          </h2>
          <div>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Github: </strong>
              <a rel="noreferrer noopener" href="https://github.com/guoyww/AnimateDiff" target="_blank"> https://github.com/guoyww/AnimateDiff</a>
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Paper URL: </strong>
              <a href="https://arxiv.org/abs/2307.04725" target="_blank" rel="noreferrer noopener"> https://arxiv.org/abs/2307.04725</a>
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              <strong>Experience Online (You can also use it below): </strong>
              <a href="https://huggingface.co/spaces/guoyww/AnimateDiff" target="_blank" rel="noreferrer noopener"> https://huggingface.co/spaces/guoyww/AnimateDiff</a>
            </p>
          </div>

          <div>
          <iframe
            src="https://guoyww-animatediff.hf.space"
            frameBorder="0"
            width="1000"
            height="600"
          ></iframe>
          </div>
          <a href=" https://shorturl.at/gwWX6" target="_blank" rel="noreferrer noopener">  https://shorturl.at/gwWX6</a>
        </div>
        </div>
      </div>
    </>
  );
}
