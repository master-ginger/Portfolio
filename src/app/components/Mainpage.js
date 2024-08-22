"use client"
import Image from "next/image";
import '../globals.css'
import myprof from "../../../public/images/myprof.png"
import { IoMail } from "react-icons/io5";
import { FaGithub,FaLinkedin } from "react-icons/fa6";
import { SiHackerrank } from "react-icons/si";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5,FaGitAlt,FaPython} from "react-icons/fa";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import moongirl from '../../../public/images/moongirl.png';
import starsbg from '../../../public/images/stars.png';
import { Slide,Hinge,JackInTheBox,Zoom } from "react-awesome-reveal";
import spotify from '../../../public/images/spotify.png';
import {useState} from "react";

export default function Mainpage(){
    const [isOpen,setisOpen]=useState(false)
    return(
        <div className=" text-white ">
            <div className="lg:ml-[80px] mx-5">
            <div className="bg-black">
            <div className="animate animate-pulse  w-1/2 absolute h-[550px] inset-0 bg-gradient-to-r from-purple-500 to-black  opacity-40 blur-2xl rounded-ee-full "></div>
            <div className="flex justify-between ">
                <div className="lg:mt-[50px] ">
                    Logo
                </div>
                <div className="lg:hidden">
                    <button onClick={()=>setisOpen(!isOpen)}>
                        <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
                    </button>
                </div>
                <div className={`lg:hidden flex ${isOpen ? "block":"hidden"}`}>
                <div>Home</div>
                    <div>About</div>
                    <div>Work</div>
                    <div>Contact</div>
                </div>
                <div className="hidden lg:visible lg:flex justify-around lg:w-1/3 lg:text-[20px] lg:mt-[60px]">
                    <div>Home</div>
                    <div>About</div>
                    <div>Work</div>
                    <div>Contact</div>
                </div>
            </div>

            <div className="relative lg:flex lg:justify-between  ">
                <div className="lg:w-1/2 lg:mt-[160px] mt-20 ">
                    <div className="lg:text-[68px] font-bold animate-slidein300 opacity-0 text-3xl">Hi, I am Bhavana</div>
                    <div className="text-[30px] lg:text-[58px] animate-slidein500 opacity-0">Developer</div>
                    <div className="animate-slidein700 opacity-0"> I'm a passionate web developer dedicated to creating innovative and user-friendly web experiences. Explore my work and see how I bring ideas to life through clean, efficient code.</div>
                    <button className="px-[40px] border-[1px] border-white mt-[22px] py-[5px] hover:shadow-[0_0_3px_#fff,inset_0_0_1px_#fff,0_0_3px_#08f,0_0_2px_#fff,0_0_2px_#fff] ">
                        Resume
                    </button>
                    <div className="flex mt-[24px]">
                        <div className="flex justify-center items-center border-[1px] border-white lg:w-[36px] lg:h-[36px] lg:mr-[20px] mr-4 p-1"><IoMail className="text-[25px]"/></div>
                        <div className="flex justify-center items-center border-[1px] border-white lg:w-[36px] lg:h-[36px] lg:mr-[20px] mr-4 p-1"><FaGithub className="text-[25px]"/></div>
                        <div className="flex justify-center items-center border-[1px] border-white lg:w-[36px] lg:h-[36px] lg:mr-[20px] mr-4 p-1"><FaLinkedin className="text-[25px]"/></div>
                        <div className="flex justify-center items-center border-[1px] border-white lg:w-[36px] lg:h-[36px] lg:mr-[20px] mr-4 p-1"><SiHackerrank className="text-[25px]"/></div>

                    </div>
                </div>
                <div>
                    <div className=" lg:mr-[72px] lg:mt-[60px] mb-[120px] animate-slidein500 opacity-0">
                        <Image src={myprof} height={484} width={500} className=" relative"/>
                    </div>
                </div>
            </div>
            </div>

            <div className=" ">
                <div className=" relative lg:ml-[800px]">
                    <div className="collapse lg:visible absolute h-[650px] moving-div inset-0 bg-gradient-to-r  from-black to-blue-500  opacity-40 blur-2xl rounded-es-full "></div>
                </div>
                <div className="lg:text-[52px] text-[30px]">About</div>
                <div className="text-[18px] lg:text-[20px] lg:mr-[135px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias adipisci possimus sapiente itaque repudiandae minus quasi exercitationem ab nostrum beatae earum libero, est at! Accusantium facere nulla aliquid quasi placeat?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, repellat quam enim blanditiis iste officia sapiente non! Accusamus iure sint, facere alias accusantium unde deserunt libero harum laborum fugit molestias.
                </div>

                <div className="lg:mt-[102px] my-[40px]">
                    <div className="text-[32px]  lg:w-[90%]">What I do</div>
                    <div className="grid grid-cols-2 mt-[20px] lg:mt-[60px] ">
                        <div className="border-2 border-white bg-white bg-opacity-5 lg:w-[600px] lg:mr-0 mr-2">
                            <div className="flex lg:mx-[38px] lg:pb-10 p-2">
                                <div className="lg:text-[30px] lg:mt-[35px] lg:mr-[100px]">Full stack Web development</div>
                                <div><LiaLaptopCodeSolid className="lg:w-[70px] lg:h-[67px] lg:mt-[20px]"/></div>
                            </div>
                        </div>
                        <div className="border-2 border-white bg-white bg-opacity-5 lg:w-[600px] lg:ml-0 ml-2">
                            <div className="flex lg:mx-[38px] lg:pb-10 p-2">
                                <div className="lg:text-[30px] lg:mt-[35px] lg:mr-[100px]">Data Analysis and Visualization</div>
                                <div><LiaLaptopCodeSolid className="lg:w-[70px] lg:h-[67px] lg:mt-[20px]"/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

                <div className="text-[32px] lg:ml-[80px] lg:mt-[100px] lg:mb-10">
                    Skills
                </div>
                <div className="starsbg  mb-[20px]" style={{backgroundImage:`url(${starsbg.src})`}}>

                        <div className="flex justify-around lg:mx-32">
                            <Slide direction="left"><div className="flex justify-start mt-20"><FaGitAlt className="lg:h-[100px] lg:w-[90px] h-[50px] w-[50px]"/></div></Slide>
                            <Slide direction="down"><div className="flex justify-start mb-20"><FaPython className="lg:h-[100px] lg:w-[90px] h-[50px] w-[50px]" /></div></Slide>
                            <Slide direction="right"><div className="flex justify-end mt-20"><FaHtml5 className="lg:h-[100px] lg:w-[90px] h-[50px] w-[50px]"/></div></Slide>
                        </div>
                
                        <div className="flex justify-around items-center mt-2">
                        <Slide direction="left"><div><RiTailwindCssFill className="lg:w-[64px] lg:h-[64px] lg:ml-20 h-[50px] w-[50px]"/></div></Slide>
                            <Image 
                            src={moongirl}
                            width={200}
                            height={100}
                            className="my-10 floating h-[190px] w-[150px]"
                            />
                            <Slide direction="right"><div><RiNextjsFill className="lg:w-[64px] lg:h-[64px] lg:mr-20 h-[50px] w-[50px]"/></div></Slide>
                        </div>

                        <div className="flex justify-around lg:mx-44">
                        <Slide direction="left"><div className="flex justify-start"><IoLogoJavascript className="lg:h-[100px] lg:w-[90px] h-[50px] w-[50px]" /></div></Slide>
                        <Slide direction="up"><div><FaReact  className="lg:h-[100px] lg:w-[90px] lg:mt-32 mt-[50px] h-[50px] w-[50px]" /></div></Slide>
                        <Slide direction="right"><div className=" "><SiMysql className="lg:h-[100px] lg:w-[90px] h-[50px] w-[50px]" /></div></Slide>
                        </div>
                </div>
                
                <div className="mt-[100px] mx-14">
                    <div className="text-[32px] lg:w-[90%] lg:ml-[20    px]">Projects</div>
                    <div className="grid lg:grid-cols-4 grid-cols-1 mt-[50px]">
                        <div className="card1 mt-4">
                            <div className="flex justify-center"><Image src={spotify} className="img1" height={200} width={200}/></div>
                            <div className=" my-5 font-bold">Spotify Clone</div>
                            <div className="leading-5">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore perferendis earum soluta fugiat adipisci, impedit culpa a, dicta eius praesentium repell
                            </div>
                        </div>

                        <div className="card1 mt-4">
                            <div className="flex justify-center"><Image src={spotify} className="img1" height={200} width={200}/></div>
                            <div className=" my-5 font-bold">Spotify Clone</div>
                            <div className="leading-5">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore perferendis earum soluta fugiat adipisci, impedit culpa a, dicta eius praesentium repell
                            </div>
                        </div>

                        <div className="card1 mt-4">
                            <div className="flex justify-center"><Image src={spotify} className="img1" height={200} width={200}/></div>
                            <div className=" my-5 font-bold">Spotify Clone</div>
                            <div className="leading-5">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore perferendis earum soluta fugiat adipisci, impedit culpa a, dicta eius praesentium repell
                            </div>
                        </div>

                        <div className="card1 mt-4">
                            <div className="flex justify-center"><Image src={spotify} className="img1" height={200} width={200}/></div>
                            <div className=" my-5 font-bold">Spotify Clone</div>
                            <div className="leading-5">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore perferendis earum soluta fugiat adipisci, impedit culpa a, dicta eius praesentium repell
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="text-[32px] mt-[20px] ml-[80px]">Contact</div>
                <div className="mt-[100px] absolute">
                    
                </div>
                
        </div>
    )
}

/*
bhavanapillai100
chNOZkJlFMhHYp76


CONNECTION STRING:mongosh "mongodb+srv://portfolio.88ym1.mongodb.net/" --apiVersion 1 --username bhavanapillai100 --password chNOZkJlFMhHYp76
*/ 