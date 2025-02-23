import { Box, Button, Heading } from "@chakra-ui/react";

function App() {
  return (
    <div className="outer-wrapper">
      <Box textAlign="center" p={5}>
        <Heading>🚀 Vite + React + Chakra UI</Heading>
        <Button colorScheme="blue" mt={4}>
          Click Me
        </Button>
      </Box>
    </div>
  );
}

export default App;
