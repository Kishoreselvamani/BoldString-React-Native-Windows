import React from 'react';
import { View, Text } from 'react-native';

interface BoldTextProps {
  children: React.ReactNode;
  
}
interface ItalicTextProps{
  children:React.ReactNode;
}

const BoldText: React.FC<BoldTextProps> = ({ children }) => (
  <Text style={{ fontWeight: 'bold' }}>{children}</Text>
);

const ItalicText: React.FC<ItalicTextProps> = ({children}) => {
  return(
  <Text style={{fontStyle:'italic'}}>{children} </Text>
  )
};

const App= () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>
        Select <BoldText children='HELLO' /> to get started.
        <BoldText> Hello HPX!! </BoldText>
        
      </Text>
      <Text>
        <ItalicText> Hello HPX GUYS</ItalicText>
      </Text>
    </View>
  );
};

export default App;
