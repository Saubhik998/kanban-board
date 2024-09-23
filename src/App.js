import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from './components/KanbanBoard';
import GroupSelector from './components/GroupSelector';
import SortSelector from './components/SortSelector';

import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]); // Initialize tickets as an empty array
  const [grouping, setGrouping] = useState('status');
  const [sorting, setSorting] = useState('priority');

  // Fetch tickets from API
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        console.log(response.data); // Debug: log API response to see its structure
        setTickets(response.data.tickets || []); // Ensure tickets is set as an array
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setTickets([]); // In case of an error, set tickets to an empty array
      }
    };

    fetchTickets();
  }, []);

  return (
    <div className="App">
      <div className="controls">
        <GroupSelector grouping={grouping} setGrouping={setGrouping} />
        <SortSelector sorting={sorting} setSorting={setSorting} />
      </div>
      <KanbanBoard tickets={tickets} grouping={grouping} sorting={sorting} />
    </div>
  );
};

export default App;
