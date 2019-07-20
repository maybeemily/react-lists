import React from 'react';
import Colors from './Colors';

export default function App() {
  const colorArray = [
    { name: 'olive', hex: '#808000', rgb: '(0, 0, 128)' },
    { name: 'olivedrab', hex: '#6B8E23', rgb: '(128, 128, 0)' },
    { name: 'orange', hex: '#FFA500', rgb: '(107, 142, 35)' }, 
    { name: 'orangered', hex: '#FF4500', rgb: '(255, 165, 0)' }, 
    { name: 'orchid', hex: '#DA70D6', rgb: '(255, 69, 0)' },
    { name: 'navy', hex: '#000080', rgb: '(218, 112, 214)' }
  ];

  return (
    <Colors colors={colorArray} />
  );
}
