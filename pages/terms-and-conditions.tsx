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
          content="AnimateDiff is one of the easiest ways to generate videos with Stable Diffusion. In the most basic form, you only need to write a prompt, pick a model, and turn on AnimateDiff"
        />
        <meta
          name="keywords"
          content="AnimateDiff AI, Animatediff"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://animatediffaitool.com" />
      </Head>
      <Header />


      <div className='bg-[rgba(51,51,72,0.1)] w-full flex flex-col items-center lg:pb-0 overflow-auto break-words'>
        <div className='bg-[#f7f8f9] w-full flex flex-col items-center pt-3 px-20'>
        <div className='bg-[#fff] w-full flex flex-col items-center px-10 lg:px-16'>
          <h1 className='text-2xl lg:text-4xl font-bold mt-3'>Terms and Conditions</h1>
          <h5 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            Welcome to Animate Diff AI Tool!
          </h5>
          <div>
            <p className='font-normal text-lg font-sans mt-5'>
              These terms and conditions outline the rules and regulations for the use of Animate Diff AI’s Website, located at <a className='text-sky-600' href='https://animatediffaitool.com.'>https://animatediffaitool.com.</a>
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
            When you use this website, we believe you agree to its terms and conditions. If you don&apos;t agree with all the terms and conditions listed on this page, please stop using Animate Diff AI.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
            These Terms and Conditions, along with our Privacy Statement and Disclaimer Notice, use certain terms. &quot;Client&quot;, &quot;You&quot;, and &quot;Your&quot; refer to you, the person using this website and agreeing to our terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot;, and &quot;Us&quot; refer to our company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot; means both you and our company. All these terms are about the agreement where you pay us to help you in the best way we can, with the goal of meeting your needs for our services. This is done following the current laws that apply to us. If we use any of these terms or other words in singular, plural, or different capitalization, or if we use &quot;he/she&quot; or &quot;they&quot;, they all mean the same thing.
            </p>
          </div>
          

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            Cookies
          </h2>
          <div className="w-full overflow-x-auto mt-5">
            <p className='font-normal text-lg font-sans mt-5'>
            We use cookies here at Animate Diff AI. When you use our site, you&apos;re saying it&apos;s okay for us to use cookies, according to our Privacy Policy.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
            Lots of websites, including ours, use cookies. They help us remember you each time you visit. Cookies make our website work better and make your visit easier. Some of the companies we work with to advertise may use cookies too.
            </p>
          </div>

          <h2 className="rounded-xl text-white text-2xl mt-5 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full p-2 flex justify-center">
            License
          </h2>
          <div>
            <p className='font-normal text-lg font-sans mt-5'>
            Unless otherwise stated, Animate Diff AI and/or its licensors own the intellectual property rights for all material on Animate Diff AI. All intellectual property rights are reserved. You may access this from Animate Diff AI for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
            You must not:
            </p>
            <ul className='font-normal text-lg font-sans mt-5'>
              <li>1. Republish material from Animate Diff AI</li>
              <li>2. Sell, rent or sub-license material from Animate Diff AI</li>
              <li>3. Reproduce, duplicate or copy material from Animate Diff AI</li>
              <li>4. Redistribute content from Animate Diff AI</li>
            </ul>
            <p className='font-normal text-lg font-sans mt-5'>
            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Animate Diff AI does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Animate Diff AI,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Animate Diff AI shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
            Animate Diff AI reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
            </p>
            <p className='font-normal text-lg font-sans mt-5'>
              You warrant and represent that:
            </p>
            <ul className='font-normal text-lg font-sans mt-5'>
              <li>1. You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;</li>
              <li>2. The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
              <li>3. The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
              <li>4. The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
            </ul>
            <p className='font-normal text-lg font-sans mt-5'>
              You hereby grant Animate Diff AI a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
            </p>
          </div>



          <a href=" https://shorturl.at/gwWX6" target="_blank" rel="noreferrer noopener">  https://shorturl.at/gwWX6</a>
        </div>
        </div>
      </div>
    </>
  );
}
