import './App.css';
import { motion, AnimatePresence} from "framer-motion";
import {useRef} from "react";
import images from "./image";

function App() {
  
  const carousel = useRef();
  
  return (
    <div className="App">
      
      
      <motion.h1 animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }} transition={{ duration: 5, delay: 0.3, ease: [0.5, 0.71, 1, 1.5]
      }}  whileHover={{ scale: 1.2 }}   initial={{ opacity: 0, scale: 0.5 }}     
      >Animation made easy with Framer Motion</motion.h1>

      <motion.div ref={carousel}  className="carousel" >
        <motion.div animate={{scale: [1, 0.5,1, 1, 1],
      rotate: [10, 90, 100, 180, 360], 
    }} drag="x" 
        dragConstraints={{right: 0, left:-1200}} 
        dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }} 
        className="inner-carousel">
          {images.map(image =>{
            return( 
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 2 }}  className='item' 
              transition={{ duration: 3}}  key={image}>
            <img src={image} alt=""/>
          </motion.div> 
          
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
