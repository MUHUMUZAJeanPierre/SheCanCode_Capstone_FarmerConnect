import React, { useState } from 'react';
import { View, Text } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Dropdown = ({style}) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const dropdownItems = [
    { label: 'Farmer specialist', value: 'option1' },
    { label: 'Farmer ', value: 'option2' },
    { label: 'Customer', value: 'option3' }
  ];

  return (
    <>
      <RNPickerSelect
        placeholder={{ label: 'Select...', value: null }}
        items={dropdownItems}
        onValueChange={(value) => setSelectedValue(value)}
        style={{
          inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 2,
            borderColor: 'red',
            borderRadius: 4,
            color: 'black',
            paddingRight: 30,
            marginBottom: 10,
            backgroundColor: 'red',
            borderStyle: 'dotted', // Add border style here
          },
          inputAndroid: {
            fontSize: 16,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderWidth: 0.5,
            borderColor: 'purple',
            borderRadius: 8,
            color: 'black',
            paddingRight: 30,
            marginBottom: 10,
            borderWidth: 10, 
            borderBottomColor: 'gray',
            borderBottomWidth:10,
            // backgroundColor: 'purple',
            borderStyle: 'dashed', 
            // margin:10
          },
        }}
      />
      {/* {selectedValue && <Text   >Selected Value: {selectedValue}</Text>} */}
    </>
  );
};

export default Dropdown;
