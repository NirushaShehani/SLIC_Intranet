import React, { useState } from 'react';
import '../../Styles/BranchEvents.css';
import Event2 from '../../assets/Event_2.jpg';


const images = [
    { id: 1, src: Event2, title: 'Our Trincomalee Branch has undergone remarkable transformation!' },
    { id: 2, src: Event2, title: 'Developments in previously disjointed fields such as artificial' },
    { id: 3, src: Event2, title: 'Far far away, behind the word mountains, far from the countries Vokalia' },
    { id: 4, src: Event2, title: 'One morning, when Gregor Samsa woke from troubled dreams' },
    { id: 5, src: Event2, title: '10 technologies that will transform the global economy by 2025' },
    { id: 6, src: Event2, title: 'Special Event at Our Branch' },
    { id: 7, src: Event2, title: 'Innovations in AI and Machine Learning' },
    { id: 8, src: Event2, title: 'Exploring the future of technology' },
    { id: 9, src: Event2, title: 'Advancements in renewable energy' },
    { id: 10, src: Event2, title: 'The impact of quantum computing' },
    { id: 11, src: Event2, title: 'Breakthroughs in medical science' },
    { id: 12, src: Event2, title: 'Next-gen communication systems' },
];

const BranchEvents = () => {
    const [counts, setCounts] = useState(images.reduce((acc, image) => {
        acc[image.id] = 85; // Initial count set to 85 for each image
        return acc;
    }, {}));

    const handleLike = (id) => {
        setCounts({ ...counts, [id]: counts[id] + 1 });
    };

    const handleDislike = (id) => {
        setCounts({ ...counts, [id]: counts[id] - 1 });
    };

    return (
        <div className="container">
            {images.map(image => (
                <div key={image.id} className="card">
                    <img src={image.src} alt={image.title} />
                    <div className="content">
                        <p className="title">{image.title}</p>
                        <div className="buttons">
                            <button onClick={() => handleLike(image.id)}>👍</button>
                            <button onClick={() => handleDislike(image.id)}>👎</button>
                        </div>
                        <p>{counts[image.id]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BranchEvents;
