import React, { useState, useEffect } from 'react';
import Searchbar from "./components/Searchbar/SearchBar";
import { Layout } from "./components/Layout/Layout";
import { Card } from './components/Card/Card';
import UserModal from './components/UserModal/UserModal';
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cards, setCards] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('/users.json') 
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []); 

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

   const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="App">
      <Layout>
        <Searchbar onSearch={handleSearch} />
        <div className="card-list">
          {filteredCards.map((card) => (
            <div key={card.id} onClick={() => openModal(card)}>
                <Card key={card.id} name={card.name} phone={card.phone} email={card.email} />
            </div>
          ))}
        </div>
         {selectedUser && (
          <UserModal user={selectedUser} onClose={closeModal} />
        )}
      </Layout>
    </div>
  );
}

export default App;
