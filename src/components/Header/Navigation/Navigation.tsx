import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Props {
  mode: string;
}
export const Navigation: React.FC<Props> = ({ mode }) => {
  const { t } = useTranslation();
  return (
    <nav>
      <NavLink to="/">{t('Navigation.current')}</NavLink>
      <NavLink to="/forecast">{t('Navigation.forecast')}</NavLink>
    </nav >
  )
}
