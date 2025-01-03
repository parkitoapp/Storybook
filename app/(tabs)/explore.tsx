import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import React from 'react';

export default function TabTwoScreen() {
  return (
    <div>
    <Button variant="destructive">PARKITO</Button>
    <Button variant="default">PARKITO</Button>
    <Button variant="ghost">PARKITO</Button>
    <Button variant="link">PARKITO</Button>
    <Button variant="outline">PARKITO</Button>
    <Button variant="secondary">PARKITO</Button>
  </div> 
  ); 
  
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Card Content</Text>
      </CardContent>
      <CardFooter>
        <Text>Card Footer</Text>
      </CardFooter>
    </Card>
);

}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});


