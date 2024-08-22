import { Box, Flex, Text, Grid, Button } from "@mantine/core";
import { BsThreeDots } from "react-icons/bs";
import { FaBtc, FaEthereum } from "react-icons/fa";
import { GiGasPump } from "react-icons/gi";
import { IoLogoUsd } from "react-icons/io";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Transaction = () => {
  return (
    <Box mih="600px">
      <Flex
        justify="space-between"
        gap={35}
        align="center"
        style={{
          paddingBottom: "5px",
          borderBottom: "1px solid black",
        }}
      >
        <RxHamburgerMenu color="#E84F1F" fontSize={30} />
        <Box>
          <Text fz={18} ta="center" fw={600} c="#E84F1F">
            Account Name
          </Text>
          <Text fz={10} ta="center" c="#6c757d">
            1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa
          </Text>
        </Box>
        <BsThreeDots color="#E84F1F" />
      </Flex>
      <Text fz={10} ta="right" mt={7}>
        <GiGasPump />
        Gas price : 1.131 Gwei
      </Text>
      <Box mt={20}>
        <Grid>
          <Grid.Col span={4}>
            <Flex justify="center" align="center">
              <FaEthereum fontSize={30} color="blue" />
            </Flex>
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex justify="center" align="center">
              <FaBtc fontSize={30} color="#240046" />
            </Flex>
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex justify="center" align="center">
              <IoLogoUsd fontSize={30} color="#1c5d99" />
            </Flex>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={4}>
            <Flex justify="center" align="center">
              <Text>0.234567</Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex justify="center" align="center">
              <Text>0.005678</Text>
            </Flex>
          </Grid.Col>
          <Grid.Col span={4}>
            <Flex justify="center" align="center">
              <Text>150.123456</Text>
            </Flex>
          </Grid.Col>
        </Grid>
        <Flex justify="center" align="center" gap={10} p={20}>
          <Button bg="#E84F1F" w={100} p={1}>
            EXCHANGE
          </Button>
          <Button bg="#E84F1F" w={100}>
            SEND
          </Button>
        </Flex>
        <Box mt={25}>
          <Text fz={10} ta="left" c="#6c757d" mb={5}>
            History
          </Text>
          <Flex justify="center" align="center" direction="column">
            <Box
              style={{
                borderTop: "1px solid #b7d1da",
                marginBottom: "10px",
              }}
            >
              <Text ta="left" fz={10} c="#3d3b3c">
                #2-8/28/2024 at 12:40
              </Text>
              <Flex justify="space-between" align="center" gap={130}>
                <Flex justify="center" align="center" gap={20}>
                  <MdOutlineCurrencyExchange fontSize={30} color="#ff7f11" />
                  <Box>
                    <Text fz={16}>Execute</Text>
                    <Text
                      fz={10}
                      c="#E84F1F"
                      bg="#F5F2E0"
                      pl={5}
                      style={{ borderRadius: "5px" }}
                    >
                      Approved
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <Text>$ 0.00 USD</Text>
                </Box>
              </Flex>
            </Box>
            <Box
              style={{
                borderTop: "1px solid #b7d1da",
                marginBottom: "10px",
              }}
            >
              <Text ta="left" fz={10} c="#3d3b3c">
                #2-8/28/2024 at 12:40
              </Text>
              <Flex justify="space-between" align="center" gap={130}>
                <Flex justify="center" align="center" gap={20}>
                  <MdOutlineCurrencyExchange fontSize={30} color="#ff7f11" />
                  <Box>
                    <Text fz={16}>Execute</Text>
                    <Text
                      fz={10}
                      c="#E84F1F"
                      bg="#F5F2E0"
                      pl={5}
                      style={{ borderRadius: "5px" }}
                    >
                      Approved
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <Text>$ 0.00 USD</Text>
                </Box>
              </Flex>
            </Box>
            <Box
              style={{
                borderTop: "1px solid #b7d1da",
                marginBottom: "10px",
              }}
            >
              <Text ta="left" fz={10} c="#3d3b3c">
                #2-8/28/2024 at 12:40
              </Text>
              <Flex justify="space-between" align="center" gap={130}>
                <Flex justify="center" align="center" gap={20}>
                  <MdOutlineCurrencyExchange fontSize={30} color="#ff7f11" />
                  <Box>
                    <Text fz={16}>Execute</Text>
                    <Text
                      fz={10}
                      c="#E84F1F"
                      bg="#F5F2E0"
                      pl={5}
                      style={{ borderRadius: "5px" }}
                    >
                      Approved
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <Text>$ 0.00 USD</Text>
                </Box>
              </Flex>
            </Box>
            <Box
              style={{
                borderTop: "1px solid #b7d1da",
                marginBottom: "10px",
              }}
            >
              <Text ta="left" fz={10} c="#3d3b3c">
                #2-8/28/2024 at 12:40
              </Text>
              <Flex justify="space-between" align="center" gap={130}>
                <Flex justify="center" align="center" gap={20}>
                  <MdOutlineCurrencyExchange fontSize={30} color="#ff7f11" />
                  <Box>
                    <Text fz={16}>Execute</Text>
                    <Text
                      fz={10}
                      c="#E84F1F"
                      bg="#F5F2E0"
                      pl={5}
                      style={{ borderRadius: "5px" }}
                    >
                      Approved
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <Text>$ 0.00 USD</Text>
                </Box>
              </Flex>
            </Box>
            <Box
              style={{
                borderTop: "1px solid #b7d1da",
                marginBottom: "10px",
              }}
            >
              <Text ta="left" fz={10} c="#3d3b3c">
                #2-8/28/2024 at 12:40
              </Text>
              <Flex justify="space-between" align="center" gap={130}>
                <Flex justify="center" align="center" gap={20}>
                  <MdOutlineCurrencyExchange fontSize={30} color="#ff7f11" />
                  <Box>
                    <Text fz={16}>Execute</Text>
                    <Text
                      fz={10}
                      c="#E84F1F"
                      bg="#F5F2E0"
                      pl={5}
                      style={{ borderRadius: "5px" }}
                    >
                      Approved
                    </Text>
                  </Box>
                </Flex>
                <Box>
                  <Text>$ 0.00 USD</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Transaction;
