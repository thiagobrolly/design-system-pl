import React, { useState } from 'react';
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
  Tooltip,
  Modal,
  Checkbox,
  Card,
  Spinner,
  TextField,
  SelectLanguage,
  Dropdown,
} from './lib';
import { dropdownChildrenMock } from './lib/components/Dropdown';
import { fetchDataMock, childrenMock } from './utils/mocks/fetchDataMock';

const App: React.FC = () => {
  const [handleOpen, setHandleOpen] = useState(false);

  return (
    <Card fullWidth title="Title" subTitle="Sub-Title">
      <h1>Teste</h1>

      <Card fullWidth style={{ backgroundColor: '#e3e3e3' }}>
        <TextField
          label="Email exemplo"
          name="email"
          inputType="email"
          iconDefault
          outline
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Email"
          name="email"
          inputType="email"
          style={{ marginBottom: 20 }}
          // outline
        />

        <TextField
          label="Email"
          name="email"
          inputType="email"
          iconDefault
          style={{ marginBottom: 20 }}
          // placeholder=" "
        />

        <TextField
          label="Password"
          name="email"
          inputType="password"
          iconDefault
          iconPosition="right"
          style={{ marginBottom: 20 }}
        />

        <TextField
          label="Email"
          name="email"
          inputType="search"
          iconDefault
          iconPosition="right"
          style={{ marginBottom: 20 }}
        />

        <TextField
          label="TextField"
          name="TextField"
          icon={<Spinner />}
          iconPosition="right"
          style={{ marginBottom: 20 }}
        />

        <TextField
          label="Email"
          name="email"
          inputType="email"
          iconDefault
          disabled
          style={{ marginBottom: 20 }}
        />

        <TextField
          label="Email"
          name="email"
          inputType="email"
          iconDefault
          error="Error"
          style={{ marginBottom: 20 }}
        />
      </Card>

      <Card fullWidth>
        <IconPlusCircle size={25} color="green" />
        <IconUser size={25} color="green" />
        <IconSearch size={25} color="green" />
        <IconLock size={25} color="green" />
        <IconAlertTriangle size={25} color="green" />
        <IconEye size={25} color="green" />
        <IconClosedEye size={25} color="green" />
        <Spinner />
      </Card>

      <>
        <div style={{ padding: 10 }}>
          <Checkbox
            name="category"
            label="Action"
            labelFor="action"
            isChecked
          />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox
            disabled
            name="category"
            label="Adventure"
            labelFor="adventure"
          />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox name="category" label="Strategy" labelFor="strategy" />
        </div>
      </>

      <Tooltip title={<h1>Tooltip</h1>} position="left">
        <span>Content</span>
      </Tooltip>

      <Card fullWidth>
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
      </Card>

      <Button onClick={() => setHandleOpen(true)}>Open modal</Button>
      <Modal
        shouldCloseOnOverlayClick
        isOpen={handleOpen}
        onRequestClose={setHandleOpen}
        viewCloseButton
      >
        Teste Modal
      </Modal>

      <Heading children="teste" uppercase />

      <Separator />
      <Card title="Dropdown showcase">
        <Dropdown title="click here for Dropdown abc def">
          {dropdownChildrenMock}
        </Dropdown>
      </Card>

      <Card title="Inputs" fullWidth>
        <h3>TextField</h3>

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
      </Card>
      <Card title="Search Input Test" fullWidth>
        <div style={{ width: 600, padding: 10 }}>
          <SearchInput
            outline
            fetchData={fetchDataMock}
            label="Buscar aqui"
            errorMessage="Registro não encontrado"
            autocomplete={false}
          >
            {childrenMock}
          </SearchInput>
        </div>
      </Card>
      <Card title="Select Language">
        <div style={{ display: 'flex', height: '150px' }}>
          <SelectLanguage />
          <SelectLanguage locale="en-US" />
          <SelectLanguage locale="es-ES" />
        </div>
      </Card>
    </Card>
  );
};

export default App;
