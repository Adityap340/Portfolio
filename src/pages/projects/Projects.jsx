import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bookPic from '../../assets/BookStore.png';
import BlogWeb from '../../assets/Blog.png';
import ChatApp from '../../assets/Chat-App.png';
import Zylo from '../../assets/Ecommerce.png';

const Projects = () => {
  return (
    <div className='gradient__bg flex flex-col items-center justify-center min-h-screen overflow-hidden'>

      {/* Page Title */}
      <div className="mb-8 md:mb-12 ml-4 md:ml-12 text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white">My Projects</h1>
      </div>

      {/* Projects Cards */}
      <div className='flex flex-wrap justify-center md:justify-between px-4 md:px-24' >

        { /* Mapping over project details for DRY code */ }
        {[
          { title: "Book Inventory", image: bookPic, description: "Crafted a cutting-edge bookstore experience using React, MongoDB, Node, and Express. Implemented Firebase Authentication for security.", githubLink: 'https://github.com/Adityap340/BookStore' },
          { title: "Blog Website - GPT-3", image: BlogWeb, description: "Responsive blog platform powered by ReactJS and CSS, with GPT-3 for seamless content generation.", githubLink: 'https://github.com/Adityap340/blog_web' },
          { title: "Chat Application", image: ChatApp, description: "Real-time chat application built with HTML, CSS, JavaScript, Node.js, Socket.io, and Express.js.", githubLink: 'https://github.com/Adityap340/Chat-Web-App' },
          { title: "Zylo", image: Zylo, description: "Immerse yourself in a seamless online shopping experience on our HTML and CSS-powered e-commerce landing page. Explore the latest trends, discover timeless pieces, and indulge in the perfect blend of fashion and technology.", githubLink: 'https://github.com/Adityap340/E-commerce' },
        ].map((project, index) => (
          <Card key={index} sx={{ maxWidth: 345 }} className='mb-8 md:mr-8 md:w-1/4'>
            <CardMedia
              sx={{ height: 140 }}
              image={project.image}
              title={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {project.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><a href={project.githubLink} target="_blank" rel="noopener noreferrer">Github</a></Button>
            </CardActions>
          </Card>
        ))}
        
      </div>
    </div>
  );
};

export default Projects;
