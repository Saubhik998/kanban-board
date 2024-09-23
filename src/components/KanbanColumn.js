import React from 'react';
import TicketCard from './TicketCard';




import ToDoIcon from '../assets/To-do.svg';
import InProgressIcon from '../assets/in-progress.svg';
import BacklogIcon from '../assets/Backlog.svg';
import CancelledIcon from '../assets/Cancelled.svg';
import DoneIcon from '../assets/Done.svg';

const statusIcons = {
  Todo: ToDoIcon,
  'In Progress': InProgressIcon,
  Backlog: BacklogIcon,
  Cancelled: CancelledIcon,
  Done: DoneIcon,
};
const KanbanColumn = ({ group, tickets }) => {
  // Status handling: get the correct icon based on the column group
  const StatusIcon = statusIcons[group];

  return (
    <div className="kanban-column">
      <h2>
        {group}
        {StatusIcon && <img src={StatusIcon} alt={`${group} Icon`} style={{ marginLeft: '10px' }} />}
      </h2>

      <div className="ticket-list">
        {tickets.map(ticket => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;

