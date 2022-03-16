import React, { useState } from 'react';
import {
  IconLock,
  IconPlusCircle,
  IconSearch,
  IconUser,
  IconAlertTriangle,
  IconEye,
  IconClosedEye,
  IconClose,
} from './lib/components/Icons';
import {
  Button,
  Separator,
  Heading,
  GenericInput,
  PasswordInput,
  SearchInputList,
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

  const [functionalities, setFunctionalities] = useState({});

  const handleCheck = (e) => {
    const { name, checked, value } = e.target;
    const data = functionalities[name] || {};

    data[value] = checked;
    setFunctionalities({ ...functionalities, [name]: data });

    // console.log(e.target.value);
  };

  // console.log('*** functionalities', functionalities);

  return (
    <Card size="fullWidth" title="Title" subTitle="Sub-Title">
      <h1>Teste</h1>
      <Button appearance="outline" linkStyle disabled>
        <a href="/">Teste</a>
      </Button>

      <Card style={{ backgroundColor: '#e3e3e3' }}>
        <TextField label="Default" name="name" style={{ marginBottom: 20 }} />
        <TextField
          label="Icon Left"
          name="email"
          inputType="email"
          iconDefault
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Icon Right"
          name="email"
          inputType="email"
          iconDefault
          iconPosition="right"
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Icon External"
          name="TextField"
          icon={<Spinner />}
          style={{ marginBottom: 20 }}
          outline
        />

        <TextField
          label="Default"
          name="email"
          inputType="email"
          outline
          style={{ marginBottom: 20 }}
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
          label="Search"
          name="search"
          inputType="search"
          iconDefault
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

      <Card size="fullWidth">
        <IconPlusCircle size={25} color="green" />
        <IconUser size={25} color="green" />
        <IconSearch size={25} color="green" />
        <IconLock size={25} color="green" />
        <IconAlertTriangle size={25} color="green" />
        <IconEye size={25} color="green" />
        <IconClosedEye size={25} color="green" />
        <IconClose size={20} color="green" />
        <Spinner />
      </Card>

      <>
        <div style={{ padding: 10 }}>
          <Checkbox
            name="category"
            label="Action"
            labelFor="action"
            value="action"
            // isChecked
            onChange={handleCheck}
          />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox
            // disabled
            name="category"
            label="Adventure"
            labelFor="adventure"
            value="adventure"
            onChange={handleCheck}
          />
        </div>
        <div style={{ padding: 10 }}>
          <Checkbox
            name="category"
            label="Strategy"
            labelFor="strategy"
            value="strategy"
            onChange={handleCheck}
          />
        </div>
      </>

      <Tooltip title={<h1>Tooltip</h1>} position="left">
        <span>Content</span>
      </Tooltip>

      <Button onClick={() => setHandleOpen(true)}>Open modal</Button>

      <Modal
        isOpen={handleOpen}
        viewCloseButton
        onRequestClose={setHandleOpen}
        shouldCloseOnOverlayClick
        // shouldCloseOnEscClick={false}
      >
        <div style={{ width: '880px', height: '500px' }}>Content</div>

        <button type="button" onClick={() => setHandleOpen(false)}>
          Click
        </button>
      </Modal>

      <Card size="fullWidth">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '400px',
            marginBottom: '10px',
          }}
        >
          <Button appearance="outline" linkStyle disabled>
            <a href="/">Teste</a>
          </Button>
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

      <Heading children="teste" uppercase />

      <Separator />
      <Card title="Dropdown showcase">
        <Dropdown title="click here for Dropdown abc def">
          {dropdownChildrenMock}
        </Dropdown>
      </Card>

      <Card title="Inputs" size="fullWidth">
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
      <Card title="Search Input Test" size="fullWidth">
        <div style={{ width: 600, padding: 10 }}>
          <SearchInputList
            outline
            fetchData={fetchDataMock}
            label="Buscar aqui"
            errorMessage="Registro não encontrado"
            autocomplete={false}
          >
            {childrenMock}
          </SearchInputList>
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
