import React from 'react';
import UrgentPriorityIcon from '../assets/SVG - Urgent Priority colour.svg';
import HighPriorityIcon from '../assets/Img - High Priority.svg';
import MediumPriorityIcon from '../assets/Img - Medium Priority.svg';
import LowPriorityIcon from '../assets/Img - Low Priority.svg';
import NoPriorityIcon from '../assets/No-priority.svg';


const priorityIcons = {
  Urgent: UrgentPriorityIcon,
  High: HighPriorityIcon,
  Medium: MediumPriorityIcon,
  Low: LowPriorityIcon,
  'No priority': NoPriorityIcon,
};

const TicketCard = ({ ticket }) => {
  const { title, status, priority, assigned_user } = ticket;
  
  // Priority handling: get the correct icon based on priority
  const PriorityIcon = priorityIcons[priority];

  return (
    <div className="ticket-card">
      <h3>{title}</h3>
      <p>Status: {status}</p>
      <p>Priority: {priority}</p>
      
      {/* Display SVG icon for priority */}
      {PriorityIcon && <img src={PriorityIcon} alt={`${priority} Priority Icon`} />}

      <p>User: {assigned_user}</p>
    </div>
  );
};

export default TicketCard;
