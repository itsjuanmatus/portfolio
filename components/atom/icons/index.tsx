import DownArrow from './DownArrow';
import ChevronRight from './ChevronRight';
import Download from './Download';

const icons: any = {
  'down-arrow': DownArrow,
  'chevron-right': ChevronRight,
  download: Download,
};

interface Icon {
  name: string;
  size?: number;
  color?: string;
  style?: any;
  active?: boolean;
  className?: string;
}

const Icon = ({ name, size, color, style, active, className }: Icon) => {
  const IconComponent = icons[name];
  if (IconComponent)
    return <IconComponent {...{ size, color, style, active, className }} />;
  else throw new Error('Icon name not found.');
};

export default Icon;
