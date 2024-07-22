import './App.css';
import ActionCable from "actioncable";
import ActionCableLink from "graphql-ruby-client/subscriptions/ActionCableLink";
import { split, HttpLink, InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { TestComponent } from './TestComponent';

function App() {
  // Setup a link for action cable
  const cable = ActionCable.createConsumer(process.env.REACT_APP_WS_ENDPOINT);
  console.log(process.env.REACT_APP_WS_ENDPOINT);
  const actionCableLink = new ActionCableLink({ cable });
  const httpLink = new HttpLink({uri: process.env.REACT_APP_GRAPHQL_ENDPOINT});

  // Redirect subscriptions to the action cable link, while using the HTTP link for other queries
  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === "OperationDefinition" && definition.operation === "subscription";
    },
    actionCableLink,
    httpLink
  );

  // Use the new splitLink for the Apollo client
  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return (
    <div className="App">
      <header className="App-header">
        <ApolloProvider client={client}>
          <TestComponent/>
        </ApolloProvider>
      </header>
    </div>
  );
}

export default App;
