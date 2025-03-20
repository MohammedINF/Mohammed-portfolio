import { motion } from 'framer-motion'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

export default function Contact({i18n,t}) {
  return (
    <div>

 <motion.div initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} className="flex gap-5 items-center mt-20 mb-10" id="projects">
                    <div id='MyContact' className="flex items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-purple-400 text-lg lg:text-4xl" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.39 12.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 00.016-.164.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"></path></svg>
                        <h1 className={`text-xl ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-white lg:text-3xl `}>{t('contact')}</h1></div>
                    <div className=" border-b border-purple-400 w-full lg:w-[350px] xl:w-[550px]"></div></motion.div>





                {/* Contact components */}
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-3 items-center">
                    <motion.div initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }} alt="Contact Mohammed Othman" className={`text-zinc-400 ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-xl col-span-1 lg:col-span-6 w-full lg:w-[600px]`}>{t('contactInfo')}</motion.div>
                    <motion.div initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1, }}
                        transition={{ type: "spring", bounce: 0.5, }} drag dragElastic={0.80} dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }} whileHover={{ cursor: 'grabbing', boxShadow: '0px 0px 0px 0px rgb(168 85 247)', borderColor: 'rgb(168 85 247)' }} style={{ boxShadow: '-6px 6px 0px 0px rgb(168 85 247)' }} className="border col-span-1 lg:col-span-2 border-white rounded-xl relative p-4">
                        <p className={`text-lg  ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-white`}><span className={`text-2xl ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'}  text-purple-500`}># </span>{t('messageContent')}</p>

                        <div className="flex flex-col gap-3 mt-4">
                            <a href="https://wa.me/9647711570338">
                                <div className={`flex gap-3 items-center ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-zinc-400 hover:text-white `}>
                                    <motion.svg whileHover={{ scale: 1.5 }} stroke="currentColor" fill="currentColor" strokeWidth="0" t="1569683925316" className=" text-2xl" viewBox="0 0 1024 1024" version="1.1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <defs><style type="text/css"></style></defs>
                                        <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path>
                                        <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path></motion.svg>
                                    <Typewriter
                                        words={t('whatsapp', { returnObjects: true })}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={50}
                                        deleteSpeed={144}
                                        loop
                                        

                                    />
                                </div></a>

                            <a href="https://t.me/Mohammed_O_N">
                                <div className={`flex gap-3 items-center ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-zinc-400 hover:text-white `}>
                                    <motion.svg whileHover={{ scale: 1.5 }} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class=" text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.665,3.717l-17.73,6.837c-1.21,0.486-1.203,1.161-0.222,1.462l4.552,1.42l10.532-6.645	c0.498-0.303,0.953-0.14,0.579,0.192l-8.533,7.701l0,0l0,0H9.841l0.002,0.001l-0.314,4.692c0.46,0,0.663-0.211,0.921-0.46	l2.211-2.15l4.599,3.397c0.848,0.467,1.457,0.227,1.668-0.785l3.019-14.228C22.256,3.912,21.474,3.351,20.665,3.717z"></path></motion.svg>
                                    <Typewriter
                                        words={t('telegram', { returnObjects: true })}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={51}
                                        deleteSpeed={146}
                                        loop

                                    />
                                </div>
                            </a>

                            <a href="mailto:Muhammadothman600@gmail.com">
                                <div className={`flex gap-3 items-center ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-zinc-400 hover:text-white `}>
                                    <motion.svg whileHover={{ scale: 1.5 }} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="23" viewBox="0 0 50 50"
                                        fill="currentColor">
                                        <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
                                    </motion.svg>
                                    <Typewriter
                                        words={t('gmail', { returnObjects: true })}
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

    </div>
  )
}
