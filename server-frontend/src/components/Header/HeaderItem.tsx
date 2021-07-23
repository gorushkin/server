import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

interface HeaderItemProps {
  label: string;
  href: string;
}

const HeaderItem = ({ label, href }: HeaderItemProps) => (
  <Link
    color="inherit"
    component={RouterLink}
    className="header__link"
    to={href}
  >
    <Typography color="initial">{label}</Typography>
  </Link>
);

export default HeaderItem;
