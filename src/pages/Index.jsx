import { Container, VStack, Text, Input, Button, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl" mb="8">Todo App</Text>
        <Input
          placeholder="Add a new task"
          value={inputValue}
          onChange={handleInputChange}
          size="md"
          width="100%"
        />
        <Button onClick={handleAddTask} colorScheme="blue" mt="4">Add Task</Button>
        <List spacing={3} mt="8" width="100%">
          {tasks.map((task, index) => (
            <ListItem key={index} display="flex" alignItems="center">
              <ListIcon as={FaCheckCircle} color="green.500" />
              <Text ml="2">{task}</Text>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;