import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BsMusicNoteBeamed } from "react-icons/bs";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: bankOne,
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3
    };
    
    this.adjustVolume = this.adjustVolume.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.selectBank = this.selectBank.bind(this);
   
  }

  

  selectBank() {
    if (this.state.power) {
      if (this.state.currentPadBankId === 'Heater Kit') {
        this.setState({
          currentPadBank: bankTwo,
          display: 'Smooth Piano Kit',
          currentPadBankId: 'Smooth Piano Kit'
        });
      } else {
        this.setState({
          currentPadBank: bankOne,
          display: 'Heater Kit',
          currentPadBankId: 'Heater Kit'
        });
      }
    }
  }
  adjustVolume(e) {
    if (this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: ' Volume: ' + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1500);
    }
  }
 
  clearDisplay() {
    this.setState({
      display: String.fromCharCode(160)
    });
  }
  render () {
    const powerSlider = this.state.power
      ? {
          float: 'right'
        }
      : {
          float: 'left'
        };
    const bankSlider =
      this.state.currentPadBank === bankOne
        ? {
            float: 'left'
          }
        : {
            float: 'right'
          };
    
  const clips = [].slice.call(document.getElementsByClassName('clip'));
   clips.forEach(sound => {
        sound.volume = this.state.sliderVal;
      });
    
    return (
    <div id="drum-machine" className="container " >
    <div className="drum-box d-flex  flex-column flex-md-row flex-lg-row flex-xl-row mt-2" >
            <div id="display" className="display m-2">
              {this.state.currentPadBank.map((object, idx)=>(
              
              <Box text={object.keyTrigger} key={ idx } audio={object.url} currentPadBank={this.state.currentPadBank}  />
               ))}
            </div>
        <div className="control-drum d-flex  flex-column  m-3">
            <h3>Drum machine</h3>
            
            <h4>Let's rock it up</h4>
            <p id='text-display'>{this.state.display}</p>
            <div className='volume-slider'>
            <BsFillVolumeUpFill size='1.5rem'/>
             <input max='1'min='0' 
                 onChange={this.adjustVolume}
                  step='0.01'
                  type='range'
                  value={this.state.sliderVal}
                  className='slider'
                 />
            </div>

<div className="d-flex  flex-row">
              <div className='control'>
                  <p>Switch kit</p>
                  <div className='select' onClick={this.selectBank}>
                    <div className='inner' style={bankSlider}/>
                  </div>
              </div>

</div>
          <div className='footer-bar mt-4'>
            <p className="footertext">
              <a className="no-decoration" href="https://github.com/abmincodecreations">
                &copy;Designed By Abhishek Mishra
              </a>
             </p>
          </div>
  </div>
  </div>
  </div>
  
    );
  }
}




class  Box extends React.Component {
 
  constructor (props){
    super(props);
    this.audio=React.createRef();
    this.clearDisplay = this.clearDisplay.bind(this);
    
  }
 

  componentDidMount(){
    this.audio.current.addEventListener('ended',(e) =>{
      const parent=e.target.parentNode;
      parent.classList.remove('active');

     

    });
    
  }
  playSound= () => {

    this.audio.current.play();
    
    const id = this.audio.current.id;
    
    const parent = this.audio.current.parentNode;
    parent.classList.add('active');
    
    const display = parent.parentNode.parentNode;
    
    display.querySelector('h4').innerText = `${id} is playing`;
    setTimeout(() => this.clearDisplay(), 1000);
   
  }

  clearDisplay() {
    const parent = this.audio.current.parentNode;
    const display = parent.parentNode.parentNode;
    display.querySelector('h4').innerText ="Let's play some music" ;
  }
  
 
render () {
    const {text ,audio}= this.props;
   
  return (
        <div className="box" onClick={this.playSound}>
        {text}
        <audio ref={this.audio} src={audio} className="clip" id={text}/>
        </div>
       )
  }
}

document.addEventListener('keydown',(e)=>{
  const id=e.key.toUpperCase();
  const audio =document.getElementById(id);

  if(audio){
    const parent=audio.parentNode;
    parent.classList.add('active');
    audio.play();
  }
});
ReactDOM.render(<App />, document.getElementById('root'));