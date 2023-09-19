import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          'https://random-data-api.com/api/users/random_user?size=3',
        );

        setUsers(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="employee-list">
      {users.map(user => (
        <div className="employee-card" key={user.id}>
          <div className="employee-header">
            <img src={user.avatar} alt={`Avatar of ${user.username}`} align="middle" />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
          </div>

          <div className="employee-details">
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Date of Birth:</strong> {user.date_of_birth}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>Phone Number:</strong> {user.phone_number}</p>

            <div className="address-details">
              <h3>Address:</h3>
              <p><strong>Street Name:</strong> {user.address.street_name}</p>
              <p><strong>Street Address:</strong> {user.address.street_address}</p>
              <p><strong>City:</strong> {user.address.city}</p>
              <p><strong>State:</strong> {user.address.state}</p>
              <p><strong>Zip Code:</strong> {user.address.zip_code}</p>
              <p><strong>Country:</strong> {user.address.country}</p>
            </div>

            <div className="employment-details">
              <h3>Employment:</h3>
              <p><strong>Title:</strong> {user.employment.title}</p>
              <p><strong>Key Skill:</strong> {user.employment.key_skill}</p>
            </div>

            <div className="subscription-details">
              <h3>Subscription:</h3>
              <p><strong>Plan:</strong> {user.subscription.plan}</p>
              <p><strong>Status:</strong> {user.subscription.status}</p>
              <p><strong>Payment Method:</strong> {user.subscription.payment_method}</p>
              <p><strong>Term:</strong> {user.subscription.term}</p>
            </div>

            <div className="coordinates-details">
              <h3>Coordinates:</h3>
              <p><strong>Lat:</strong> {user.address.coordinates.lat}</p>
              <p><strong>Lng:</strong> {user.address.coordinates.lng}</p>
            </div>

            <div className="credit-card-details">
              <h3>Credit Card:</h3>
              <p><strong>CC Number:</strong> {user.credit_card.cc_number}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
