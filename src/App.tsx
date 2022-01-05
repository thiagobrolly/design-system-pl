import React from 'react';

import { Button, Separator, Heading } from './lib';

const App: React.FC = () => {
  return (
    <>
      <h1>Teste</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
          marginBottom: '10px',
        }}
      >
        <Button btnType="primary" children="Primary" />
        <Button btnType="primary" children="Primary" iconPlus />
        <Button btnType="primary" children="Primary" disabled />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
          marginBottom: '10px',
        }}
      >
        <Button btnType="outline" children="Outline" />
        <Button btnType="outline" children="Outline" iconPlus />
        <Button btnType="outline" children="Outline" disabled />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
          marginBottom: '10px',
        }}
      >
        <Button btnType="secondary" children="Secondary" />
        <Button btnType="secondary" children="Secondary" iconPlus />
        <Button btnType="secondary" children="Secondary" disabled />
      </div>
      <Separator />
      <Heading children="teste" uppercase />
    </>
  );
};

export default App;
