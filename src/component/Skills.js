import React from 'react'
import '../style/skill.css'

// const features = [
//     {
//       name: '',
//       description:
//         '',
      
//     },
//     {
//       name: 'Hands-On Learning:',
//       description:
//         'We believe that hands-on learning is the most effective way to learn IT skills. Our courses are designed to be interactive and engaging, with plenty of opportunities for you to practice your new skills and apply them in real-world scenarios.',
      
//     },
//     {
//       name: 'Experienced Instructors: ',
//       description:
//         'Our instructors are experienced IT professionals with a wealth of knowledge and expertise in their respective fields. They are passionate about sharing their knowledge and helping students achieve their goals.',
      
//     },
//     {
//       name: 'Career Support:',
//       description:
//         ' Our courses are designed to help you launch or advance your career in IT. We provide career support services, including resume and cover letter reviews, job search guidance, and networking opportunities, to help you achieve your career goals. ',
    
//     },
//   ]
  
const Skills = () => {
  return (
    
        <div className="maindiv">
          <div className="grid">
            
              <div  className="relative ">
                <div className="h-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20"><path fill="green" d="M3 4.252c0-1 1.116-1.595 1.947-1.038l8.499 5.707a1.25 1.25 0 0 1 .007 2.071l-8.5 5.793A1.25 1.25 0 0 1 3 15.752v-11.5ZM17 3.5a.5.5 0 0 0-1 0v13a.5.5 0 1 0 1 0v-13Z"/></svg>
                </div>
                <div className="sm:min">
                  <p className="textheading">Upskilling</p>
                  <p className="mt-2 ">8 Weeks of intensive training & certifications through structured, industry vetted curriculum.</p>
                </div>
                
              </div>

              <div  className="relative ">
                <div className="h-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256"><path fill="green" d="M69.12 94.15L28.5 128l40.62 33.85a8 8 0 1 1-10.24 12.29l-48-40a8 8 0 0 1 0-12.29l48-40a8 8 0 0 1 10.24 12.3Zm176 27.7l-48-40a8 8 0 1 0-10.24 12.3L227.5 128l-40.62 33.85a8 8 0 1 0 10.24 12.29l48-40a8 8 0 0 0 0-12.29Zm-82.39-89.37a8 8 0 0 0-10.25 4.79l-64 176a8 8 0 0 0 4.79 10.26A8.14 8.14 0 0 0 96 224a8 8 0 0 0 7.52-5.27l64-176a8 8 0 0 0-4.79-10.25Z"/></svg>
                </div>
                <div className="sm:min">
                  <p className="textheading">Live Projects</p>
                  <p className="mt-2 ">Build real, ready-to-ship products with team members & professionals for 4 weeks</p>
                </div>
                
              </div>

              
              <div  className="relative ">
                      <div className="h-12">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="green" fill-rule="evenodd" d="M11.47 2.152a1 1 0 0 1 1.06 0l6.904 4.315L12 10.84L4.566 6.467l6.904-4.315zM3.008 7.871A1.001 1.001 0 0 0 3 8v8a1 1 0 0 0 .47.848L11 21.554v-8.982L3.008 7.87zM13 21.554l7.53-4.706A1 1 0 0 0 21 16V8c0-.043-.003-.087-.008-.129L13 12.571v8.983z" clip-rule="evenodd"/></svg>
                      </div>
                      <div className="sm:min">
                        <p className="textheading">Workplace Skills</p>
                        <p className="mt-2 ">Build your resume, enhance your profile & get noticed by recruiters from top companies.</p>
                      </div>
                      
                    </div>
                    <div  className="relative ">
                      <div className="h-12">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="green" d="M13.002 8.013c3.168 0 4.966 2.097 5.227 4.63h.08a3.687 3.687 0 0 1 3.692 3.683a3.687 3.687 0 0 1-3.692 3.682H7.694a3.687 3.687 0 0 1-3.692-3.682a3.687 3.687 0 0 1 3.692-3.683h.08c.263-2.55 2.06-4.63 5.228-4.63ZM6.589 4.005a5.058 5.058 0 0 1 2.263.674a5.057 5.057 0 0 1 2.208 2.595c-1.984.562-3.404 2.001-3.994 3.946l-.069.246l-.058.238l-.206.038a4.67 4.67 0 0 0-2.804 1.815a5.061 5.061 0 0 1-1.797-1.599a.75.75 0 0 1 .366-1.132c1.643-.588 2.527-1.25 3.034-2.216c.552-1.055.654-2.174.287-3.677a.75.75 0 0 1 .77-.928Z"/></svg>
                      </div>
                      <div className="sm:min">
                        <p className="textheading ">Industry Certification</p>
                        <p className="mt-2 ">Get live project & training certificates and gain a point of differentiation on your CV</p>
                      </div>
                      
                    </div>
                </div>
        </div>

   
  )
}

export default Skills
