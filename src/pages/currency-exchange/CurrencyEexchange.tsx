import { Box, Button, Flex, Text } from "@mantine/core";
import { FaChevronDown, FaEthereum } from "react-icons/fa";
import { IoLogoUsd, IoMdCopy } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const CurrencyEexchange = () => {
  return (
    <Box w="311px" mih="600px">
      <Flex
        align="center"
        justify="space-between"
        style={{ paddingBottom: "15px", borderBottom: "1px solid black" }}
      >
        <Flex justify="center" align="center" gap={10}>
          <Button bg="#E84F1F" w={80}>
            SEND
          </Button>
          <Button
            w={80}
            p={1}
            variant="outline"
            c="#E84F1F"
            bd="1px solid #E84F1F"
          >
            Exchange
          </Button>
        </Flex>
        <RxHamburgerMenu color="#E84F1F" fontSize={30} />
      </Flex>
      <Box mt={50}>
        <Text fz={12} ta="center" c="#6c757d" mt={15}>
          Wallet Address
        </Text>
        <Flex justify="center" align="center" gap={40} mb={15}>
          <Text fz={12} c="#f4acb7">
            1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
          </Text>
          <IoMdCopy />
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          p={10}
          style={{
            border: "1px solid #E84F1F",
            borderRadius: "5px",
          }}
        >
          <Flex justify="center" align="center" gap={5}>
            <FaEthereum color="blue" />
            <Text>Ethereum</Text>
          </Flex>
          <Flex justify="center" align="center" gap={5}>
            <Text c="#f4acb7">ETH</Text>
            <FaChevronDown fontSize={12} />
          </Flex>
        </Flex>
      </Box>
      <Text fz={12} my={5} c="#f4acb7">
        Current Balance : 0.234567 ETH
      </Text>
      <Text fz={12} c="#6c757d" ta="left" mt={20} mb={5}>
        Amount
      </Text>
      <Flex
        justify="space-between"
        align="center"
        p={10}
        style={{
          border: "1px solid #E84F1F",
          borderRadius: "5px",
        }}
      >
        <Flex justify="center" align="center" gap={5}>
          <IoLogoUsd color="#1c5d99" />
          <Text>US Dollar</Text>
        </Flex>
        <Flex justify="center" align="center" gap={5}>
          <Text c="#f4acb7">USD</Text>
          <FaChevronDown fontSize={12} />
        </Flex>
      </Flex>
      <Flex justify="center" my={50}>
        <Button bg="#E84F1F" w={200}>
          CONTINUE
        </Button>
      </Flex>
    </Box>
  );
};

export default CurrencyEexchange;
