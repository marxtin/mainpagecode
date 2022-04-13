import React from 'react';
import styled from 'styled-components'
import TypeAnimation from 'react-type-animation';

const Div = styled.div`
 font-family: ${props=>props.fontfamily};
 font-size: ${props=>props.fontsize};
 color: rgb(255, 255, 255,0.3);
 z-index: 4;
 position: fixed;
 top: 40%;
 left: 40%;
`

const Welcome = () => {
    const styles = {
        fonts: {
            rubik:"RubikBeastly",
            dot:"DotGothic16",
            code:"MPLUS1CODE"
        },
        fontsize: {
            large: "4rem",
            normal: "2rem"
        }
    }
  return (
    <Div fontfamily={styles.fonts.dot} fontsize={styles.fontsize.large}>
       <TypeAnimation
        cursor={true}
        sequence={[
          'Hello'
        ]}
        wrapper="p"
        repeat={1}
       />
       
    </Div>
  )
}

export default Welcome