import React from 'react';
import { motion, } from "framer-motion"
import AnimatedCursor from "react-animated-cursor"
import '../arrow.css'
import { useTranslation } from 'react-i18next';
import FirstDisplay from './pages/FirstDisplay';
import FirstImage from './pages/FirstImage';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import BottomNavigation from './pages/BottomNavigation';
import Header from './pages/Header';

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
    
    const { t, i18n } = useTranslation();

    return (

        <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'} className=' bg-gradient-to-r from-gray-950 to-gray-800   h-fit '>
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
                        boxShadow: '0px 0px 10px 2px #6621BA'

                    }}
                />

                {/* Header Navigation */}
                <Header />


                <div className=' flex flex-col md:flex-row justify-between overflow-y-auto '>

                    {/* Bottom Navigation */}
                    <BottomNavigation scrollToSkills={scrollToSkills} scrollToDiv={scrollToDiv}
                        scrollToAbout={scrollToAbout} scrollToContacts={scrollToContacts}
                        scrollToHome={scrollToHome} />

                    {/* First Display */}
                    <FirstDisplay scrollToContacts={scrollToContacts} />

                    {/* first Image */}
                    <FirstImage />

                </div>



                {/* Hr Line  with Quotes*/}
                <motion.div initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
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
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }} className="w-full lg:w-[500px]  mt-10 mb-5 mx-auto relative">

                    <div className="relative">
                        <div className="w-[40px] h-[40px] rounded-full bg-brand-600 absolute -top-6 left-3 flex items-center flex-col justify-center">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-zinc-300 w-[30px] h-[30px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162C14.219 8.33 14.02 8.778 13.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"></path></svg></div>
                        <div className={`w-full p-4 text-2xl border text-center ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} text-white  border-white`}>{t('cristianoSpeech')}</div>
                        <div className="w-[40px] h-[40px] rounded-full bg-brand-600 absolute -bottom-4 right-3 flex items-center flex-col justify-center"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-zinc-300 w-[30px] h-[30px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.95 8.721c-.017-.109-.025-.168-.025-.168l-.026.006C21.465 6.526 19.662 5 17.5 5 15.015 5 13 7.015 13 9.5s2.015 4.5 4.5 4.5c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35-.208.086-.39.16-.539.222-.302.125-.474.197-.474.197l.484 1.939c0 0 .218-.052.597-.144.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747C21.998 9.056 21.971 8.857 21.95 8.721zM10.95 8.721c-.017-.109-.025-.168-.025-.168l-.026.006C10.465 6.526 8.662 5 6.5 5 4.015 5 2 7.015 2 9.5S4.015 14 6.5 14c.223 0 .437-.034.65-.065-.069.232-.14.468-.254.68-.114.308-.292.575-.469.844-.148.291-.409.488-.601.737-.201.242-.475.403-.692.604-.213.21-.492.315-.714.463-.232.133-.434.28-.65.35-.208.086-.39.16-.539.222C2.93 17.958 2.758 18.03 2.758 18.03l.484 1.939c0 0 .218-.052.597-.144.191-.048.424-.104.689-.171.271-.05.56-.187.882-.312.317-.143.686-.238 1.028-.467.344-.218.741-.4 1.091-.692.339-.301.748-.562 1.05-.944.33-.358.656-.734.909-1.162.293-.408.492-.856.702-1.299.19-.443.343-.896.468-1.336.237-.882.343-1.72.384-2.437.034-.718.014-1.315-.028-1.747C10.998 9.056 10.971 8.857 10.95 8.721z"></path></svg></div></div>
                    <div className={`p-4 ml-auto border border-t-0 text-white border-white ${i18n.language === 'en' ? 'font-hamaFont' : 'font-custom'} w-max text-xl`}>- {t('speakerName')} .</div>
                </motion.div>



                {/* Projects headLine  */}
                <Projects />

                {/* Skills headLine  */}
                <Skills />

                {/* About HeadLine */}
                <About i18n={i18n} t={t} />

                {/* Contact HeadLine */}
                <Contact i18n={i18n} t={t} />

                {/* Footer components */}
                <Footer />

            </div>
        </div>

    );
}

export default Home;
