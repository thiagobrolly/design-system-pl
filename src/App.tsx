import React from 'react';

import { Button, Separator, Heading } from './lib';

const App: React.FC = () => {
  return (
    <>
      <h1>Teste</h1>
      <Button
        // backgroundColor="red"
        // color="green"
        // disabled
        // outlined
        themeButton="blue"
        children="Teste"
      />
      <Separator />
      <Heading children="teste" uppercase />
    </>
  );
};

export default App;
