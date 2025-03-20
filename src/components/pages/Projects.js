import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Projects() {
    const { t, i18n } = useTranslation();
    const cards = t('cards', { returnObjects: true });
    return (
        <div>
            <motion.div initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }} className="flex gap-5 items-center mt-20 mb-10" id="projects">
                <div id="targetDiv" className="flex items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-purple-400 text-lg lg:text-4xl" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.39 12.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 00.016-.164.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"></path></svg>
                    <h1 className={`text-xl ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-white lg:text-3xl `}>{t('projects')}</h1></div>
                <div className=" border-b border-purple-400 w-full lg:w-[350px] xl:w-[550px]"></div>
            </motion.div>



            {/* My Projects */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-5 gap-y-10 mt-5">
                {cards.map((data, i) => (

                    <motion.div initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1, }}
                        transition={{ type: "spring", bounce: 0.5, delay: i * 0.2 }}
                        style={{ boxShadow: '5px 5px 0px 0px rgb(168 85 247)' }}
                        className={`${data.url ? 'cursor-pointer' : 'cursor-default'} border-[3px]   border-purple-500 rounded-xl flex flex-col h-max`}
                        onClick={() => data.url && window.open(data.url, "_blank")}

                    >
                        <div className='w-10 h-10 absolute z-20 mx-auto  backdrop-blur-md -mt-5 rounded-full bg-white/20 '>
                            <img className='w-8 h-8 mx-[4px] my-[4px]' src={data.icon} alt='' />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", bounce: 0.5, delay: i * 0.2 }}
                            className="w-full h-[250px] relative rounded-lg rounded-b-3xl  overflow-hidden"
                        >
                            {data.url && <div className="absolute z-10 top-2 right-2 flex items-center  backdrop-blur-lg ring-1 ring-purple-500 p-1 justify-between gap-2 h-6  bg-purple-500/30 rounded-lg">
                             
                                <motion.div className='w-4 h-4 group transition-all duration-150 ease-in-out' style={{ originY: 0.55 }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className=' fill-[#8032e0]'>
                                        <g id="Layer_2" data-name="Layer 2">
                                            <g id="layer_1-2" data-name="layer 1">
                                                <path class="cls-1" d="M24 48a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm0-46a22 22 0 1 0 22 22A22 22 0 0 0 24 2z" />
                                                <path class="cls-1" d="M24 48c-7.85 0-14-10.54-14-24S16.15 0 24 0s14 10.54 14 24-6.15 24-14 24zm0-46c-6.62 0-12 9.87-12 22s5.38 22 12 22 12-9.87 12-22S30.62 2 24 2z" />
                                                <path class="cls-1" d="M23 4h2v43h-2z" /><path class="cls-1" d="M1 23h33v2H1zM37 23h10v2H37zM7 12h37v2H7zM4 34h8v2H4zM16 34h28v2H16z" /></g></g></svg>
                                </motion.div>

                                <p className='text-purple-600 text-sm font-hamaFont'>Live Demo</p>
                           
                            </div>}

                            <motion.img
                                variants={{
                                    hidden: { opacity: 0, y: "50%" },
                                    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.8 }, }
                                }}
                                whileHover={{ scale: 1.1 }}  // Zoom effect on hover
                                src={data.img}
                                alt="object"
                                loading="lazy"
                                decoding="async"
                                data-nimg="fill"
                                className=" object-cover mx-auto absolute scale-100 transition-transform duration-300 ease-in-out"
                                style={{
                                    position: 'absolute',
                                    height: '100%',
                                    width: "100%",
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    color: 'transparent',
                                    scale: 1.02
                                }}
                                sizes="100vw"
                            />
                        </motion.div>

                        <div>
                            <div className="flex items-center   justify-center">
                                <h2 className={`border-b-[2.3px] border-purple-500 p-3 ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-white text-2xl`}>
                                    {data.title}
                                </h2>

                                {data.url && (
                                    <motion.p
                                        onClick={() => data.url && window.open(data.url, "_blank")}

                                        initial={{ x: 0 }}
                                        animate={{ x: -5 }}
                                        transition={{ duration: 1.3, type: "spring", bounce: 0.5, repeat: Infinity }}
                                        className="ml-2 "
                                        style={{ fontSize: '24px' }} // Adjusted size for better positioning
                                    >
                                        <svg
                                            className={`w-9 h-6 bg-purple-500 rounded-full p-1 cursor-pointer text-white ${i18n.language === 'en' ? 'ml-2' : 'mr-2'} mt-2 duration-300 ease-in-out ${i18n.language !== 'en' ? 'rotate-180' : ''}`}
                                            fill="#fff"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                        </svg>
                                    </motion.p>
                                )}
                            </div>

                            <div className={` p-3 ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} justify-center text-center flex  text-zinc-400`}>{data.content}</div>

                            {Array.isArray(data.languages) && data.languages.length > 0 && (
                                <div className="flex justify-center border-purple-500 p-3 font-medium text-white">
                                    <div>
                                        <p className={`justify-center ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-lg mx-8 border-purple-500 border-b-[2.3px] p-2 mb-2  flex`}>{t('LanguagesFrameworks')}</p>

                                        <div className="flex flex-wrap justify-center">
                                            {data.languages.map((language, index) => (
                                                <span key={index} className='text-white font-hamaFont mx-1 mt-2 rounded-3xl pl-2 pr-2  bg-purple-500/30'>
                                                    {language}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </motion.div>
                ))}
            </div>


        </div>
    )
}
