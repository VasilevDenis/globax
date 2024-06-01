// App.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import './app.css';
import Card from './components/card/Card';
import searchImage from './images/search.png';
import _ from 'lodash'
import Modal from './components/modal/Modal';

const App = () => {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // Corrected variable name

    const handleInputChange = (event) => {
      const value = event.target.value;
      setInputValue(value);
      sendToServer(value);
    }

    const fetchData = async (query='') => {
      try {
        const response = await axios.get('http://127.0.0.1:3000/' + query);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const sendToServer = _.debounce((value) => {
      const prefix = '?term=';
      const query = value;
      fetchData(prefix + query);
    }, 500);

    const handleCardClick = (item) => {
      setSelectedItem(item);
      setIsModalOpen(true);
    };

    useEffect(() => {
      fetchData();
    }, []);

    const handleCloseModal = () => {
      setIsModalOpen(false);
      setSelectedItem(null);
    };

    return (
      <div className='app'>
        <div className='input-search'>
          <input className='input' type="text" value={inputValue} onChange={handleInputChange} placeholder="Найти пользователя..." />
          <img className='search-icon' src={searchImage} alt="Search Icon"  width='24' height='24'></img>
        </div>
        <div className='cards'>
          {data.map((item, index) => (
            <div key={index} onClick={() => handleCardClick(item)}>
              <Card name={item.name} phone={item.phone} email={item.email} />
            </div>
          ))}
        </div>
        {isModalOpen && selectedItem && ( // Corrected variable name
          <Modal name={selectedItem.name}
          phone={selectedItem.phone}
          email={selectedItem.email}
          date={selectedItem.date}
          jobTitle={selectedItem.jobTitle}
          department={selectedItem.department}
          info={selectedItem.info}
          onClose={handleCloseModal}
          />
        )}
      </div>
    );
};

export default App;
