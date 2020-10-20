import React, {useState} from 'react';
import Modal from 'react-modal';
import ModalVideo from 'react-modal-video';
import './App.css';
import RouteBuildingVisualizer from './RouteBuildingVisualizer/RouteBuildingVisualizer';
Modal.setAppElement("#root");



function App() {
  const [modalIsOpen, setModalisOpen] = useState(false);
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="App bg">
      <article className = "boxp">
      <h2>
        Hello!! I am Debashish Nanda and I welcome you to my website! 
        This site is currently under construction, with refinement on 
        the algorithms and the design. Thank you and enjoy the visualisation. 
      </h2>
      </article>
      <button className = "white button1" onClick = {() => setModalisOpen(true)}>
        Hey There!!! This is the tutorial.
      </button>
      <article>
        <h1 className = "boxp">
          CHOOSE AN ALGORITHM
        </h1>
      </article>
      <Modal isOpen = {modalIsOpen} onRequestClose = {() => setModalisOpen(false)}>
        <div>
          <h2 className = "white button1">
            Tutorial and a brief Introduction
          </h2> 
          <h2>
            Route Building Visualizer
          </h2>
          <p>
          Welcome to Road Building Visualizer! I am Debashish Nanda, 
          From IIT(BHU) Varanasi, and I built this application because I was fascinated by 
          the shortest path and various path related algorithms. I wanted to visualize them in action. 
          Keep enjoying this tool to see and enjoy how different algorithms make routes from different nodes on a map.              
          </p>          
          <p> 
            <b>Watch the following video for reference -></b>
            <i>         NOTE: Click anywhere outside the video to return here.</i>
          </p>
          <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="9yCmqeKHH1o" onClose={() => setOpen(false)} />
            <button className="blu button" onClick={()=>setOpen(true)}>VIEW VIDEO</button>      
          </React.Fragment>  
          <article>
            <h2>
              Connect with me on - 
            </h2>            
            <form action="https://www.linkedin.com/in/debashish-nanda-b38164160/">
              <button className = "blu1 button" type="submit">
                <span>LinkedIN</span>
              </button>
            </form>
            <h3>
              What about a look at the code!!!
            </h3>
            <form action="https://github.com/debashishnanda/">
              <button className = "blu1 button" type="submit">
                <span>GITHUB</span>
              </button>
            </form>
          </article>                
          <button className = "button blu" onClick = {() =>setModalisOpen(false)}>
            close tutorial
          </button>
        </div>
      </Modal>
      <RouteBuildingVisualizer></RouteBuildingVisualizer>
    </div>
  );
}

export default App;
