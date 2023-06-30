import { Box, Container, Flex, HStack, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      {/* 全ての要素を縦に並べて、一番最後のFlexのボックスだけを横に並べる */}
      <VStack>
        <Flex textColor={"primary.500"} fontSize="xl">
          <Text marginRight={"28"} fontSize="2xl">
            VStack
          </Text>
          <Text color={"secondary.300"}>user</Text>
        </Flex>
        <Flex textColor={"primary.500"} fontSize="xl">
          <Text marginRight={"28"} fontSize="inherit">
            VStack
          </Text>
          <Text color={"secondary.300"}>user</Text>
        </Flex>
        <HStack>
          <Flex textColor={"primary.500"} fontSize="xl">
            <Text marginRight={"28"} fontSize="inherit">
              HStack
            </Text>
            <Text color={"secondary.300"}>user</Text>
          </Flex>
          <Flex textColor={"primary.500"} fontSize="xl">
            <Text marginRight={"28"} fontSize="inherit">
              HStack
            </Text>
            <Text color={"secondary.300"}>user</Text>
          </Flex>
        </HStack>
      </VStack>
    </Container>
  );
}
