import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className="inactive" // Start with a default class for inactive state
      activeClassName="active" // Specify the class to apply when the link is active
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
