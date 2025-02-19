import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { View } from 'react-native';
import Svg, { SvgProps, Path, G, Defs, Rect, ClipPath } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const XIcon = (props: SvgProps) => {
  return (
    <Svg width="48" height="48" viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M37.3432 2H44.3942L28.9127 20.2472L47 45H32.8061L21.6931 29.9579L8.97068 45H1.91969L18.3209 25.4834L1 2H15.5465L25.5865 15.741L37.3432 2ZM34.8754 40.7159H38.7841L13.4925 6.12546H9.29257L34.8754 40.7159Z"
        fill={props.fill ?? 'black'}
      />
    </Svg>
  );
};
export default XIcon;
