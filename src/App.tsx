import React from 'react';
import { Button, Separator, Heading, GenericInput, PasswordInput } from './lib';

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
      <h3>Teste Inputs</h3>
      <GenericInput
        inputType="text"
        width="520px"
        label="Seu nome completo"
        genericInputType="outlined"
        inputId="form_fullNameInput"
        inputArialabel="input-fullName"
        labelId="form_fullNameInput-label"
        labelArialabel="label-fullName"
        leftIcon
        leftIconType="userIcon"
      />
      <GenericInput
        inputType="email"
        width="520px"
        label="Seu email"
        genericInputType="outlined"
        inputId="form_emailInput"
        inputArialabel="input-email"
        labelId="form_emailInput-label"
        labelArialabel="label-email"
        leftIcon
        leftIconType="envelopeIcon"
      />
      <PasswordInput
        width="320px"
        label="Sua senha"
        passwordInputType="outlined"
        inputId="form_passwordInput"
        inputArialabel="input-password"
        labelId="form_passwordInput-label"
        labelArialabel="label-password"
      />
    </>
  );
};

export default App;
