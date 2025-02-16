import { icons } from 'lucide-react-native';

export const TabBarIcon = (props: {
  name: keyof typeof icons;
  color?: string;
  size?: number;
  fill?: string;
}) => {
  return (
    <Icon
      {...props}
      size={props.size ?? 24}
      color={props.color ?? 'black'}
      fill={props?.fill ?? 'transparent'}
    />
  );
};

const Icon = ({
  name,
  color,
  size,
  fill,
}: {
  name: keyof typeof icons;
  color: string;
  size: number;
  fill: string;
}) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} stroke={color} fill={fill ? fill : 'transparent'} size={size} />;
};
