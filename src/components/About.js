import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import NavBar from './NavBar';

const data = [
    { name: 'JavaScript', value: 30, color: '#f7df1e' },
    { name: 'TypeScript', value: 30, color: '#3178c6' },
    { name: 'Python', value: 20, color: '#f2a900' },
    { name: 'C++', value: 10, color: '#6495ED' },
    { name: 'GoLang', value: 5, color: '#00c4b3' },
    { name: 'Java', value: 5, color: '#f44336' }
];

const techStack = [
    'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
    'https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white',
    'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
    'https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white',
    'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white',
    'https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white',
    'https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white',
    'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
    'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white',
    'https://img.shields.io/badge/Postgres-336791?style=for-the-badge&logo=postgresql&logoColor=white',
    'https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black',
    'https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white',
    'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white',
    'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white',
    'https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white',
    'https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white',
    'https://img.shields.io/badge/Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white',
    'https://img.shields.io/badge/Elasticsearch-005571?style=for-the-badge&logo=elasticsearch&logoColor=white'
];

const About = () => {
    return (
        <div className="min-h-screen bg-[#001F3F] text-white font-mono">
            <NavBar />
            <section className="flex px-12 pt-20 gap-12">
                {/* Left Section */}
                <div className="flex-1">
                    <motion.h1
                        className="text-4xl font-extrabold mb-8 text-[#c1e7ff] tracking-wide"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        About Me
                    </motion.h1>

                    <motion.p
                        className="text-[#A9B9C3] text-lg w-full max-w-5xl text-left leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        I work as a Senior Software Engineer at IN10 Media Network. With 3.5 years of experience in Node.js, I have honed my skills in
                        various advanced technologies, including React.js, Express.js, MongoDB, AWS, MySQL, Linux, Redis, and Memcached.
                    </motion.p>

                    <h2 className="mt-12 text-2xl text-[#c1e7ff] tracking-wide">My Tech Stack</h2>
                    <div className="flex flex-wrap gap-2 mt-4">
                        {techStack.map((src, index) => (
                            <img key={index} src={src} alt="Tech Stack Badge" className="h-8" />
                        ))}
                    </div>
                    <h2 className="mt-12 text-2xl text-[#c1e7ff] tracking-wide">Certifications</h2>
                    <div className="flex items-center gap-4 mt-4">
                        <img src="/aws-ccp-badge.png" alt="AWS Certified Cloud Practitioner" className="w-24" />
                    </div>
                </div>

                <div className="relative flex items-center justify-center w-[400px]">
                    <PieChart width={400} height={400}>
                        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend layout="vertical" align="right" verticalAlign="middle" />
                    </PieChart>
                    <p className="absolute bottom-[-5px] text-sm text-[#A9B9C3]">
                        Top languages (based on lines of code written)
                    </p>
                </div>

            </section>
        </div>
    );
};

export default About;

