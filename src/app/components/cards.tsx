import React from 'react';
import { text } from 'stream/consumers';

interface AirportCardProps {
    imageSrc: string;
    altText: string;
    text: string;
    href: string;
}
export function AirportPairCard(props: AirportCardProps){
        return (
            <div style={styles.card}>
                <img src={props.imageSrc} alt={props.altText} style={styles.image} />
                <div style={styles.textContainer}>
                    <p style={styles.text}>{props.text}</p>
                </div>
                <div style={styles.buttoncontainer}>
                   <a href= {props.href}>
                     <button type= "button" style={styles.button}>BOOK FLIGHT </button></a>
                </div>
            </div>
            
        );
    
}




const styles = {
    card: {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        width: '300px',
        margin: '16px',
        position: 'relative',
        marginBottom:'24px'
, 
    } as const,
    image: {
        width: '100%',
        height: 'auto',
    },
    textContainer: {
        padding: '16px',
    },
    text: {
        margin: '0',
        fontSize: '16px',
        color: '#333',
    },
    button: {
       backgroundColor: '#003135',
       color:'white'
      


    } as const,
    buttoncontainer:{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        transform: 'translateY(50%) '
        
    

    } as const
};

