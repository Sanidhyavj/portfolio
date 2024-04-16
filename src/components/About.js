import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { personalData } from "../data";

export default function About() {

    const navigateToPage = (url) => {
        window.location.href = url;
      };

  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="ml-8 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm 
          </h1>
          <h1  className=" sm:text-4xl text-3xl mb-4 font-medium text-red-500">
          SANIDHYA VIJAY
          </h1>
          <h1 className="  text-2xl mb-4 font-medium text-green-500">
          I enjoy engaging in competitive programming. At the moment, I'm delving into web development and exploring various technologies in the field.
          </h1>
          
          <div className="flex justify-center">
            
          <div className="flex flex-row justify-center w-100 h-100 bg-gray-800 p-4 m-2 rounded-lg ">
            <div className="px-3 cursor-pointer hover:scale-105 duration-200">
              <LinkedInIcon
              fontSize="large"
                color="white"
                onClick={() =>
                  navigateToPage(
                    "https://www.linkedin.com/in/sanidhya-vijay-02b183229/"
                  )
                }
              />
            </div>
            <div className="px-3 cursor-pointer hover:scale-105 duration-200">
              <InstagramIcon 
              fontSize="large"
              color="white"  
              onClick={() =>
                navigateToPage("https://www.instagram.com/broke.sanidhya/?hl=en")
              }/>
            </div>
            <div className="px-3 cursor-pointer hover:scale-105 duration-200 large-icon">
              <GitHubIcon
              fontSize="large"
                color="black"
                onClick={() =>
                  navigateToPage("https://github.com/Sanidhyavj")
                }
              />
            </div>
          </div>
           
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full  w-5/6 bg-gray-800 p-4 m-2 rounded-lg">
        <div className="px-4 lg:px-8 py-5 border border-white">
            <div className="flex flex-row space-x-2 ">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-pink-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border border-pink px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-red-300">Sanidhya Vijay</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-red-300">JavaScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-300">Java</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-300">NodeJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-300">C++</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-300">Material UI</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-red-300">DSA</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-red-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-red-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-red-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-red-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-red-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-pink-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-red-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-pink-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-red-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-pink-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-red-300">&gt;=</span>
                <span className="text-red-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-black-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
        </div>
    </section>
  );
}