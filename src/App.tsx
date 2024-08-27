// App.tsx (or App.jsx)
import { Box, Flex } from "@mantine/core";
import CurrencyEexchange from "./pages/currency-exchange/CurrencyEexchange";
import Transaction from "./pages/transaction/Transaction";
import RecoveryPhrase from "./pages/currency-exchange/RecoveryPhrase";

function App() {
  return (
    <Box p={100}>
      <Box bg="white" miw="390px">
        <Flex justify="center" align="center" gap={100} direction="column">
          <Box
            p={20}
            // bd="1px solid black"
            style={{
              borderRadius: "20px",
            }}
          >
            <CurrencyEexchange />
          </Box>
          <Box
            p={20}
            // bd="1px solid black"
            style={{
              borderRadius: "20px",
            }}
          >
            <Transaction />
          </Box>
          <Box
            p={20}
            // bd="1px solid black"
            style={{
              borderRadius: "20px",
            }}
          >
            <RecoveryPhrase />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
