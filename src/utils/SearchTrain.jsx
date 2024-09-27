import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import UserApi from "../Service/module/userModule.api";
import { useDebounce } from "../hooks/useDebounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const SearchTrain = ({
  setSerachingResult,
  fontSize = "inherit",
  setTestResult,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const debouncedSearch = useDebounce(searchTerm);

  const handleSearch = useCallback(async () => {
    if (debouncedSearch) {
      setLoading(true);
      const { response } = await new UserApi().getCarriageNumber();
      setLoading(false);
      const results = response?.data?.filter((number) =>
        number?.carriage_number.toString().includes(debouncedSearch)
      );

      setSerachingResult(debouncedSearch);
      setSearchResults(results);
      if (typeof setTestResult === "function") {
        setTestResult(results);
      }

      if (results.length === 0) {
        setSearchResults([
          { errorTitile: "Bu turdagi vagon topilmadi", isNot: true },
        ]);
      }
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearch, setSerachingResult, setTestResult]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const handleNumberClick = useCallback((clickedNumber) => {
    setSearchTerm(clickedNumber?.carriage_number.toString());
  }, []);
  return (
    <FormControl>
      {fontSize !== "del" && (
        <FormLabel fontSize={fontSize}>Vagon raqami</FormLabel>
      )}
      <Input
        type="number"
        onChange={(e) => setSearchTerm(e.target.value)}
        borderColor={"gray.600"}
        value={searchTerm}
        placeholder="Vagon raqami kiriting"
        _focus={{ boxShadow: "none" }} // Remove focus styling to avoid triggering autofill
        autoComplete="off"
      />

      {debouncedSearch ? (
        <List
          bgColor={"gray.100"}
          position={"absolute"}
          w={"100%"}
          rounded={2}
          zIndex={1000}
        >
          {!isLoading ? (
            searchResults?.map((item, idx) =>
              item.isNot ? (
                <ListItem key={idx} textAlign={"center"} p={"20px 0"}>
                  <Text color={"gray.600"}>
                    <FontAwesomeIcon size="xl" icon={faWarning} />
                  </Text>
                  {item.errorTitile}
                </ListItem>
              ) : (
                <ListItem
                  my={3}
                  display={debouncedSearch === item.carriage_number && "none"}
                  transition={"0.2s"}
                  _hover={{ bgColor: "#fff" }}
                  rounded={5}
                  cursor={"pointer"}
                  padding={"2px 5px"}
                  key={item.carriage_number}
                  onClick={() => handleNumberClick(item)}
                  tabIndex={0}
                >
                  {item.carriage_number}
                </ListItem>
              )
            )
          ) : (
            <Flex justify={"center"} height={"50px"} py={4} align={"center"}>
              <Spinner />
            </Flex>
          )}
        </List>
      ) : null}
    </FormControl>
  );
};

SearchTrain.propTypes = {
  setSerachingResult: PropTypes.func,
  fontSize: PropTypes.string,
  setTestResult: PropTypes.func,
};
