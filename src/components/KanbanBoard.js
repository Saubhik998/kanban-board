import React from 'react';
import KanbanColumn from './KanbanColumn';

const KanbanBoard = ({ tickets = [], grouping, sorting }) => {
  // Sorting tickets based on priority or title
  const sortTickets = (ticketsArray) => {
    if (!Array.isArray(ticketsArray)) return [];  // Ensure ticketsArray is an array
    if (sorting === 'priority') {
      return [...ticketsArray].sort((a, b) => b.priority - a.priority);
    } else if (sorting === 'title') {
      return [...ticketsArray].sort((a, b) => a.title.localeCompare(b.title));
    }
    return ticketsArray;
  };

  // Grouping tickets based on the selected criteria (status, user, priority)
  const groupTickets = (ticketsArray) => {
    const groups = {};
    ticketsArray.forEach((ticket) => {
      const groupKey = ticket[grouping];
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(ticket);
    });
    return groups;
  };

  const sortedTickets = sortTickets(tickets); // Sort the tickets
  const groupedTickets = groupTickets(sortedTickets); // Group the sorted tickets

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map((group) => (
        <KanbanColumn key={group} group={group} tickets={groupedTickets[group]} />
      ))}
    </div>
  );
};

export default KanbanBoard;
