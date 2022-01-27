import React from 'react';
import {
  IconLock,
  IconPlusCircle,
  IconSearch,
  IconUser,
  IconAlertTriangle,
  IconEye,
  IconClosedEye,
} from './lib/components/Icons';
import {
  Button,
  Separator,
  Heading,
  GenericInput,
  PasswordInput,
  SearchInput,
  Dropdown,
} from './lib';

const App: React.FC = () => {
  const userList = [
    'Manoel Pereira',
    'Diego Arend',
    'Hugo Gitz',
    'Derickson Loss',
    'Thiago Sousa',
    'Tatiani da Silva',
    'Mateus Junges',
    'Matheus Morais',
  ];

  return (
    <>
      <h1>Teste</h1>

      <div style={{ color: '#00ff0d' }}>
        <IconPlusCircle size={25} color="green" />
        <IconUser size={25} color="green" />
        <IconSearch size={25} color="green" />
        <IconLock size={25} color="green" />
        <IconAlertTriangle size={25} color="green" />
        <IconEye size={25} color="green" />
        <IconClosedEye size={25} color="green" />
      </div>

      <Dropdown title={<h1>Dropdown</h1>} position="left">
        <span>Content</span>
      </Dropdown>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
          marginBottom: '10px',
        }}
      >
        <Button appearance="primary" children="Primary" />
        <Button appearance="primary" children="Primary" icon />
        <Button appearance="primary" children="Primary" disabled />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
          marginBottom: '10px',
        }}
      >
        <Button appearance="outline" children="Outline" />
        <Button appearance="outline" children="Outline" icon />
        <Button appearance="outline" children="Outline" disabled />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '400px',
          marginBottom: '10px',
        }}
      >
        <Button appearance="secondary" children="Secondary" />
        <Button appearance="secondary" children="Secondary" icon />
        <Button appearance="secondary" children="Secondary" disabled />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '400px',
          marginBottom: '10px',
        }}
      >
        <Button appearance="approve" disabled>
          <div>Approve</div>
        </Button>
        <Button appearance="approve">
          <div>Approve</div>
        </Button>
        <Button appearance="cancel" disabled children="Cancel" />
        <Button appearance="cancel" children="Cancel" />
      </div>

      <Separator />
      <Heading children="teste" uppercase />
      <h3>GenericInput Test</h3>
      <GenericInput
        inputType="text"
        width="520px"
        label="Seu nome completo"
        genericInputType="outline"
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
        label="Email do usuário"
        genericInputType="outline"
        inputId="form_emailInput"
        inputArialabel="input-email"
        labelId="form_emailInput-label"
        labelArialabel="label-email"
        leftIcon
        leftIconType="lockIcon"
      />
      <h3>PasswordInput Test</h3>
      <PasswordInput
        width="320px"
        label="Sua senha"
        passwordInputType="outline"
        inputId="form_passwordInput"
        inputArialabel="input-password"
        labelId="form_passwordInput-label"
        labelArialabel="label-password"
      />
      <h3>SearchInput Test</h3>
      <SearchInput
        searchInputType="outline"
        width="600px"
        label="Buscar"
        options={userList}
        defaultErrorMessage="Registro não encontrado"
        inputId="form_searchInput"
        inputArialabel="input-search"
        labelId="form_search-label"
        labelArialabel="label-search"
        autocomplete={false}
      />
    </>
  );
};

export default App;
