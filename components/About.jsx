import React from "react"
import { Tilt } from "react-tilt";
import {motion} from "framer-motion";

import {styles} from "../../styles";
import {services} from "../../constants";
import {fadeIn, textVariant} from "../../utils/motion";
import { SectionWrapper } from "../../hoc";

const ServiceCard = ({ index, title, icon}) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
                flex justify-evenly items-center flex-col">
                    <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>

        </Tilt>
    )
}

const About = () => {
    return(
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionHeadText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>
            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4
            text-secondary text-[17px] max-w-3xl leading-[30px]">
                I am a skilled web and application developer with expertise in both front-end and back-end technologies. 
                I have experience working with frameworks like Next.js, React, and CSS to build responsive websites and applications. 
                On the back-end, I am proficient in PHP and Python, ensuring efficient data management and API integrations.
                I specialize in creating seamless user experiences, including interactive 3D models using Three.js and React Three Fiber. 
                I am familiar with cloud platforms such as Google Drive and OneDrive, and I prioritize clean, maintainable code and 
                mobile optimization in all my projects.
            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((services, index) => (
                    <ServiceCard key={services.title} index={index} {...services}/>
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");