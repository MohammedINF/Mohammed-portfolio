import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function FirstImage() {
    const { i18n, t } = useTranslation();

    return (
        <motion.div initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }} className="relative overflow-hidden   mt-14 transition-all duration-150 ease-in-out ">

            <img alt="object" dir={i18n.language === 'en' ? 'ltr' : 'rtl'} loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className="visible  object-contain mx-auto absolute top-3 -left-10" src={require('../../icons/dotes1.png')} />
            <img alt="object" dir={i18n.language === 'en' ? 'ltr' : 'rtl'} loading="lazy" width="300" height="300" decoding="async" data-nimg="1" className=" object-contain  mx-auto absolute  bottom-0 -right-[155px]" src={require('../../icons/dotes1.png')} />
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
                </svg>
            </div>

            <img alt='' loading="lazy" width="450" height="450" decoding="async" data-nimg="1" className={` filter drop-shadow-[6px_4px_0px_white] object-contain ${i18n.language === 'en' ? 'scale-x-100' : '-scale-x-100'}  relative  mx-auto grayscale`} src={require('../../icons/mohammed1cp.png')} />

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
            }} className="bg-brand-700  border rounded-2xl border-white p-1 pr-2 pl-2 flex items-center gap-2 relative  w-full centered-bottom">
                <div className="w-[15px] h-[15px] rounded-lg bg-purple-500"></div>
                <div className="text-zinc-400 mb-1  text-xl"><span className={` text-white ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom text-2xl'}`}>{t('myName')} </span></div>
            </motion.div>

        </motion.div>
    );
}