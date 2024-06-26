function App() {
  return (
    <explo-dashboard
      dash-jwt="add token here"
      updateUrlParams={true}
      isProduction={true}
      environment="development"
      refresh-minutes={10}
      variables={JSON.stringify({
        element1: 'value',
        element2: 'value2',
      })}
    />

  );
}

export default App;
