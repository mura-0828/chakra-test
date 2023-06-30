import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const index = () => {
  return (
    <FormControl>
      <FormLabel>name</FormLabel>
      <Input type="text" />
      <FormHelperText>ヘルパーテキスト</FormHelperText>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </FormControl>
  );
};

export default index;
