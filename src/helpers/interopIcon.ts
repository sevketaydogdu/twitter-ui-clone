import { LucideIcon } from 'lucide-react-native';
import { cssInterop } from 'nativewind';

export function interopIcon(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}
