import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import TextTransition, { presets } from 'react-text-transition';

export default function FirstDisplay({ scrollToContacts }) {
  const { t, i18n } = useTranslation();
  
  const [wordIndex, setWordIndex] = useState(0);
  const [buttonIndex, setButtonIndex] = useState(0);

  const words = t('typewriterWords', { returnObjects: true });
  const buttonTexts = t('buttonWriting', { returnObjects: true });

  // Change the text every 2 seconds for typewriter words
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(wordInterval);
  }, [words.length]);

  // Change the button text every 3 seconds
  useEffect(() => {
    const buttonInterval = setInterval(() => {
      setButtonIndex((prev) => (prev + 1) % buttonTexts.length);
    }, 2100);
    return () => clearInterval(buttonInterval);
  }, [buttonTexts.length]);



  const isSm = useMediaQuery({ maxWidth: 640 });

  return (
    <motion.div initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }} 
      className="flex flex-col relative mt-20 gap-5">

      <h1 className={`text-2xl text-white ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} lg:text-4xl font-medium`}>
        {t('developerName')} 
        <span className="text-purple-500"> {t('position')} </span>
        {t('location')}
      </h1>

      <h4 className={`text-lg ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-zinc-400 font-medium`}>
        {t('created')} 
        <span className="text-purple-500 text-lg font-medium sm:inline mx-1">
          <TextTransition springConfig={presets.stiff} inline={isSm ? false : true} >
            {words[wordIndex]}
          </TextTransition>
        </span>
      </h4>

      <blockquote className={`p-4 w-full flex my-4 ${i18n.language === 'en' ? 'border-l-4' : 'border-r-4'} border-gray-300`}>
        <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 -my-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
        <h4 className={`mt-4 text-zinc-400 ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-md md:text-lg lg:w-[700px] md:w-[400px] w-96`}>
          {t('speech')}
        </h4>
      </blockquote>

      <a href="#0" onClick={scrollToContacts} 
        className={`relative text-white ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} border-purple-500 w-max items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold group`}>
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
          <TextTransition springConfig={presets.wobbly} inline>
            {buttonTexts[buttonIndex]}
          </TextTransition>
        </span>
        <span className="absolute inset-0 border-2 border-white"></span>
      </a>

    </motion.div>
  );
}
