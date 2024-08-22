import { Box, Button, Flex, Grid, Text } from "@mantine/core";

const RecoveryPhrase = () => {
  return (
    <Box w="311px" mih="600px">
      <Box>
        <Text fz={25} lh="25px" fw={600} c="#E84F1F" ta="center">
          Write Down Your Wallet <br />
          Recovery Phrase
        </Text>
        <Box fz={20} fw={500} bg="#caf0f8" px={20} my={15}>
          wait crop render punch odor execute misery
        </Box>
        <Box>
          <Text mb={10} mt={40} ta="center">
            your wallet seed phrase
          </Text>
          <Grid>
            <Grid.Col span={12}>
              <Flex justify="center" align="center" gap={20}>
                <Button
                  variant="outline"
                  c="#E84F1F"
                  bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  1. pioneer
                </Button>
                <Button
                  //   variant="outline"
                  bg="#E84F1F"
                  //   bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  7. misery
                </Button>
              </Flex>
            </Grid.Col>
            <Grid.Col span={12}>
              <Flex justify="center" align="center" gap={20}>
                <Button
                  //   variant="outline"
                  bg="#E84F1F"
                  //   bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  2. render
                </Button>
                <Button
                  //   variant="outline"
                  bg="#E84F1F"
                  //   bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  8. execute
                </Button>
              </Flex>
            </Grid.Col>
            <Grid.Col span={12}>
              <Flex justify="center" align="center" gap={20}>
                <Button
                  variant="outline"
                  c="#E84F1F"
                  bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  3. ozone
                </Button>
                <Button
                  variant="outline"
                  c="#E84F1F"
                  bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                  ta="left"
                >
                  9. zoo
                </Button>
              </Flex>
            </Grid.Col>
            <Grid.Col span={12}>
              <Flex justify="center" align="center" gap={20}>
                <Button
                  //   variant="outline"
                  bg="#E84F1F"
                  //   bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  4. odor
                </Button>
                <Button
                  //   variant="outline"
                  bg="#E84F1F"
                  //   bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  10. crop
                </Button>
              </Flex>
            </Grid.Col>
            <Grid.Col span={12}>
              <Flex justify="center" align="center" gap={20}>
                <Button
                  //   variant="outline"
                  bg="#E84F1F"
                  //   bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  5. wait
                </Button>
                <Button
                  //   variant="outline"
                  bg="#E84F1F"
                  //   bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  6.punch
                </Button>
              </Flex>
            </Grid.Col>
            <Grid.Col span={12}>
              <Flex justify="center" align="center" gap={20}>
                <Button
                  variant="outline"
                  c="#E84F1F"
                  bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  12.nest
                </Button>
                <Button
                  variant="outline"
                  c="#E84F1F"
                  bd="1px solid #E84F1F"
                  w={100}
                  p={1}
                >
                  1. pioneer
                </Button>
              </Flex>
            </Grid.Col>
          </Grid>
          <Flex mt={40} justify="center" align="center">
            <Button bg="#E84F1F" w="120">
              NEXT
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default RecoveryPhrase;
