import Button from '@stories/Button/Button';
import { activeStyle, style } from './SidebarButton.styles';

type SidebarButtonProps = {
  active: boolean;
  children?: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
};

const SidebarButton = ({ active, children, onClick }: SidebarButtonProps) => {
  return (
    <Button
      width="100%"
      customStyle={[style, activeStyle[active ? 'active' : 'inActive']]}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

SidebarButton.defaultProps = {
  active: false,
};

export default SidebarButton;
