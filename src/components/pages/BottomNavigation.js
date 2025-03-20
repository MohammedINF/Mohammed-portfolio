import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip'; // Assuming you're using react-tooltip
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

export default function BottomNavigation({ scrollToSkills, scrollToDiv,scrollToAbout,scrollToContacts,scrollToHome}) {

    const { t, i18n } = useTranslation();

 

    const [hover, setHover] = useState(false);
    const [hover1, setHover1] = useState(false);
    const [hover2, setHover2] = useState(false);
    const [hover3, setHover3] = useState(false);
    const [hover4, setHover4] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const isMd = useMediaQuery({ maxWidth: 670 });
    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setIsOpen(false)
    };
    return (

        <div className="flex fixed  z-50  w-full -translate-x-1/2  h-14  max-w-lg bottom-4 left-1/2 ">
            <div className=" w-full mx-5 backdrop-blur-[1px] bg-white/90  border border-[#8032e0] rounded-3xl ">

            {!isMd && (
                <motion.nav initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }} animate={isOpen ? "open" : "closed"} className={`transition-all duration-150 ease-in-out flex flex-col-reverse justify-between items-center fixed z-50 ${i18n.language === 'en' ? ' bottom-2 -right-24 ' : ' -left-24 bottom-2'}  align-top`}>

                    <motion.button className='bg-white p-1 mx-auto rounded-full flex group transition-all duration-150 ease-in-out hover:bg-[#8032e0] border-[#8032e0] border-[1px]' whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>

                        <motion.div className='w-8 h-8 group transition-all duration-150 ease-in-out' style={{ originY: 0.55 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='group-hover:fill-white fill-[#8032e0]'>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="layer_1-2" data-name="layer 1">
                                        <path class="cls-1" d="M24 48a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-46a22 22 0 1 0 22 22A22 22 0 0 0 24 2z" />
                                        <path class="cls-1" d="M24 48c-7.85 0-14-10.54-14-24S16.15 0 24 0s14 10.54 14 24-6.15 24-14 24zm0-46c-6.62 0-12 9.87-12 22s5.38 22 12 22 12-9.87 12-22S30.62 2 24 2z" />
                                        <path class="cls-1" d="M23 4h2v43h-2z" /><path class="cls-1" d="M1 23h33v2H1zM37 23h10v2H37zM7 12h37v2H7zM4 34h8v2H4zM16 34h28v2H16z" /></g></g></svg>
                        </motion.div>

                    </motion.button>

                    <motion.ul variants={{
                        open: { clipPath: "inset(0% 0% 0% 0% round 10px)", transition: { type: "spring", bounce: 0, duration: 0.7, delayChildren: 0.3, staggerChildren: 0.05 } },
                        closed: { clipPath: "inset(10% 50% 90% 50% round 10px)", transition: { type: "spring", bounce: 0, duration: 0.3 } }
                    }}
                        style={{ pointerEvents: isOpen ? "auto" : "none" }} onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}
                        className={`backdrop-blur-[1px] bg-white/90 border border-[#8032e0] rounded-lg p-1 ${i18n.language === 'en' ? ' mr-2' : 'ml-2'}  mx-auto mb-4`}>

                        <motion.li className={`text-[#8032e0] font-hamaFont hover:bg-[#8032e0] ${i18n.language === 'en' && 'bg-[#8032e0] text-white rounded-lg'} pt-[1px] pb-[1px] pl-[3px] pr-[3px] hover:text-white transition-all duration-150 ease-in-out hover:rounded-lg`}>
                            <button value='en' className='flex justify-between items-center gap-x-5 w-full' onClick={(e) => changeLanguage(e.target.value)} > English <img onClick={(e) => changeLanguage('en')} width="20" height="20" src="https://img.icons8.com/color/48/great-britain.png" alt="great-britain" /></button>
                        </motion.li>

                        <motion.li className={`text-[#8032e0] mt-1 font-custom ${i18n.language === 'kr' && 'bg-[#8032e0] text-white rounded-lg'} pt-[1px] pb-[1px] pl-[3px] pr-[3px] hover:bg-[#8032e0] hover:text-white transition-all duration-150 ease-in-out hover:rounded-lg`}>
                            <button value='kr' className='flex justify-between items-center gap-x-5 w-full' onClick={(e) => changeLanguage(e.target.value)}> کوردی <img onClick={(e) => changeLanguage('kr')} className='flex-shrink-0' width="20" height="20" src="https://img.icons8.com/color/48/kurdistan.png" alt="kurdistan" /></button>
                        </motion.li>

                        <motion.li className={`text-[#8032e0] mt-1 font-Arabic hover:bg-[#8032e0] ${i18n.language === 'ar' && 'bg-[#8032e0] text-white rounded-lg'} pt-[1px] pb-[1px] pl-[3px] pr-[3px] hover:text-white transition-all duration-150 ease-in-out hover:rounded-lg`} >
                            <button value='ar' className='flex justify-between items-center gap-x-5 w-full' onClick={(e) => changeLanguage(e.target.value)}> العربیة <img onClick={(e) => changeLanguage('ar')} className='flex-shrink-0' width="20" height="20" src="https://img.icons8.com/color/48/iraq.png" alt="iraq" /></button>
                        </motion.li>

                    </motion.ul>
                </motion.nav>
            )}




            <div className="grid h-full w-full grid-cols-5  mx-auto">

                <motion.button onHoverStart={() => setHover(true)} onHoverEnd={() => (setHover(false))} onClick={scrollToSkills} whileHover={{ scale: 1.3, }} data-tooltip-id='skills' type="button" className="inline-flex items-center my-auto mx-auto justify-center w-8 h-8 font-medium rounded-full  ">
                    {!hover ? (
                        <motion.svg className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                            <motion.path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#8032e0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></motion.path>
                            <motion.path d="M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z" stroke="#8032e0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" stroke-linejoin="round">

                            </motion.path> </g></motion.svg>
                    ) :
                        <motion.svg className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    content={t('skillTooltip')}
                    className={`${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'}`}
                    delayHide={1}
                    classNameArrow='arrow'
                    style={{ color: '#6621BA', backgroundColor: 'white', fontSize: 16, fontWeight: 'bold', borderRadius: '20px' }}
                />



                <motion.button onHoverStart={() => setHover1(true)} onHoverEnd={() => (setHover1(false))} onClick={scrollToDiv} data-tooltip-id='projects' whileHover={{ scale: 1.3, }} type="button" className="inline-flex items-center my-auto mx-auto justify-center w-8 h-8 font-medium rounded-full ">
                    {!hover1 ? (
                        <motion.svg className='w-full flex h-full ' fill="#8032e0" viewBox="0 0 14.00 14.00" xmlns="http://www.w3.org/2000/svg" stroke="#8032e0" strokeWidth="0.00014">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#8032e0" strokeWidth="0.14"></g>
                            <g id="SVGRepo_iconCarrier"> <g>
                                <path d="M7,1V5h4V1Zm3,3H8V2h2ZM7,7v4h4V7Zm3,3H8V8h2ZM1,1V5H5V1ZM4,4H2V2H4ZM1,7v4H5V7Zm3,3H2V8H4Z">
                                </path> </g> </g></motion.svg>
                    ) :
                        <motion.svg className='w-full flex h-full ' fill="#8032e0" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
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
                    content={t('projectTooltip')}
                    className={`${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'}`}
                    delayHide={1}
                    classNameArrow='arrow'
                    style={{ color: '#6621BA', backgroundColor: 'white', fontSize: 16, fontWeight: 'bold', borderRadius: '20px' }}
                />






                <div className="flex items-center justify-center">
                    <motion.button onHoverStart={() => setHover2(true)} onHoverEnd={() => setHover2(false)} onClick={scrollToHome} data-tooltip-id='home' whileHover={{ scale: 1.3, }} type="button" className="inline-flex items-center my-auto mx-auto justify-center w-8 h-8 font-medium rounded-full  ">
                        {!hover2 ? (
                            <motion.svg fill={'#8032e0'} xmlns="http://www.w3.org/2000/svg" className='w-full flex h-full ' viewBox="0 0 24 24">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" stroke-strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"><circle id="secondary" cx="12" cy="12" r="9" strokeWidth='2' fill='transparent'></circle><polyline id="primary" points="15 13 12 10 9 13" stroke='#8032e0' fill='none' strokeWidth='2'></polyline>
                                    <circle id="primary-2" data-name="primary" cx="12" cy="12" r="9" stroke='#8032e0' fill='none' strokeWidth='2'>

                                    </circle></g>
                            </motion.svg>
                        ) :
                            <motion.svg fill={'#8032e0'} xmlns="http://www.w3.org/2000/svg" className='w-full flex h-full ' viewBox="0 0 24 24">
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
                    content={t('topTooltip')}
                    className={`${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'}`}
                    delayHide={1}
                    classNameArrow='arrow'
                    style={{ color: '#6621BA', backgroundColor: 'white', fontSize: 16, fontWeight: 'bold', borderRadius: '20px' }}
                />





                <motion.button onHoverStart={() => setHover3(true)} onHoverEnd={() => setHover3(false)} onClick={scrollToContacts} whileHover={{ scale: 1.3, }} data-tooltip-id="chat" type="button" className="inline-flex items-center my-auto mx-auto justify-center w-8 h-8 font-medium rounded-full  ">
                    {!hover3 ? (
                        <motion.svg className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M8 12H8.009M11.991 12H12M15.991 12H16" stroke="#8032e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" stroke="#8032e0" strokeWidth="1.5">

                                </path> </g></motion.svg>
                    ) :



                        <motion.svg className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    content={t('contactTooltip')}
                    className={`${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'}`}
                    delayHide={1}
                    classNameArrow='arrow'
                    style={{ color: '#6621BA', backgroundColor: 'white', fontSize: 16, fontWeight: 'bold', borderRadius: '20px' }}
                />



                <div className="flex items-center justify-center">
                    <motion.button onHoverStart={() => setHover4(true)} onHoverEnd={() => setHover4(false)} onClick={scrollToAbout} whileHover={{ scale: 1.3, }} data-tooltip-id='about' type="button" className="inline-flex items-center my-auto mx-auto justify-center w-8 h-8 font-medium rounded-full ">
                        {!hover4 ? (
                            <motion.svg className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <circle cx="12" cy="12" r="10" stroke="#8032e0" strokeWidth="1.5"></circle>
                                    <path d="M12 17V11" stroke="#8032e0" strokeWidth="1.5" strokeLinecap="round"></path>
                                    <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#8032e0">
                                    </circle> </g></motion.svg>
                        ) :
                            <motion.svg className='w-full flex h-full ' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        content={t('aboutTooltip')}
                        className={`${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'}`}
                        delayHide={1}
                        classNameArrow='arrow'
                        style={{ color: '#6621BA', backgroundColor: 'white', fontSize: 16, fontWeight: 'bold', borderRadius: '20px' }}
                    />

                </div>



            </div>
                
            </div>
        </div>

    )
}
