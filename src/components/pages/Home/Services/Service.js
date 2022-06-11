import React from 'react';
import { motion } from 'framer-motion';

const Service = ({ service }) => {
    const { title, image, description, technologyUsed } = service;
    return (
        <motion.div
            whileHover={{ translateY: -15 }}
            whileTap={{ scale: 1.05 }}
            className="card bg-base-100 shadow-xl"
        >
            <img src={image} alt="Shoes" className='p-10 bg-secondary h-1/2' />
            <div className="card-body">
                <h2 className="card-title text-3xl mb-5">{title}</h2>
                <p className='leading-relaxed'>{description}</p>
                <div className="card-actions justify-start">
                    {
                        technologyUsed.map((technology, index) => <div key={index} className="badge badge-outline">{technology}</div>)
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default Service;