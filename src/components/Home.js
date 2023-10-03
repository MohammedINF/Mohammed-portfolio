import React, { useState } from 'react';
import {  motion ,} from "framer-motion"
import { Typewriter } from 'react-simple-typewriter'
import { Tooltip  } from "react-tooltip";
import AnimatedCursor from "react-animated-cursor"

export function scrollToDiv() {
    const section = document.getElementById('targetDiv'); // Replace 'targetSection' with your section's ID
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};



export function scrollToHome() {
    const section = document.getElementById('Home'); // Replace 'targetSection' with your section's ID
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export function scrollToSkills() {
    const section = document.getElementById('skilled'); // Replace 'targetSection' with your section's ID
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};

export function scrollToAbout() {
    const section = document.getElementById('MYAbout'); // Replace 'targetSection' with your section's ID
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};


export function scrollToContacts() {
    const section = document.getElementById('MyContact'); // Replace 'targetSection' with your section's ID
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};


const Home = () => {
   
    const cards = [
        { id: 1, title: 'Attendance System', content: 'A Responsive Attendance Website to Take Student Attendances and Student Can View There Attendance and Result.', img: require('../icons/attendance.jpg'), languages:' React JS - Node Js(Express Js) - MySQL - Tailwind' },
        { id: 2, title: 'Restaurant  System', content: 'A restaurant management system (RMS) is a software application designed to streamline and automate various aspects of restaurant operations.', img: require('../icons/db.JPG'), languages: ' C# - Guna2 UI - SQL Server ' },
        { id: 3, title: 'Note Application', content: 'A Note-Taking App Is a Digital Tool For Creating, Organizing, And Managing Notes, And It Record Voices.', img: require('../icons/note.jpg'), languages: ' React Native - Node Js(Express Js) - SQL Lite ' },
        { id: 4, title: 'Chat-Bot  Application', content: 'Mobile App Like Chat-GPT It Response Messages From User And Contain Imagining That Convert Text To Message.', img: require('../icons/chatapi.jpg'),languages: ' React Native - Node Js(Express Js) - Chat-GPT API ' },
        { id: 5, title: 'Pharmacy  System', content: 'A Pharmacy Management System (PMS) is a software application specifically designed for use in pharmacies and other healthcare facilities.', img: require('../icons/pharma.jpg'), languages: ' C# - Guna2 UI - SQL Server ' },

        // Add more cards as needed
    ];
    

    const languages=[
        { id: 1, Text: 'Java' },
        { id: 2, Text: 'C#' },
        { id: 3, Text: 'Node Js' },
        { id: 4, Text: 'Java Script' },
    ]



    const FrameWorks = [
        { id: 1, Text: 'Express js' },
        { id: 2, Text: 'React Native' },
        { id: 3, Text: 'React js' },
        { id: 4, Text: 'Guna 2 Ui' },
        { id: 5, Text: 'Tailwind Css' },
    ]



    const DataBases = [
        { id: 1, Text: 'MySQL' },
        { id: 2, Text: 'SQL-Lite' },
        { id: 3, Text: 'Microsoft SQL Server' },
        { id: 4, Text: 'Oracle' },
    ]


    const Tools = [
        { id: 1, Text: 'Windows' },
        { id: 2, Text: 'Postman' },
        { id: 3, Text: 'VsCode' },
        { id: 4, Text: 'Visual Studio' },
        { id: 5, Text: 'NetBeans' },
        { id: 6, Text: 'Intellij idea' },
    ]
    const downloadPdf = () => {
        fetch(require('../pdf/Mohammed-othman-cv.pdf'))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Mohammed_Othman_CV.pdf';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('Error downloading PDF:', error));
    };

    const[hover,setHover]=useState(false);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);

        
    return (
        <div className=' bg-gradient-to-r from-gray-950 to-gray-800   h-fit '>
            <div id='Home' className='bg-gradient-to-r from-gray-950 to-gray-800 p-5 container mx-auto   h-fit '>
                <AnimatedCursor
                    innerSize={8}
                    outerSize={30}
                    innerScale={1}
                    outerScale={2}
                    outerAlpha={0}
                    hasBlendMode={true}
                    
                    innerStyle={{
                        backgroundColor: '#fff'
                    }}
                    outerStyle={{
                        border: '3px solid #6621BA',
                        boxShadow:'0px 0px 10px 2px #6621BA'
                        
                    }}
                />
                <div className="flex flex-col lg:flex-row justify-between"><div className="flex gap-2 items-center justify-between"><div className="flex gap-2 items-center">
                <img alt="logo" className='rounded-full' loading="lazy" width="50" height="50" decoding="async" data-nimg="1"  src={require('../icons/M.png')}/>
                <h1 className='text-white font-medium text-xl'>Mohammed</h1>
               </div></div></div>
                <div  className=' flex flex-col md:flex-row justify-between overflow-y-auto '>
           


                   {/* Bottom Navigation */}

                    <div className="flex fixed  z-50 w-full h-14   max-w-lg -translate-x-1/2 backdrop-blur-[1px] bg-white/90  border border-[#8032e0] rounded-full bottom-4 left-1/2">
                        <div className="grid h-full w-full grid-cols-5 mx-auto">

                            <motion.button onHoverStart={()=>setHover(true)} onHoverEnd={()=>(setHover(false))} onClick={scrollToSkills} whileHover={{ scale: 1.3, }} data-tooltip-id='skills' type="button" className="inline-flex items-center my-auto mx-auto justify-center w-8 h-8 font-medium rounded-full  ">
                               {!hover ?(
                                <motion.svg   className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                                    <motion.path  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#8032e0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></motion.path> 
                                    <motion.path  d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="#8032e0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" stroke-linejoin="round">

                                 </motion.path> </g></motion.svg>
                                ):
                                <motion.svg  className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> <g id="style=fill"> <g id="setting"> 
                                <path id="Subtract" fillRule="evenodd" clipRule="evenodd" d="M10.8946 3.00654C10.2226 1.87704 8.75191 1.45656 7.59248 2.14193L5.86749 3.12906C4.59518 3.85639 4.16378 5.48726 4.8906 6.74522L4.89112 6.74611C5.26606 7.39298 5.20721 7.8062 5.09018 8.00929C4.97308 8.21249 4.64521 8.47001 3.9 8.47001C2.43322 8.47001 1.25 9.66837 1.25 11.12V12.88C1.25 14.3317 2.43322 15.53 3.9 15.53C4.64521 15.53 4.97308 15.7875 5.09018 15.9907C5.20721 16.1938 5.26606 16.607 4.89112 17.2539L4.8906 17.2548C4.16378 18.5128 4.59558 20.1439 5.8679 20.8712L7.59257 21.8581C8.75199 22.5434 10.2226 22.123 10.8946 20.9935L11.0091 20.7958C11.3841 20.1489 11.773 19.9925 12.0087 19.9925C12.2434 19.9925 12.6293 20.1476 12.9993 20.793L13.0009 20.7958L13.1109 20.9858L13.1154 20.9935C13.7874 22.123 15.258 22.5434 16.4174 21.8581L18.1425 20.871C19.4157 20.1431 19.8444 18.5235 19.1212 17.2579L19.1189 17.2539C18.7439 16.607 18.8028 16.1938 18.9198 15.9907C19.0369 15.7875 19.3648 15.53 20.11 15.53C21.5768 15.53 22.76 14.3317 22.76 12.88V11.12C22.76 9.65323 21.5616 8.47001 20.11 8.47001C19.3648 8.47001 19.0369 8.21249 18.9198 8.00929C18.8028 7.8062 18.7439 7.39298 19.1189 6.74611L19.1194 6.74522C19.8463 5.48713 19.4147 3.85604 18.1421 3.12883L16.4175 2.14193C15.2581 1.45656 13.7874 1.877 13.1154 3.00651L13.0009 3.20423C12.6259 3.85115 12.237 4.00751 12.0012 4.00751C11.7666 4.00751 11.3807 3.85247 11.0107 3.20701L11.0091 3.20423L10.8991 3.01421L10.8946 3.00654ZM15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" fill="#8032e0">

                                </path> </g> </g> </g></motion.svg>}
                                <span className="sr-only">Wallet</span>
                            </motion.button>

                            <Tooltip
                                id="skills"
                                place="top"
                                content="Skills"
                                style={{ color: '#6621BA', backgroundColor: 'white', fontFamily: 'monospace', fontSize: 14, fontWeight: 'bold', borderRadius: '20px' }}
                            />



                            <motion.button onHoverStart={() => setHover1(true)} onHoverEnd={() => (setHover1(false))} onClick={scrollToDiv} data-tooltip-id='projects' whileHover={{ scale: 1.3, }} type="button" className="inline-flex items-center my-auto mx-auto justify-center w-8 h-8 font-medium rounded-full ">
                              {!hover1 ?(
                                <motion.svg  className='w-full flex h-full ' fill="#8032e0" viewBox="0 0 14.00 14.00" xmlns="http://www.w3.org/2000/svg" stroke="#8032e0" strokeWidth="0.00014">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#8032e0" strokeWidth="0.14"></g>
                                <g id="SVGRepo_iconCarrier"> <g>
                                 <path d="M7,1V5h4V1Zm3,3H8V2h2ZM7,7v4h4V7Zm3,3H8V8h2ZM1,1V5H5V1ZM4,4H2V2H4ZM1,7v4H5V7Zm3,3H2V8H4Z">
                                </path> </g> </g></motion.svg> 
                                ):
                                    <motion.svg  className='w-full flex h-full ' fill="#8032e0" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinejoin="round" strokeLinecap="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                     <g> <path d="M1,5H5V1H1Zm0,6H5V7H1Zm6,0h4V7H7ZM7,1V5h4V1Z"></path> </g> </g></motion.svg>
                                }
                                 <span className="sr-only">Profile</span>
                            </motion.button>
                            <Tooltip
                                id="projects"
                                place="top"
                                content="Projects"
                                style={{ color: '#6621BA', backgroundColor: 'white', fontFamily: 'monospace', fontSize: 14, fontWeight: 'bold', borderRadius: '20px' }}
                            />



                        


                            <div className="flex items-center justify-center">
                                <motion.button onHoverStart={() => setHover2(true)} onHoverEnd={() => setHover2(false)} onClick={scrollToHome} data-tooltip-id='home' whileHover={{ scale: 1.3, }} type="button" className="inline-flex items-center my-auto mx-auto justify-center w-8 h-8 font-medium rounded-full  ">
                                  {!hover2 ? (  
                                    <motion.svg  fill={'#8032e0'} xmlns="http://www.w3.org/2000/svg" className='w-full flex h-full ' viewBox="0 0 24 24">
                                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-strokeLinejoin="round"></g>
                                      <g id="SVGRepo_iconCarrier"><circle id="secondary" cx="12" cy="12" r="9"strokeWidth='2' fill='transparent'></circle><polyline id="primary" points="15 13 12 10 9 13" stroke='#8032e0' fill='none' strokeWidth='2'></polyline>
                                            <circle id="primary-2" data-name="primary" cx="12" cy="12" r="9" stroke='#8032e0' fill='none' strokeWidth='2'>

                                        </circle></g>
                                    </motion.svg>
                                    ):
                                        <motion.svg  fill={'#8032e0'} xmlns="http://www.w3.org/2000/svg" className='w-full flex h-full ' viewBox="0 0 24 24">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier"><circle id="secondary" cx="12" cy="12" r="9" strokeWidth='2' fill='#8032e0'></circle><polyline id="primary" points="15 13 12 10 9 13" stroke='white' fill='none' strokeWidth='2'></polyline>
                                                <circle id="primary-2" data-name="primary" cx="12" cy="12" r="9" stroke='#8032e0' fill='none' strokeWidth='2'>

                                                </circle></g>
                                        </motion.svg>
                                    }
                                    <span className="sr-only">New item</span>
                                </motion.button>
                            </div>
                            <Tooltip
                                id="home"
                                place="top"
                                content="Top"
                                style={{ color: '#6621BA', backgroundColor: 'white', fontFamily: 'monospace', fontSize: 14, fontWeight: 'bold', borderRadius: '20px' }}
                            />





                            <motion.button onHoverStart={() => setHover3(true)} onHoverEnd={() => setHover3(false)} onClick={scrollToContacts} whileHover={{ scale: 1.3, }} data-tooltip-id="chat" type="button" className="inline-flex items-center my-auto mx-auto justify-center w-8 h-8 font-medium rounded-full  ">
                               {!hover3 ?(
                                <motion.svg  className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                 <path d="M8 12H8.009M11.991 12H12M15.991 12H16" stroke="#8032e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#8032e0" strokeWidth="1.5">

                                </path> </g></motion.svg>
                                ):
                               


                                <motion.svg  className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                 <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" fill="#8032e0"></path> 
                                 <path d="M15 12C15 12.5523 15.4477 13 16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12Z" fill="white"></path>
                                            <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" fill="white"></path> 
                                            <path d="M7 12C7 12.5523 7.44772 13 8 13C8.55228 13 9 12.5523 9 12C9 11.4477 8.55228 11 8 11C7.44772 11 7 11.4477 7 12Z" fill="white">

                                </path> </g></motion.svg>} 
                                <span className="sr-only">Home</span>
                            </motion.button>
                            <Tooltip
                                id="chat"
                                place="top"
                                content="Contact"
                                style={{ color: '#6621BA', backgroundColor: 'white', fontFamily: 'monospace', fontSize: 14, fontWeight: 'bold', borderRadius: '20px' }}
                            />



                            <div className="flex items-center justify-center">
                                <motion.button onHoverStart={() => setHover4(true)} onHoverEnd={() => setHover4(false)} onClick={scrollToAbout} whileHover={{ scale: 1.3, }} data-tooltip-id='about' type="button" className="inline-flex items-center my-auto mx-auto justify-center w-8 h-8 font-medium rounded-full ">
                                   {!hover4 ?(
                                    <motion.svg  className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                    <circle  cx="12" cy="12" r="10" stroke="#8032e0" strokeWidth="1.5"></circle>
                                     <path d="M12 17V11" stroke="#8032e0" strokeWidth="1.5" strokeLinecap="round"></path>
                                      <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#8032e0">
                                    </circle> </g></motion.svg>
                                    ):
                                    <motion.svg  className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                    <path fillRule="evenodd" clipRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z" fill="#8032e0">

                                    </path> </g></motion.svg>
                                   }

                                    <span className="sr-only">New item</span>
                                </motion.button>
                                <Tooltip
                                    id="about"
                                    place="top"
                                    content="About"
                                    style={{ color: '#6621BA', backgroundColor: 'white', fontFamily: 'monospace', fontSize: 14, fontWeight: 'bold', borderRadius: '20px' }}
                                />

                            </div>
                           


                        </div>
                    </div>





                    {/* First Display */}

                    <motion.div initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }} className="flex flex-col relative mt-20 gap-5">
                        <h1 className="text-2xl text-white lg:text-4xl font-medium">Mohammed is a<span className="text-purple-500"> full-stack developer </span>from Iraq sulaymaniyah</h1>
                        <h4 className='text-lg text-zinc-400 font-medium'>I developed responsive<span className='text-purple-500 text-lg font-medium'><Typewriter words={[' Websites', ' Mobile Applications', ' DataBase Systems']} typeSpeed={50} cursorStyle='|' cursor deleteSpeed={150} loop /></span></h4>
                        <blockquote className="p-4 w-full flex my-4   border-l-4 border-gray-300 ">
                            <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 -my-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                            </svg>
                            <h4 className=' mt-4 text-zinc-400 font-medium text-md md:text-lg lg:w-[700px] md:w-[400px] w-96 '>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients .What would you do if you had a software expert available at your fingertips?
                             
                              
                            </h4>

                        </blockquote>
                      
                         
                        <a href='#0' className="w-max cursor-pointer" onClick={scrollToContacts}><div className="border  text-white font-medium border-purple-500 px-5 py-2 w-max"><Typewriter words={['Hire Me !', 'Contact Me !']} cursor cursorStyle='|' typeSpeed={50} deleteSpeed={150} loop /></div></a>

                      
                    </motion.div>





                    {/* first Image */}

                    <motion.div initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }} className="relative overflow-hidden mt-14  ">
                       

                        <img alt="object" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="visible object-contain mx-auto absolute top-3 -left-10" src={require('../icons/dotes1.png')} />
                        <img alt="object" loading="lazy" width="300" height="300" decoding="async" data-nimg="1"  className=" object-contain  mx-auto absolute  bottom-0 -right-44" src={require('../icons/dotes1.png')}/>
                        <div className=" object-contain w-full h-full flex  mx-auto absolute  top-16  -left-4  ">
                            <svg style={{ position: 'absolute' }} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="blobSvg">

                                <path id="blob" fill="#8032e0">
                                    <animate attributeName='d' repeatCount='indefinite'
                                        dur='10000ms'
                                        values='
                                           M429,308.5Q367,367,308.5,401.5Q250,436,169.5,423.5Q89,411,93,330.5Q97,250,107,183.5Q117,117,183.5,100.5Q250,84,335,82Q420,80,455.5,165Q491,250,429,308.5Z;
                                           M443.048,332.87741Q415.75481,415.75481,332.87741,439.09905Q250,462.44329,189.33247,416.88918Q128.66493,371.33507,96.30541,310.66753Q63.94589,250,73.94589,166.97295Q83.94589,83.94589,166.97295,73.23036Q250,62.51483,326.73647,79.52094Q403.47295,96.52705,436.90706,173.26353Q470.34118,250,443.048,332.87741Z;
                                           M422.79524,331.87044Q413.74088,413.74088,331.87044,434.74088Q250,455.74088,171.17089,431.69955Q92.34178,407.65822,61.97395,328.82911Q31.60611,250,60.43261,169.62956Q89.25912,89.25912,169.62956,52.61393Q250,15.96873,312.74088,70.24349Q375.48176,124.51824,403.66568,187.25912Q431.8496,250,422.79524,331.87044Z;
                                           M447,334Q418,418,334,424Q250,430,188,402Q126,374,96,312Q66,250,73,165Q80,80,165,72.5Q250,65,308,99.5Q366,134,421,192Q476,250,447,334Z;
                                           M443.42589,328.89413Q407.78825,407.78825,328.89413,412.25649Q250,416.72473,160.93887,422.4235Q71.87773,428.12227,62.81182,339.06113Q53.7459,250,77.59529,175.72234Q101.44467,101.44467,175.72234,92.9235Q250,84.40232,313.10587,104.09529Q376.21175,123.78825,427.63764,186.89413Q479.06352,250,443.42589,328.89413Z;
                                           M438.5,337Q424,424,337,423Q250,422,180,406Q110,390,89,320Q68,250,99.5,190.5Q131,131,190.5,83.5Q250,36,320.5,72.5Q391,109,422,179.5Q453,250,438.5,337Z;
                                           M429,308.5Q367,367,308.5,401.5Q250,436,169.5,423.5Q89,411,93,330.5Q97,250,107,183.5Q117,117,183.5,100.5Q250,84,335,82Q420,80,455.5,165Q491,250,429,308.5Z;
                                        '>

                                    </animate>
                                </path>
                            </svg>
                            <svg style={{ position: 'absolute', filter: 'blur(13px)' }} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="blobSvg">

                                <path id="blob" fill="#8032e0">
                                    <animate attributeName='d' repeatCount='indefinite'
                                        dur='10000ms'
                                        values='
                                           M429,308.5Q367,367,308.5,401.5Q250,436,169.5,423.5Q89,411,93,330.5Q97,250,107,183.5Q117,117,183.5,100.5Q250,84,335,82Q420,80,455.5,165Q491,250,429,308.5Z;
                                           M443.048,332.87741Q415.75481,415.75481,332.87741,439.09905Q250,462.44329,189.33247,416.88918Q128.66493,371.33507,96.30541,310.66753Q63.94589,250,73.94589,166.97295Q83.94589,83.94589,166.97295,73.23036Q250,62.51483,326.73647,79.52094Q403.47295,96.52705,436.90706,173.26353Q470.34118,250,443.048,332.87741Z;
                                           M422.79524,331.87044Q413.74088,413.74088,331.87044,434.74088Q250,455.74088,171.17089,431.69955Q92.34178,407.65822,61.97395,328.82911Q31.60611,250,60.43261,169.62956Q89.25912,89.25912,169.62956,52.61393Q250,15.96873,312.74088,70.24349Q375.48176,124.51824,403.66568,187.25912Q431.8496,250,422.79524,331.87044Z;
                                           M447,334Q418,418,334,424Q250,430,188,402Q126,374,96,312Q66,250,73,165Q80,80,165,72.5Q250,65,308,99.5Q366,134,421,192Q476,250,447,334Z;
                                           M443.42589,328.89413Q407.78825,407.78825,328.89413,412.25649Q250,416.72473,160.93887,422.4235Q71.87773,428.12227,62.81182,339.06113Q53.7459,250,77.59529,175.72234Q101.44467,101.44467,175.72234,92.9235Q250,84.40232,313.10587,104.09529Q376.21175,123.78825,427.63764,186.89413Q479.06352,250,443.42589,328.89413Z;
                                           M438.5,337Q424,424,337,423Q250,422,180,406Q110,390,89,320Q68,250,99.5,190.5Q131,131,190.5,83.5Q250,36,320.5,72.5Q391,109,422,179.5Q453,250,438.5,337Z;
                                           M429,308.5Q367,367,308.5,401.5Q250,436,169.5,423.5Q89,411,93,330.5Q97,250,107,183.5Q117,117,183.5,100.5Q250,84,335,82Q420,80,455.5,165Q491,250,429,308.5Z;
                                        '>

                                    </animate>
                                </path>
                            </svg></div>
                            <img alt='' loading="lazy" width="450" height="450" decoding="async" data-nimg="1" className="object-contain relative mx-auto grayscale" src={require('../icons/me.png')} />
                    
                        <motion.div animate={{
                            background: [
                                "linear-gradient(to right, #24243e -200%, #302b63 -100%, #24243e 0%, #302b63 100%)",
                                "linear-gradient(to right, #24243e -100%, #302b63 0%, #24243e 100%, #302b63 200%)",
                                "linear-gradient(to right, #24243e 0%, #302b63 100%, #24243e 200%, #302b63 300%)",
                            ],
                        }} transition={{
                            background: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                from:
                                    "linear-gradient(to right, #24243e -200%, #302b63 -100%, #24243e 0%, #302b63 100%)",
                            },
                        }}  className="bg-brand-700  border border-white p-2 flex items-center gap-2 relative  w-full centered-bottom">
                            <div className="w-[15px] h-[15px]  bg-purple-500"></div>
                            <div className="text-zinc-400  text-xl"><span className=" text-white">Mohammed Othman </span></div>
                        </motion.div>

                    </motion.div>

        </div>



                {/* Hr Line  with Quotes*/}
                <motion.div initial={{ y: -100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} className="inline-flex items-center justify-center w-full">
                    <hr className="w-64 h-1 my-16 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                    <div className="absolute px-4 -translate-x-1/2 bg-transparent left-1/2 ">
                        <svg className="w-4 h-4 text-violet-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                    </div>
                </motion.div>




                {/* Cristiano Ronaldo Speech */}

                <motion.div initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} className="w-full lg:w-[500px]  mt-10 mb-5 mx-auto relative">
                    <div className="relative">
                        <div className="w-[40px] h-[40px] rounded-full bg-brand-600 absolute -top-6 left-3 flex items-center flex-col justify-center">
                            <svg  stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-zinc-300 w-[30px] h-[30px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"></path></svg></div>
                        <div  className="w-full p-6 text-2xl border text-white border-white">Talent without work is nothing</div>
                        <div className="w-[40px] h-[40px] rounded-full bg-brand-600 absolute -bottom-4 right-3 flex items-center flex-col justify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-zinc-300 w-[30px] h-[30px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.95 8.721c-.017-.109-.025-.168-.025-.168l-.026.006C21.465 6.526 19.662 5 17.5 5 15.015 5 13 7.015 13 9.5s2.015 4.5 4.5 4.5c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35-.208.086-.39.16-.539.222-.302.125-.474.197-.474.197l.484 1.939c0 0 .218-.052.597-.144.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747C21.998 9.056 21.971 8.857 21.95 8.721zM10.95 8.721c-.017-.109-.025-.168-.025-.168l-.026.006C10.465 6.526 8.662 5 6.5 5 4.015 5 2 7.015 2 9.5S4.015 14 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35-.208.086-.39.16-.539.222C2.93 17.958 2.758 18.03 2.758 18.03l.484 1.939c0 0 .218-.052.597-.144.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747C10.998 9.056 10.971 8.857 10.95 8.721z"></path></svg></div></div>
                    <div  className="p-4 ml-auto border border-t-0 text-white border-white w-max text-xl">- Cristiano Ronaldo.</div>
                </motion.div>





                {/* Projects headLine  */}

                <motion.div  initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} className="flex gap-5 items-center mt-20 mb-10" id="projects">
                <div id="targetDiv" className="flex items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-purple-400 text-lg lg:text-4xl" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.39 12.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 00.016-.164.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"></path></svg>
                <h1 className="text-xl text-white lg:text-3xl truncate">Projects</h1></div>
                <div className=" border-b border-purple-400 w-full lg:w-[350px] xl:w-[550px]"></div></motion.div>







                {/* My Projects */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 mt-5">
                  {cards.map((data,i)=>(
                   
                      <motion.div initial={{ opacity: 0, scale: 0.6 }}
                          whileInView={{ opacity: 1, scale: 1, }}
                          transition={{ type: "spring", bounce: 0.5, delay: i * 0.2 }} style={{ boxShadow: '5px 5px 0px 0px rgb(168 85 247)' }} className="border border-dashed rounded-lg flex flex-col h-max">
                          
                          <motion.div initial={{ opacity: 0, scale: 0.6 }}
                              whileInView={{ opacity: 1, scale: 1, }}
                              transition={{ type: "spring", bounce: 0.5, delay: i * 0.2 }} className="w-full h-[250px] relative">
                              <motion.img  variants={{ hidden: { opacity: 0, y: "50%" },  visible: {opacity: 1, y: 0, transition: { type: "spring", bounce: 0.8}}}} whileHover={{ scale: 1,  }}  src={data.img} alt="object" loading="lazy" decoding="async" data-nimg="fill" className=" rounded-lg object-cover mx-auto absolute bottom-3 right-3" style={{ scale: 0.95,position: 'absolute', height: '100%', width: "100%", left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}  sizes="100vw" /> 
                        </motion.div>
                        <div>
                          <h2 className="border-b border-dashed p-3 font-medium text-white text-2xl">{data.title}</h2>
                          <div className="border-b border-dashed p-3 font-medium text-zinc-400">{data.content}</div>
                          <div className="border-b border-dashed p-3 font-medium text-white">Languages & FrameWorks <br/><span className='text-purple-500 font-medium'>{data.languages}</span> </div>
                          </div>
                    </motion.div>
                  ))}
                </div>




                {/* Skills headLine  */}

                <motion.div initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} className="flex gap-5 items-center mt-20 mb-10" id="projects">
                    <div id='skilled' className="flex items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-purple-400 text-lg lg:text-4xl" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.39 12.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 00.016-.164.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"></path></svg>
                        <h1 className="text-xl text-white lg:text-3xl truncate">Skills</h1></div>
                    <div className=" border-b border-purple-400 w-full lg:w-[350px] xl:w-[550px]"></div>
                </motion.div>



                {/* Skills Content */}

                <div className="flex  flex-wrap items-start gap-3">

                    {/* Languages Content */}

                    <motion.div initial={{  x: -100 }}
                    whileInView={{  x: 0 }}
                        transition={{ duration: 0.5 }}  style={{ boxShadow: '5px 5px 0px 0px rgb(168 85 247)' }} className="border border-dashed rounded-lg h-max w-full lg:w-[300px]">
                        <div className="border-b border-dashed  border-white p-3">
                            <h1 style={{ textShadow: '2px 2px purple' }} className="font-bold text-white border-white">Languages</h1></div>
                        <div className="p-3">
                            {languages.map((data, i) =>
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }} key={data.id} className="list-disc list-inside">
                                    <li className="text-purple-600"><span className='text-zinc-400'>{data.Text}</span></li>
                                </motion.ul>
                            )}
                        </div>
                    </motion.div>


                    {/* Frameworks Content */}

                    <motion.div initial={{ y: -100 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.5 }}  style={{ boxShadow: '5px 5px 0px 0px rgb(168 85 247)' }} className="border border-dashed rounded-lg h-max w-full lg:w-[300px]">
                        <div className="border-b border-dashed   border-white p-3">
                            <h1 style={{ textShadow: '2px 2px purple' }} className="font-bold text-white border-white">Frameworks</h1></div>
                        <div className="p-3">
                            {FrameWorks.map((data, i) =>
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }} key={data.id} className="list-disc list-inside">
                                    <li className="text-purple-600"><span className='text-zinc-400'>{data.Text}</span></li>
                                </motion.ul>
                            )}
                        </div>
                    </motion.div>


                    {/* DataBases Content */}

                    <motion.div initial={{ x: -100 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.5 }}  style={{ boxShadow: '5px 5px 0px 0px rgb(168 85 247)' }} className="border border-dashed rounded-lg h-max w-full lg:w-[300px]">
                        <div className="border-b border-dashed  border-white p-3">
                            <h1 style={{ textShadow: '2px 2px purple' }} className="font-bold text-white border-white">Databases</h1></div>
                        <div className="p-3">
                            {DataBases.map((data, i) =>
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }} key={data.id} className="list-disc list-inside">
                                    <li className="text-purple-600"><span className='text-zinc-400'>{data.Text}</span></li>
                                </motion.ul>
                            )}
                        </div>
                    </motion.div>


                    {/* Tools  Content */}
                    <motion.div initial={{ y: -100 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.5 }}  style={{ boxShadow: '5px 5px 0px 0px rgb(168 85 247)' }} className="border border-dashed rounded-lg h-max w-full lg:w-[300px]">
                        <div className="border-b border-dashed border-white p-3">
                        <h1 style={{ textShadow: '2px 2px purple' }} className="font-bold  text-white border-white">Tools</h1></div>
                        <div className="p-3">
                            {Tools.map((data, i) =>
                                <motion.ul
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }} key={data.id} className="list-disc list-inside">
                                    <li className="text-purple-600"><span className='text-zinc-400'>{data.Text}</span></li>
                                </motion.ul>
                            )}
                        </div>
                    </motion.div>

                </div>




                   {/* About HeadLine */}
                    
                <motion.div initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} className="flex gap-5 items-center mt-24 " id="projects">
                    <div id='MYAbout' className="flex items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-purple-400 text-lg lg:text-4xl" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.39 12.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 00.016-.164.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"></path></svg>
                        <h1 className="text-xl text-white lg:text-3xl truncate">About</h1></div>
                    <div className=" border-b border-purple-400 w-full lg:w-[350px] xl:w-[550px]"></div></motion.div>





                {/* About components */}



                <div className="grid grid-cols-1 lg:grid-cols-8 gap-3 lg:mt-0 mt-8 items-center">
                <motion.div initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }} alt="About Mohammed Othman" className="text-zinc-400 col-span-1 lg:col-span-5">
                        <span className="md:text-[32px] font-medium text-2xl text-white block  mb-4">Hello, i'm <span style={{ textShadow:'2px 2px #8032e0'}}>Mohammed Othman</span></span>and I am a full-stack developer from Iraq. I currently reside in the beautiful city of Sulaymaniyah . Over the years, I have developed a dynamic skill set that enables me to create powerful and innovative solutions for my clients.
                        <br/>
                        <div className='inline-flex gap-6'>
                            <a href='#0'  className="w-max text-md cursor-pointer" onClick={downloadPdf}><div className="border  text-white  font-medium border-purple-500 px-3 py-1 mt-6 w-max">Download My CV !</div>
                            </a>
                            <motion.p initial={{ x: 10, }}
                                animate={{ x: -10, }}
                                transition={{ duration: 1.3, type: "spring", bounce: 0.5, repeat: Infinity }} className='' style={{ fontSize: '50px' }} >&#8592;</motion.p>

                        </div>
                </motion.div>
                
                <motion.div initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }} className="border-b overflow-hidden col-span-1 lg:col-span-3 border-purple-500 relative">
                        <img alt="object" loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="visible object-contain mx-auto absolute top-3 -left-10" src={require('../icons/dotes1.png')} />

                        <div className=" object-contain w-full h-full flex  mx-auto absolute rounded-es-lg rounded-se-lg top-16  -left-4  ">
                            <svg style={{ position: 'absolute' }} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="blobSvg">

                                <path id="blob" fill="#8032e0">
                                    <animate attributeName='d' repeatCount='indefinite'
                                        dur='10000ms'
                                        values='
                                           M429,308.5Q367,367,308.5,401.5Q250,436,169.5,423.5Q89,411,93,330.5Q97,250,107,183.5Q117,117,183.5,100.5Q250,84,335,82Q420,80,455.5,165Q491,250,429,308.5Z;
                                           M443.048,332.87741Q415.75481,415.75481,332.87741,439.09905Q250,462.44329,189.33247,416.88918Q128.66493,371.33507,96.30541,310.66753Q63.94589,250,73.94589,166.97295Q83.94589,83.94589,166.97295,73.23036Q250,62.51483,326.73647,79.52094Q403.47295,96.52705,436.90706,173.26353Q470.34118,250,443.048,332.87741Z;
                                           M422.79524,331.87044Q413.74088,413.74088,331.87044,434.74088Q250,455.74088,171.17089,431.69955Q92.34178,407.65822,61.97395,328.82911Q31.60611,250,60.43261,169.62956Q89.25912,89.25912,169.62956,52.61393Q250,15.96873,312.74088,70.24349Q375.48176,124.51824,403.66568,187.25912Q431.8496,250,422.79524,331.87044Z;
                                           M447,334Q418,418,334,424Q250,430,188,402Q126,374,96,312Q66,250,73,165Q80,80,165,72.5Q250,65,308,99.5Q366,134,421,192Q476,250,447,334Z;
                                           M443.42589,328.89413Q407.78825,407.78825,328.89413,412.25649Q250,416.72473,160.93887,422.4235Q71.87773,428.12227,62.81182,339.06113Q53.7459,250,77.59529,175.72234Q101.44467,101.44467,175.72234,92.9235Q250,84.40232,313.10587,104.09529Q376.21175,123.78825,427.63764,186.89413Q479.06352,250,443.42589,328.89413Z;
                                           M438.5,337Q424,424,337,423Q250,422,180,406Q110,390,89,320Q68,250,99.5,190.5Q131,131,190.5,83.5Q250,36,320.5,72.5Q391,109,422,179.5Q453,250,438.5,337Z;
                                           M429,308.5Q367,367,308.5,401.5Q250,436,169.5,423.5Q89,411,93,330.5Q97,250,107,183.5Q117,117,183.5,100.5Q250,84,335,82Q420,80,455.5,165Q491,250,429,308.5Z;
                                        '>

                                    </animate>
                                </path>
                            </svg>
                            <svg style={{ position: 'absolute', filter: 'blur(13px)' }} viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="blobSvg">

                                <path id="blob" fill="#8032e0">
                                    <animate attributeName='d' repeatCount='indefinite'
                                        dur='10000ms'
                                        values='
                                           M429,308.5Q367,367,308.5,401.5Q250,436,169.5,423.5Q89,411,93,330.5Q97,250,107,183.5Q117,117,183.5,100.5Q250,84,335,82Q420,80,455.5,165Q491,250,429,308.5Z;
                                           M443.048,332.87741Q415.75481,415.75481,332.87741,439.09905Q250,462.44329,189.33247,416.88918Q128.66493,371.33507,96.30541,310.66753Q63.94589,250,73.94589,166.97295Q83.94589,83.94589,166.97295,73.23036Q250,62.51483,326.73647,79.52094Q403.47295,96.52705,436.90706,173.26353Q470.34118,250,443.048,332.87741Z;
                                           M422.79524,331.87044Q413.74088,413.74088,331.87044,434.74088Q250,455.74088,171.17089,431.69955Q92.34178,407.65822,61.97395,328.82911Q31.60611,250,60.43261,169.62956Q89.25912,89.25912,169.62956,52.61393Q250,15.96873,312.74088,70.24349Q375.48176,124.51824,403.66568,187.25912Q431.8496,250,422.79524,331.87044Z;
                                           M447,334Q418,418,334,424Q250,430,188,402Q126,374,96,312Q66,250,73,165Q80,80,165,72.5Q250,65,308,99.5Q366,134,421,192Q476,250,447,334Z;
                                           M443.42589,328.89413Q407.78825,407.78825,328.89413,412.25649Q250,416.72473,160.93887,422.4235Q71.87773,428.12227,62.81182,339.06113Q53.7459,250,77.59529,175.72234Q101.44467,101.44467,175.72234,92.9235Q250,84.40232,313.10587,104.09529Q376.21175,123.78825,427.63764,186.89413Q479.06352,250,443.42589,328.89413Z;
                                           M438.5,337Q424,424,337,423Q250,422,180,406Q110,390,89,320Q68,250,99.5,190.5Q131,131,190.5,83.5Q250,36,320.5,72.5Q391,109,422,179.5Q453,250,438.5,337Z;
                                           M429,308.5Q367,367,308.5,401.5Q250,436,169.5,423.5Q89,411,93,330.5Q97,250,107,183.5Q117,117,183.5,100.5Q250,84,335,82Q420,80,455.5,165Q491,250,429,308.5Z;
                                        '>

                                    </animate>
                                </path>
                            </svg></div>
                <img alt="object" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className=" object-contain mx-auto absolute bottom-3 -right-12" src={require('../icons/dotes1.png')}/>
                        <img alt="me11 of mohammed othman." loading="lazy" width="450" height="450" decoding="async"  className="object-contain mx-auto grayscale" color='transparent' src={require('../icons/me11.png')}/>
                </motion.div></div>






                {/* Contact HeadLine */}

                <motion.div initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} className="flex gap-5 items-center mt-20 mb-10" id="projects">
                    <div id='MyContact' className="flex items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-purple-400 text-lg lg:text-4xl" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.39 12.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 00.016-.164.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"></path></svg>
                        <h1 className="text-xl text-white lg:text-3xl truncate">Contact</h1></div>
                    <div className=" border-b border-purple-400 w-full lg:w-[350px] xl:w-[550px]"></div></motion.div>





                {/* Contact components */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-3 items-center">
                    <motion.div initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }} alt="Contact Mohammed Othman" className="text-zinc-400 col-span-1 lg:col-span-6 w-full lg:w-[600px]">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me.</motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1, }}
                        transition={{ type: "spring", bounce: 0.5, }} drag dragElastic={0.80} dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} whileHover={{cursor: 'grabbing' , boxShadow: '0px 0px 0px 0px rgb(168 85 247)', borderColor: 'rgb(168 85 247)' }} style={{ boxShadow: '-6px 6px 0px 0px rgb(168 85 247)' }} className="border col-span-1 lg:col-span-2 border-white rounded-xl relative p-4">
                    <p className="text-lg text-white"><span className='text-2xl font-medium  text-purple-500'># </span>Message me here</p>
                       
                        <div className="flex flex-col gap-3 mt-4">
                            <a  href="https://wa.me/9647711570338">
                                <div className="flex gap-3 items-center text-zinc-400 hover:text-white">
                                    <motion.svg whileHover={{ scale: 1.5 }} stroke="currentColor" fill="currentColor" strokeWidth="0" t="1569683925316" className=" text-2xl" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <defs><style type="text/css"></style></defs>
                                    <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path>
                                    <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></motion.svg>
                                    <Typewriter
                                        words={['WhatsApp']}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={50}
                                        deleteSpeed={144}
                                        loop

                                    /> 
                                </div></a>
                            
                            <a  href="https://t.me/Mohammed_O_N">
                                <div className="flex gap-3 items-center text-zinc-400 hover:text-white">
                                    <motion.svg whileHover={{ scale: 1.5 }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.665,3.717l-17.73,6.837c-1.21,0.486-1.203,1.161-0.222,1.462l4.552,1.42l10.532-6.645	c0.498-0.303,0.953-0.14,0.579,0.192l-8.533,7.701l0,0l0,0H9.841l0.002,0.001l-0.314,4.692c0.46,0,0.663-0.211,0.921-0.46	l2.211-2.15l4.599,3.397c0.848,0.467,1.457,0.227,1.668-0.785l3.019-14.228C22.256,3.912,21.474,3.351,20.665,3.717z"></path></motion.svg>
                                    <Typewriter
                                        words={['Telegram']}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={51}
                                        deleteSpeed={146}
                                        loop

                                    /> 
                                </div>
                            </a>

                            <a  href="mailto:Muhammadothman600@gmail.com">
                                <div className="flex gap-3 items-center text-zinc-400 hover:text-white">
                                    <motion.svg whileHover={{ scale: 1.5 }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 50 50"
                                        fill="currentColor">
                                        <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                                    </motion.svg>
                                    <Typewriter
                                        words={['Gmail']}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={52}
                                        deleteSpeed={148}
                                        loop

                                    />
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </div>



                {/* Footer components */}

                <hr className="mt-20"/>
                <footer className="flex mb-14 lg:mb-4 flex-row justify-between items-center">
                <div>
                <div className="flex flex-col lg:flex-col gap-2 items-center">
                <div className="flex gap-2 items-center">
                <img alt="logo" loading="lazy" width="50" height="50" decoding="async" data-nimg="1"  src={require('../icons/M.png')}/>
                <h1 className='text-white'>Mohammed</h1></div>
                           </div></div>
                <div className="flex mt-3 lg:mt-0 gap-3 items-center">
                        <a className='text-zinc-400 hover:text-white'   href="https://instagram.com/mohammed_o_namiq?igshid=MmU2YjMzNjRlOQ==">
                            <motion.svg initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5, }} whileHover={{ scale: 1.5 }} xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="27" height="27" viewBox="0 0 50 50">
                                <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                            </motion.svg></a>
                        <a className='text-zinc-400 hover:text-white'  href="https://youtube.com/rstacode">
                            <motion.svg initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5, }} whileHover={{scale:1.5}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" x="0px" y="0px" width="27" height="27" viewBox="0 0 50 50">
                            <path d="M 46.773438 35.078125 C 40.96875 34.121094 38.316406 28.109375 38.230469 27.914063 C 38.21875 27.878906 38.191406 27.816406 38.175781 27.78125 C 38 27.429688 37.824219 26.933594 37.972656 26.582031 C 38.226563 25.980469 39.433594 25.597656 40.15625 25.367188 C 40.410156 25.285156 40.652344 25.210938 40.839844 25.136719 C 42.59375 24.441406 43.46875 23.535156 43.449219 22.433594 C 43.433594 21.546875 42.753906 20.734375 41.753906 20.382813 C 41.40625 20.234375 41.007813 20.160156 40.605469 20.160156 C 40.332031 20.160156 39.917969 20.199219 39.519531 20.382813 C 38.851563 20.695313 38.265625 20.863281 37.847656 20.882813 C 37.757813 20.878906 37.679688 20.871094 37.613281 20.859375 L 37.65625 20.171875 C 37.851563 17.0625 38.097656 13.1875 37.046875 10.832031 C 33.945313 3.890625 27.375 3.351563 25.433594 3.351563 L 24.550781 3.359375 C 22.613281 3.359375 16.054688 3.898438 12.960938 10.835938 C 11.910156 13.191406 12.152344 17.0625 12.351563 20.175781 L 12.359375 20.292969 C 12.371094 20.484375 12.382813 20.675781 12.394531 20.859375 C 11.960938 20.9375 11.113281 20.792969 10.234375 20.382813 C 9.039063 19.824219 6.886719 20.5625 6.589844 22.125 C 6.457031 22.816406 6.617188 24.128906 9.164063 25.132813 C 9.355469 25.210938 9.59375 25.285156 9.851563 25.367188 C 10.570313 25.597656 11.777344 25.976563 12.03125 26.582031 C 12.179688 26.933594 12.003906 27.429688 11.796875 27.855469 C 11.6875 28.109375 9.050781 34.121094 3.234375 35.078125 C 2.492188 35.199219 1.964844 35.855469 2.003906 36.613281 C 2.015625 36.8125 2.066406 37.011719 2.148438 37.207031 C 2.675781 38.445313 4.59375 39.296875 8.171875 39.878906 C 8.234375 40.089844 8.304688 40.402344 8.34375 40.574219 C 8.417969 40.929688 8.5 41.289063 8.609375 41.664063 C 8.714844 42.019531 9.078125 42.84375 10.210938 42.84375 C 10.554688 42.84375 10.929688 42.769531 11.332031 42.691406 C 11.925781 42.574219 12.667969 42.429688 13.621094 42.429688 C 14.152344 42.429688 14.699219 42.476563 15.25 42.566406 C 16.265625 42.734375 17.183594 43.386719 18.25 44.136719 C 19.914063 45.316406 21.800781 46.648438 24.726563 46.648438 C 24.804688 46.648438 24.882813 46.644531 24.957031 46.640625 C 25.0625 46.644531 25.171875 46.648438 25.28125 46.648438 C 28.207031 46.648438 30.09375 45.3125 31.761719 44.136719 C 32.777344 43.414063 33.738281 42.738281 34.757813 42.566406 C 35.308594 42.476563 35.855469 42.429688 36.386719 42.429688 C 37.304688 42.429688 38.03125 42.546875 38.679688 42.675781 C 39.140625 42.765625 39.507813 42.808594 39.847656 42.808594 C 40.605469 42.808594 41.1875 42.375 41.398438 41.648438 C 41.507813 41.28125 41.585938 40.925781 41.664063 40.566406 C 41.695313 40.433594 41.769531 40.097656 41.835938 39.875 C 45.414063 39.292969 47.332031 38.441406 47.855469 37.214844 C 47.941406 37.019531 47.988281 36.816406 48.003906 36.605469 C 48.042969 35.859375 47.515625 35.203125 46.773438 35.078125 Z"></path>
                            </motion.svg></a>
                        <a className='text-zinc-400 hover:text-white'   href="https://www.facebook.com/profile.php?id=100010818873982&mibextid=ZbWKwL">
                            <motion.svg initial={{ opacity: 0, scale: 0.6 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }} whileHover={{ scale: 1.5 }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" id="social" height="2em" width="2em" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.001,2.002c-5.522,0-9.999,4.477-9.999,9.999c0,4.99,3.656,9.126,8.437,9.879v-6.988h-2.54v-2.891h2.54V9.798	c0-2.508,1.493-3.891,3.776-3.891c1.094,0,2.24,0.195,2.24,0.195v2.459h-1.264c-1.24,0-1.628,0.772-1.628,1.563v1.875h2.771	l-0.443,2.891h-2.328v6.988C18.344,21.129,22,16.992,22,12.001C22,6.479,17.523,2.002,12.001,2.002z"></path></motion.svg></a></div></footer>
              
            </div>
        </div>
    );
}

export default Home;
