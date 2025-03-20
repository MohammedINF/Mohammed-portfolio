import { motion } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Skills() {
     const { t, i18n } = useTranslation();
    
    
        const languages = t('languages', { returnObjects: true });
    
    
    
        const FrameWorks = t('FrameWorks', { returnObjects: true });
    
    
        const DataBases = t('DataBases', { returnObjects: true });
    
    
        const Tools = t('Tools', { returnObjects: true });
    
    return (
        <div>

            <motion.div initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }} className="flex gap-5 items-center mt-20 mb-10" id="projects">
                <div id='skilled' className="flex items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-purple-400 text-lg lg:text-4xl" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.39 12.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 00.016-.164.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"></path></svg>
                    <h1 className={`text-xl text-white lg:text-3xl ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'}`}>{t('skills')}</h1></div>
                <div className=" border-b border-purple-400 w-full lg:w-[350px] xl:w-[550px]"></div>
            </motion.div>



            {/* Skills Content */}

            <div className="flex  flex-wrap items-start gap-3">



                {/* Languages Content */}

                <motion.div initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }} style={{ boxShadow: '5px 5px 0px 0px rgb(168 85 247)' }} className="border border-dashed rounded-lg h-max w-full lg:w-[300px]">
                    <div className="flex justify-center border-white mx-5 border-b border-dashed p-3">
                        <h1 style={{ textShadow: '2px 2px purple' }} className={`font-bold ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-xl text-center text-white border-white`}>{t('Language')}</h1></div>
                    <div className="p-3">
                        {languages.map((data, i) =>
                            <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }} key={data.id} className="list-disc list-inside">
                                <li className="text-purple-600 p-1 font-hamaFont text-lg"><span className='text-zinc-400 duration-150 hover:text-white transition-all ease-in  hover:rounded-3xl hover:pl-2 hover:pr-2 hover:bg-purple-500/30 '>{data.Text}</span> </li>
                            </motion.ul>
                        )}
                    </div>
                </motion.div>


                {/* Frameworks Content */}

                <motion.div initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }} style={{ boxShadow: '5px 5px 0px 0px rgb(168 85 247)' }} className="border border-dashed rounded-lg h-max w-full lg:w-[300px]">
                    <div className=" border-white mx-5 border-b border-dashed p-3">
                        <h1 style={{ textShadow: '2px 2px purple' }} className={`font-bold ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-xl text-center text-white border-white`}>{t('frameworks')}</h1></div>
                    <div className="p-3">
                        {FrameWorks.map((data, i) =>
                            <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }} key={data.id} className="list-disc list-inside">
                                <li className="text-purple-600 p-1 font-hamaFont text-lg"><span className='text-zinc-400 duration-150 hover:text-white transition-all ease-in hover:rounded-3xl hover:pl-2 hover:pr-2 hover:bg-purple-500/30'>{data.Text}</span></li>
                            </motion.ul>
                        )}
                    </div>
                </motion.div>


                {/* DataBases Content */}

                <motion.div initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5 }} style={{ boxShadow: '5px 5px 0px 0px rgb(168 85 247)' }} className="border border-dashed rounded-lg h-max w-full lg:w-[300px]">
                    <div className="flex justify-center border-white mx-5 border-b border-dashed p-3">
                        <h1 style={{ textShadow: '2px 2px purple' }} className={`font-bold ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-xl text-center text-white border-white`}>{t('database')}</h1></div>
                    <div className="p-3">
                        {DataBases.map((data, i) =>
                            <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }} key={data.id} className="list-disc list-inside">
                                <li className="text-purple-600 p-1 font-hamaFont text-lg"><span className='text-zinc-400 duration-150 hover:text-white transition-all ease-in  hover:rounded-3xl hover:pl-2 hover:pr-2 hover:bg-purple-500/30 '>{data.Text}</span></li>
                            </motion.ul>
                        )}
                    </div>
                </motion.div>


                {/* Tools  Content */}
                <motion.div initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }} style={{ boxShadow: '5px 5px 0px 0px rgb(168 85 247)' }} className="border border-dashed rounded-lg h-max w-full lg:w-[300px]">
                    <div className="flex justify-center border-white mx-5 border-b border-dashed p-3">
                        <h1 style={{ textShadow: '2px 2px purple' }} className={`font-bold ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-xl text-center text-white border-white`}>{t('tool')}</h1></div>
                    <div className="p-3">
                        {Tools.map((data, i) =>
                            <motion.ul
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }} key={data.id} className="list-disc list-inside">
                                <li className="text-purple-600 p-1 font-hamaFont text-lg"><span className='text-zinc-400 duration-150 hover:text-white transition-all ease-in  hover:rounded-3xl hover:pl-2 hover:pr-2 hover:bg-purple-500/30 '>{data.Text}</span></li>
                            </motion.ul>
                        )}
                    </div>
                </motion.div>

            </div>


        </div>
    )
}
