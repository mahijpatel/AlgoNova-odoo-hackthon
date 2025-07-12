// AskQuestion.jsx
import { Box, Input, Tag, Button, Textarea } from "@chakra-ui/react";
import RichEditor from "./RichEditor"; // custom component using TipTap or Quill

const AskQuestion = () => (
  <Box p={5}>
    <Input placeholder="Title your question..." mb={4} />
    <RichEditor />
    <Input placeholder="Add tags (comma separated)" mt={4} />
    <Button mt={4} colorScheme="teal">Submit Question</Button>
  </Box>
);

export default AskQuestion;