import { motion } from "framer-motion"
import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const Banner = () => {
    return (
        <div id="banner" className="hero mb-32">
            <div className="hero-content flex-col w-full justify-around lg:flex-row-reverse">
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='mask mask-hexagon max-w-sm mb-12 lg:mb-0'
                >
                    <img src="https://scontent.fdac134-1.fna.fbcdn.net/v/t39.30808-6/271716734_1482800418784304_3754238695309101254_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHBRu-Afs_sxQweXOGNP_sqWXlo47v070hZeWjju_TvSBJHmqH5o7lWSSSajihh0aa3Smkqg0mNJmWJfLyJuYfC&_nc_ohc=wNmeqd2saAAAX-cB5iq&_nc_ht=scontent.fdac134-1.fna&oh=00_AT9Vdnhj-h6_TpgrT3mA8QatqQgH83X-UzyqhyUs7dFUcA&oe=62A9658B" alt='me' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className='max-w-2xl'
                >
                    <h1 className="text-5xl font-semibold mb-5">Hi! I am <br/> Khandaker Sajjad Hossen!</h1>
                    <div className="text-3xl leading-relaxed mb-5">Front-end Web Developer With Expertise on
                        <span className='font-semibold'>
                            <TypewriterComponent
                                options={{
                                    strings: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
                                    deleteSpeed: 50,
                                    pauseFor: 500,
                                    autoStart: true,
                                    loop: true,
                                    cursor:"_"
                                }}
                            />
                        </span>
                    </div>
                    <a href="#contact" className="btn btn-primary">Lets Have a Chat</a>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;