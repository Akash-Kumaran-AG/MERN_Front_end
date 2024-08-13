import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Pets.css';
import { useNavigate } from 'react-router-dom';

function Pets() {
    const [pets, setPets] = useState([]);
    const [filter, setFilter] = useState('all'); // State to track the current filter
    const navigate = useNavigate();
    const [isNavVisible, setNavVisible] = useState(true);

    useEffect(() => {
        axios.get('https://mern-back-end-aocr.onrender.com/fetchPet')
            .then(response => {
                setPets(response.data);
            })
            .catch(error => console.error('Error fetching pets:', error));
    }, []);
    const toggleNav = () => {
        setNavVisible(!isNavVisible);
    };
    function Sidebar() {
        return (
            <div className={`sidebar ${isNavVisible ? 'visible' : 'hidden'}`}>
                <div className="toggle-button" onClick={toggleNav}>
                    {isNavVisible ? '←' : '→'}
                </div>
                {isNavVisible && (
                    <ul>
                        <li><a href="/Pets" onClick={() => setFilter('all')}>Home</a></li>
                        <li><a href="#" onClick={() => setFilter('dogs')}>Dogs</a></li>
                        <li><a href="#" onClick={() => setFilter('cats')}>Cats</a></li>
                       
                    </ul>
                )}
            </div>
        );
    }

    const bull = 'https://cdn.britannica.com/08/234208-050-C9A21C4C/English-bulldog-dog.jpg';
    const boxer = 'https://www.thesprucepets.com/thmb/YwjpUBfdG8mkz2L64CX4-mA8cko=/1539x0/filters:no_upscale():strip_icc()/boxer-dog-breed-1117944-hero-dfe9f67a59ce4ab19ebd274c06b28ad1.jpg';
    const golden = 'https://www.dogster.com/wp-content/uploads/2022/08/golden-retriever-dog-on-the-ground_Olena-Brodetska_Shutterstock-600x398.jpg';
    const labrador = 'https://cdn.britannica.com/82/232782-050-8062ACFA/Black-labrador-retriever-dog.jpg';
    const siberian = 'https://cdn.britannica.com/84/232784-050-1769B477/Siberian-Husky-dog.jpg';
    const persian = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD1h6Nq3bk8oBAbuBiLJo5xphZmerR_JDigw&s';
    const british = 'https://cdn.royalcanin-weshare-online.io/l1bb9noBBKJuub5qBbou/v3/bp-lot-2-british-shorthair-color-activity';
    const blue = 'https://images.wagwalkingweb.com/media/daily_wag/blog_articles/hero/1604357394.3124568/cat-1512652_1920.jpg';
    const german = 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/11/german-shepherd-temperament.jpeg-Cropped.jpg';
    const pomernian = 'https://www.zooplus.co.uk/magazine/wp-content/uploads/2021/03/grey-pomeranian-puppy.jpg';
    const pug = 'https://images.prismic.io/trustedhousesitters/da34cb01-4b2d-437a-8b3e-07f6b64477ce_teacup+pug+puppies.jpg?auto=compress,format&rect=0,0,1920,800&w=960&h=400';
    const angora = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Turkish_Angora_in_Ankara_Zoo_%28AO%C3%87%29.JPG/640px-Turkish_Angora_in_Ankara_Zoo_%28AO%C3%87%29.JPG';
    const aegean = 'https://lh3.googleusercontent.com/proxy/sr2VOcgcKMS1mNwBCcKj5BnDw7j52-A_Svj1BpixjPDQ9mLEkB89Pd4k622P_7_IY2hMEoK7D2QKF-MqSr1obUR3jcka5URktPIKgW24D1ft';
    const manx = 'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2021/04-08/calico+manx+cat+resting+on+a+wooden+kitchen+floor-min.jpg';
    const toyger = 'https://i.pinimg.com/736x/d2/6a/bf/d26abf0cf5c85de90e9e150a70627e0d.jpg';
    const selkirk = 'https://image.petmd.com/files/styles/863x625/public/2024-03/selkirk-rex.jpg';
    const scottish = 'https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2023/07/scottish-fold-cat-breed-2476092.jpg?size=*:900';

    const handleCardClick = () => {
        navigate(`/Form`);
    };

    const handleAddPetClick = () => {
        navigate('/Addpet'); // Navigate to the page where you add a new pet
    };

    const getRandomImage = (breed) => {
        
    
        let images;
    
        switch (true) {
            case breed.toLowerCase().includes('bull'):
                images = bull;
                break;
            case breed.toLowerCase().includes('persian'):
                images = persian;
                break;
            case breed.toLowerCase().includes('boxer'):
                images = boxer;
                break;
            case breed.toLowerCase().includes('british'):
                images = british;
                break;
            case breed.toLowerCase().includes('siberian'):
                images = siberian;
                break;
            case breed.toLowerCase().includes('golden'):
                images = golden;
                break;
            case breed.toLowerCase().includes('labrador'):
                images = labrador;
                break;
            case breed.toLowerCase().includes('blue'):
                images = blue;
                break;
            case breed.toLowerCase().includes('german'):
                images = german;
                break;
            case breed.toLowerCase().includes('pomernian'):
                images = pomernian;
                break;
            case breed.toLowerCase().includes('pug'):
                images = pug;
                break;
            case breed.toLowerCase().includes('angora'):
                images = angora;
                break;
            case breed.toLowerCase().includes('aegean'):
                images = aegean;
                break;
            case breed.toLowerCase().includes('manx'):
                images = manx;
                break;
            case breed.toLowerCase().includes('toyger'):
                images = toyger;
                break;
            case breed.toLowerCase().includes('selkirk'):
                images = selkirk;
                break;
            case breed.toLowerCase().includes('scottish'):
                images = scottish;
                break;
            default:
                images = ''; // Default case if no match is found
                break;
        }
    
        return images;
    };
    

    // Filter pets based on the selected filter
        // Filter pets based on the selected filter
        const filteredPets = pets.filter(pet => {
            if (!pet.breed) {
                return false; // Skip pets with undefined or null breed
            }
        
            if (filter === 'dogs') {
                return ['bull', 'boxer', 'golden', 'labrador', 'siberian', 'german', 'pomernian', 'pug'].some(breed => pet.breed.toLowerCase().includes(breed));
            } else if (filter === 'cats') {
                return ['persian', 'british', 'blue', 'angora', 'aegean', 'manx', 'toyger', 'selkirk', 'scottish'].some(breed => pet.breed.toLowerCase().includes(breed));
            } else {
                return true; // Show all pets when no filter is applied (home)
            }
        });
        

    return (
        <div className="containe">
            <Sidebar />
            <div className="content">
                <center><h1>Pets</h1></center>
                <center><h3>Find your new Friend Here!!!</h3></center>
                <button className="add-pet-button" onClick={handleAddPetClick}>ADD PET+</button>
                <div className='pets-container'>
                    {filteredPets.length === 0 ? (
                        <p>No pets available</p>
                    ) : (
                        filteredPets.map(pet => (
                            <div key={pet._id} className="pet-card" onClick={() => handleCardClick()}>
                                <div className="pet-image-container">
                                    {/* <img
                                        src={getRandomImage(pet.breed)}
                                        alt={pet.name}
                                        style={{ width: '320px', height: '300px' }}
                                    /> */}
                                        <img 
                                        src={pet.Imgurl}
                                        alt={pet.name}
                                        style={{ width: '320px', height: '300px' }}
                                        />
                                </div>
                                <div className='pet-details'>
                                    <h3 className="pet-name">{pet.petname}</h3>
                                    <p className="pet-description">Age: {pet.petage}</p>
                                    <p className="pet-description">Gender: {pet.gender}</p>
                                    <p className="pet-description">Breed: {pet.breed}</p>
                                    <p className="pet-description">Contact: {pet.contact}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Pets;