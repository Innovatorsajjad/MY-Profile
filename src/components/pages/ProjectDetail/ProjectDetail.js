import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch("../jsons/projects.json")
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    const { index } = useParams();

    const project = projects[index] || {};
    const { name, type, screenshots, description, detailedDescription, links } = project;
    if (!project || !screenshots || !links) {
        return <p>Loading</p>
    }

    return (
        <div>
            <div className="flex flex-col lg:flex-row p-0">
                <div classNameName='flex flex-col'>
                    {
                        screenshots.map(screenshot => <>
                            <img src={`${screenshot.image}`} className="max-w-sm rounded-lg shadow-2xl" alt='screenshot' />
                            <p classNameName='mb-5 mt-1'>{`${screenshot.title}`}</p>
                        </>)
                    }
                </div>
                <div classNameName='ml-0 lg:ml-20 mt-5'>
                    <h1 className="text-5xl font-semibold mb-3">{name}</h1>
                    <p classNameName='badge badge-outline mb-5'>A {type}</p>
                    <p className="leading-relaxed text-xl mb-5">{detailedDescription}<br></br>{description}</p>
                    {
                        links.map(link => <a classNameName='btn btn-outline mr-5 mb-5' href={link.url} target="_blank" rel="noreferrer">{link.title}</a>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;