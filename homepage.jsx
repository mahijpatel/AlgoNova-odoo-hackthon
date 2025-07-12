// HomePage.jsx
import { Box, Heading, Input, Tag, Stack } from "@chakra-ui/react";

const HomePage = () => (
  <Box p={5}>
    <Heading mb={4}>StackIt 🧠</Heading>
    <Input placeholder="Search questions..." />
    {/* Sample question card */}
    <Stack mt={4} spacing={4}>
      <Box p={4} bg="warmSand" borderRadius="md">
        <Heading size="sm">How to use JWT with React?</Heading>
        <Tag colorScheme="blue" mr={2}>React</Tag>
        <Tag colorScheme="purple">JWT</Tag>
      </Box>
    </Stack>
  </Box>
);

export default HomePage;