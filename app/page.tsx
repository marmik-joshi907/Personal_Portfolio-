'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-400">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">Marmik Joshi</h1>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
              Marmik Joshi
            </h1>
            <h2 className="text-2xl md:text-3xl text-purple-400 mb-6">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              High-achieving Computer Engineering student with exceptional 9.0 SPI, passionate about 
              creating innovative solutions and contributing to impactful projects in the tech industry.
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
               className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="mailto:marmikjoshi2@gmail.com"
               className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>

          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={32} className="text-purple-400" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                I'm a dedicated Computer Engineering student with an exceptional academic record, 
                placing me in the top percentile of my cohort. My academic excellence is complemented 
                by a strong, practical command of programming languages like Java, focusing on 
                object-oriented and multithreading capabilities.
              </p>
              <p className="text-lg leading-relaxed">
                I excel in data-centric applications, possess comprehensive skills in full-stack development, 
                and have expertise in web application development using frameworks like React and Angular. 
                My passion lies in leveraging technology to create meaningful impact.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p>Ahmedabad, Gujarat, India</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <p>B.E. SAL Institute of Technology & Engineering Research</p>
                <p className="text-purple-400 font-semibold">SPI: 9.0/10.0</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Languages</h3>
                <p>English (Very good command), Hindi (Very good command), Gujarati (Very good command)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Education Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Education</h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Technical Skills</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Python', 'JavaScript', 'HTML', 'CSS'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-300 hover:bg-purple-500/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-3">Frameworks & Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Angular', 'DSA', 'DBMS'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-300 hover:bg-purple-500/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-3">Databases & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['SQL', 'NoSQL', 'MongoDB', 'Git/GitHub', 'MERN Stack'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-300 hover:bg-purple-500/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-purple-400 mb-3">Other Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['System Design', 'GEN AI', 'Data Structures', 'Algorithms'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-300 hover:bg-purple-500/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8">Education</h3>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-white">Bachelor of Engineering</h4>
                    <p className="text-purple-400">Computer Engineering</p>
                    <p className="text-sm mt-1">SAL Institute of Technology & Engineering Research</p>
                    <p className="text-sm text-slate-500">Jul 2023 - Jul 2027 | Ahmedabad</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-medium text-white">Academic Performance</span>
                      <span className="text-2xl font-bold text-purple-400">9.0/10.0 SPI</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm">
                    <li>• Achieved consistent and commendable Semester Performance Index (SPI) of 9.0/10.0</li>
                    <li>• Ranked among top 1% of students in department for academic excellence</li>
                    <li>• Applied theoretical knowledge in practical academic projects</li>
                    <li>• Strong understanding of Core CSE concepts and emerging technologies</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NeuraAPI */}
            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    NeuraAPI
                  </h3>
                  <ExternalLink size={20} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-sm mb-4 leading-relaxed">
                  Developed a versatile RESTful API using Python and Flask to provide real-time 
                  AI-powered services, including text generation and summarization, powered by the Gemini Pro model.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Flask', 'REST API', 'Gemini Pro', 'AI/ML'].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-500/30 text-purple-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* MediLocate */}
            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    MediLocate
                  </h3>
                  <ExternalLink size={20} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-sm mb-4 leading-relaxed">
                  Designed a mobile application to help users locate nearby pharmacies with specific 
                  medicines in stock, manage medication schedules, and offer a commercial platform for pharmacy partnerships.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Mobile App', 'Location Services', 'Database', 'UI/UX'].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-500/30 text-purple-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bug Tracking System */}
            <Card className="bg-slate-800 border-slate-700 hover:border-purple-500 transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    Bug Tracking System
                  </h3>
                  <ExternalLink size={20} className="text-slate-500 group-hover:text-purple-400 transition-colors" />
                </div>
                <p className="text-sm mb-4 leading-relaxed">
                  Engineered a robust Bug Tracking System in Java to centralize and 
                  streamline the reporting, assignment, and resolution of software defects for development teams.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'System Design', 'Database', 'Project Management'].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-500/30 text-purple-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>
          
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2">Management Committee Member</h3>
                  <h4 className="text-xl text-purple-400 mb-2">ISTE (Indian Society for Technical Education)</h4>
                  <p className="text-slate-500">Jul 2023 — Present | Ahmedabad</p>
                </div>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Collaborate with cross-functional teams to drive strategic initiatives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Provide insights on technology trends to enhance organizational growth</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Lead discussions on innovation and best practices within the committee</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Support organizational objectives through effective project management</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Facilitate workshops to promote effective use of technology</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Work Together</h3>
              <p className="text-lg mb-8 leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-purple-400" />
                  <a href="mailto:marmikjoshi2@gmail.com" className="hover:text-purple-400 transition-colors">
                    marmikjoshi2@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin size={20} className="text-purple-400" />
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                     className="hover:text-purple-400 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Github size={20} className="text-purple-400" />
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                     className="hover:text-purple-400 transition-colors">
                    GitHub Profile
                  </a>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-purple-500 min-h-[120px]"
                      placeholder="Your message..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500">
            © 2025 Marmik Joshi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}