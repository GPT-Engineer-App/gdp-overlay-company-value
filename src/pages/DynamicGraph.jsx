import { Box, Flex, Text } from "@chakra-ui/react";

const DynamicGraph = () => {
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 20;

  const years = Array.from({ length: 21 }, (_, index) => startYear + index);

  return (
    <Flex direction="column" align="center" width="100%">
      {years.map((year) => (
        <Box key={year} width="90%" bg="gray.200" p={2} mt={2}>
          <Text>{year}</Text>
          <Flex>
            <Box width="70%" bg="blue.500" p={2} color="white">
              GDP: Data Unavailable
            </Box>
            <Box width="80%" bg="green.500" p={2} color="white">
              Company Value: Data Unavailable
            </Box>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default DynamicGraph;
