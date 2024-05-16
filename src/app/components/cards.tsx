import React from 'react';

interface CardProps {
    imageSrc: string;
    altText: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, altText, text }) => {
    return (
        <div style={styles.card}>
            <img src={imageSrc} alt={altText} style={styles.image} />
            <div style={styles.textContainer}>
                <p style={styles.text}>{text}</p>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        width: '300px',
        margin: '16px',
    },
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
};

export default Card;
