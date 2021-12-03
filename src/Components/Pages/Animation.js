import React, { Component } from 'react';
import Typical from 'react-typical'
import "./PagesCSS/Animation.css"
function Animation() {
    return (
        <div className=" name">
            {/* Hi, my name is parichit */}
            <h1> 
                <Typical 
                loop={Infinity}
                wrapper="b"
                steps={[
                    'Hi, my name is parichit.',
                    1000,
                    'Welcome to my portfolio.',
                    1000,
                ]}/>
            </h1>
            <p>who am i?</p>
                <p>
                    i am a <spam></spam>
                     <Typical
                        loop={Infinity}
                        wrapper="b"
                     steps={[
                         'Learner.',
                          1000, 
                          'knowledge Gainer.',
                           1000,
                           'Explorer.',
                           1000,
                           'FullStackDeveloper (wannabe).',
                           1000,
                        
                        
                        ]}
     
      
      />
                </p>
        </div>
      );
}

export default Animation;