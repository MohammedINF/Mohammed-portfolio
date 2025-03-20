import React from 'react'
import WaterDropGrid from '../WaterDropGrid'
import { motion } from 'framer-motion'
import GridDotes from '../GridDotes'
export default function About({ i18n, t }) {

    const downloadPdf = () => {
        fetch(require('../../pdf/Mohammed_othman_cv.pdf'))
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


    return (
        <div>

            <motion.div initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }} className="flex gap-5 items-center mt-24 " id="projects">
                <div id='MYAbout' className="flex items-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" className="text-purple-400 text-lg lg:text-4xl" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.39 12.648a1.32 1.32 0 00-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 00.016-.164.51.51 0 00-.516-.516.54.54 0 00-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 00-.523-.516.539.539 0 00-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z"></path></svg>
                    <h1 className={`text-xl ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-white lg:text-3xl `}>{t('about')}</h1></div>
                <div className=" border-b border-purple-400 w-full lg:w-[350px] xl:w-[550px]"></div></motion.div>





            {/* About components */}



            <div className="grid grid-cols-1 lg:grid-cols-8 gap-3 lg:mt-0 mt-8 items-center">
                <motion.div initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} alt="About Mohammed Othman" className="text-zinc-400 col-span-1 lg:col-span-5">
                    <span className={`md:text-[32px] ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-2xl text-white block  mb-4`}>{t('hello')} <span style={{ textShadow: '2px 2px #8032e0' }}>{t('myName1')}</span></span>
                    <span className={`${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-lg`}>{t('description')}.</span>
                    <br />

                    <div className='inline-flex gap-6'>

                        <a onClick={downloadPdf} href='#0' class="relative inline-flex items-center justify-center  px-3 py-1 mt-6 overflow-hidden font-medium text-purple-500 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-y-full bg-purple-500 group-hover:-translate-y-0 ease">
                                <motion.p initial={{ y: 0, }}
                                    animate={{ y: -5, }}

                                    transition={{ duration: 1.3, type: "spring", bounce: 0.5, repeat: Infinity }} className='' style={{ fontSize: '50px' }} >
                                    <svg class="w-6 h-6 mt-2 rotate-90 text-white" fill="#fff" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </motion.p>                                    </span>
                            <span class={`absolute flex items-center justify-center w-full h-full  transition-all duration-300 transform text-white ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} group-hover:-translate-y-80 ease`}>{t('downloadButton')}</span>
                            <span class="relative invisible">Download My CV</span>
                            <motion.p initial={{ y: 0, }}
                                animate={{ y: -5, }}

                                transition={{ duration: 1.3, type: "spring", bounce: 0.5, repeat: Infinity }} className='' style={{ fontSize: '50px' }} >
                                <svg class={`w-6 h-6 rotate-90 ${i18n.language === 'en' ? 'ml-10  mr-0' : 'ml-0 mr-10'}  mt-2 group-hover:-translate-y-80 duration-300 ease text-white`} fill="#fff" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </motion.p>
                        </a>

                    </div>

                </motion.div>

                <motion.div initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} className="border-b overflow-hidden col-span-1 lg:col-span-3 border-purple-500 relative">
                    <div className={`visible object-contain mx-auto absolute  ${i18n.language === 'en' ? '-left-10  -top-12' : 'left-[240px]  top-0'}  `}><WaterDropGrid /></div>

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
                    <div className=" object-contain mx-auto  w-[150px] h-[150px] absolute -bottom-10 -right-12"><GridDotes /></div>

                    <img alt="me11 of mohammed othman."
                        loading="lazy" width="450" height="450" decoding="async"
                        className={`object-contain filter drop-shadow-[6px_4px_0px_white] mx-auto grayscale ${i18n.language === 'en' ? 'scale-x-100' : '-scale-x-100'} `}
                        color='transparent'
                        src={require('../../icons/me11.png')} />

                </motion.div>
                </div>


        </div>
    )
}
