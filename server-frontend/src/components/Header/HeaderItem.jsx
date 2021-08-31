import { Link } from 'react-router-dom';

const HeaderItem = ({ label, href }) => (
  <li className="nav-item">
    <Link aria-current="page" className="nav-link active" to={href}>
      {label}
    </Link>
  </li>
);

export default HeaderItem;
