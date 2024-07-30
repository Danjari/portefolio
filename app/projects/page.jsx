'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';
import { Metadata } from 'next';


const projectData = [
  {
    image: '/work/AYki01.png',
    category: 'Node js',
    name: 'Ayki',
    description:
      'A white label multi tenant SaaS app for agency owners.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/chat_to_visual.jpg',
    category: 'Python',
    name: 'Chat to Visual',
    description:
      'A tool that converts complex questions into easy visualizations using AI',
    link: 'https://chat-to-visual.streamlit.app/',
    github: 'https://github.com/Danjari/Chat-to-Visual',
  },
  {
    image: '/work/Dropout_rate.png',
    category: 'Python',
    name: 'Dropout Rate In Portugal',
    description:
      'Streamlit app that predicts dropout rates using machine learning.',
    link: 'https://huggingface.co/spaces/NYU-DS-4-Everyone/dropout_rate',
    github: 'https://huggingface.co/spaces/NYU-DS-4-Everyone/dropout_rate/tree/main',
  },



];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-3 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
