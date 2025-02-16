import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Bookmark, LucideIcon, User, Users, Receipt, Mic } from 'lucide-react-native';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { Container } from './Container';
import PressableScale from './ui/PressableScale';
const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <Container className="m-4">
      <View className="gap-2">
        <DrawerItem label="Profile" Icon={User} />
        <DrawerItem label="Profile" Icon={Users} />
        <DrawerItem label="Profile" Icon={Bookmark} />
        <DrawerItem label="Profile" Icon={Receipt} />
        <DrawerItem label="Profile" Icon={Mic} />
        <DrawerItem label="Profile" Icon={Receipt} />
        <Text>DrawerContaaaent</Text>
      </View>
    </Container>
  );
};

export default DrawerContent;

const DrawerItem = ({ label, Icon }: { label: string; Icon: LucideIcon }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <PressableScale onHoverIn={() => setIsHovered(true)} onHoverOut={() => setIsHovered(false)}>
      <>
        <View
          className={`rounded-full  px-4 py-2 ${isHovered ? 'bg-gray-100' : ''} flex-row items-center gap-4`}>
          <Icon size={22} color="red" />
          <Text className="select-none text-lg font-bold">{label}</Text>
        </View>
      </>
    </PressableScale>
  );
};
