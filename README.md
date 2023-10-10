# Customer Rewards Program - by Chris Kennedy

React web application that renders 5 different customers who have 8 different transactions during the period of June 1 to September 1, 2023. Technologies used are React, Vite, Javascript, and CSS.

### Application Info

Application breakdown:
- "features" directory contains the main "GetTransactions" react component.
- "pages" directory contains the entry component "Transactions" that imports "GetTransactions".
- "data/transactionsdata.json" contains the mock data that consists of 5 different customers and their individual transaction data.
- "constants.js" and "utils/async.js" contains the async logic to fetch the mock data from transactionsdata.json.
- "context/TransactionsContext.jsx" contains the contextAPI (state management) logic that includes async logic to fetch the mock data and store in a context state object, custom contextAPI hook "useTransactionsContext", and the context provider "TransactionsProvider".
- Does not contain an API request. Fetching of local mock data is done via async functionality and stored in a ContextAPI object.
- Did not do much styling to render the final data output.

### Installation and Run

1. Install NPM packages
   ```sh
   npm install
   ```

2. Run application
   ```sh
   npm run dev
   ```