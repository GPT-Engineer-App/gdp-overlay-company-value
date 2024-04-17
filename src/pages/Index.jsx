// Complete the Index page component for Lonis Hamaili's personal website
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { FaGlobeAmericas } from "react-icons/fa";

const DynamicGraph = () => {
  return <Text>Dynamic graph content will be here.</Text>;
};

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMb25pcyUyMEhhbWFpbGklMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMzODM2NjZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Lonis Hamaili" mb={4} />
        <Heading as="h1" size="xl">
          Lonis Hamaili
        </Heading>
        <Text fontSize="lg" color="gray.500">
          Economic Analyst
        </Text>
      </Flex>

      <DynamicGraph />

      <Flex justify="center" mt={10}>
        <FaGlobeAmericas size="3em" color="#3182CE" />
      </Flex>
    </Box>
  );
};

export default Index;
