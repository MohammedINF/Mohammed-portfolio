import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';

export default function Header() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const isMd = useMediaQuery({ maxWidth: 670 });

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setIsOpen(false)
    };
    return (
        <div>
            <div className="flex flex-col lg:flex-row  justify-between    fixed z-50">
                <div className="flex gap-2  items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <img alt="logo" className='rounded-full drop-shadow-[4px_3px_0px_#9333ea] w-11 h-11' loading="lazy" decoding="async" data-nimg="1" src={require('../../icons/M.png')} />
                        <h1 style={{ textShadow: '1px 1px purple' }} className='text-white backdrop-blur-lg px-1 rounded-xl  font-medium font-hamaFont text-xl'>Mohammed</h1>
                    </div>
                </div>
            </div>

            {isMd && (
                <motion.nav initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }} animate={isOpen ? "open" : "closed"} className={`transition-all duration-150 ease-in-out flex flex-row-reverse justify-between items-center fixed z-50 ${i18n.language === 'en' ? ' -top-7  right-4 ' : ' left-4 -top-7'}  align-top`}>

                    <motion.button className='bg-white p-1 mx-auto rounded-full flex group transition-all duration-150 ease-in-out hover:bg-[#8032e0] border-[#8032e0] border-[1px]' whileTap={{ scale: 0.97 }} onClick={() => setIsOpen(!isOpen)}>

                        <motion.div className='w-8 h-8 group transition-all duration-150 ease-in-out' style={{ originY: 0.55 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className='group-hover:fill-white fill-[#8032e0]'>
                                <g id="Layer_2" data-name="Layer 2">
                                    <g id="layer_1-2" data-name="layer 1">
                                        <path class="cls-1" d="M24 48a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-46a22 22 0 1 0 22 22A22 22 0 0 0 24 2z" />
                                        <path class="cls-1" d="M24 48c-7.85 0-14-10.54-14-24S16.15 0 24 0s14 10.54 14 24-6.15 24-14 24zm0-46c-6.62 0-12 9.87-12 22s5.38 22 12 22 12-9.87 12-22S30.62 2 24 2z" />
                                        <path class="cls-1" d="M23 4h2v43h-2z" /><path class="cls-1" d="M1 23h33v2H1zM37 23h10v2H37zM7 12h37v2H7zM4 34h8v2H4zM16 34h28v2H16z" /></g></g>
                            </svg>


                        </motion.div>

                    </motion.button>

                    <motion.ul variants={{
                        open: { clipPath: "inset(0% 0% 0% 0% round 10px)", transition: { type: "spring", bounce: 0, duration: 0.7, delayChildren: 0.3, staggerChildren: 0.05 } },
                        closed: { clipPath: "inset(10% 50% 90% 50% round 10px)", transition: { type: "spring", bounce: 0, duration: 0.3 } }
                    }}
                        style={{ pointerEvents: isOpen ? "auto" : "none" }} onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}
                        className={`backdrop-blur-[1px] bg-white/90 border border-[#8032e0] rounded-lg p-1 ${i18n.language === 'en' ? ' mr-2' : 'ml-2'}  mx-auto mt-10`}>

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

        </div>
    )
}
