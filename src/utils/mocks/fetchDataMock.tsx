export const searchUserDataMock = [
  'Manoel Pereira',
  'Diego Arend',
  'Hugo Gitz',
  'Derickson Loss',
  'Thiago Sousa',
  'Tatiani da Silva',
  'Mateus Junges',
  'Matheus Morais',
  'Mateus Junges2',
  'Matheus Morais2',
  'Mateus Junges3',
  'Matheus Morais3',
  'Mateus Junges4',
  'Matheus Morais4',
  'Mateus Junges5',
  'Matheus Morais5',
  'Mateus Junges6',
  'Matheus Morais6',
  'Mateus Junges xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxx',
  'Matheus Morais7',
  'Mateus Junges7',
  'Matheus Morais8',
  'Mateus Junges9',
  'Matheus Morais9',
  'Mateus Junges10',
  'Matheus Morais10',
];

export const fetchDataMock = (searchPhrase: string) => {
  const searchResult = searchUserDataMock.filter((option) =>
    option.toLowerCase().includes(searchPhrase.toLowerCase()),
  );
  if (searchResult.length > 0) {
    return true;
  }
  return false;
};

export const childrenMock = (
  <>
    <p>
      Sucesso. Aqui deve-se passar o children dinâmico e corretamente filtrado
    </p>
  </>
);

// export const searchUserDataMock = [
//   { id: '01', name: 'Manoel Pereira', email: 'manoel@paylivre.com' },
//   'Diego Arend',
//   'Hugo Gitz',
//   'Derickson Loss',
//   'Thiago Sousa',
//   'Tatiani da Silva',
//   'Mateus Junges',
//   'Matheus Morais',
//   'Mateus Junges2',
//   'Matheus Morais2',
//   'Mateus Junges3',
//   'Matheus Morais3',
//   'Mateus Junges4',
//   'Matheus Morais4',
//   'Mateus Junges5',
//   'Matheus Morais5',
//   'Mateus Junges6',
//   'Matheus Morais6',
//   'Mateus Junges xxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxx xxxxxxxxxxxxx',
//   'Matheus Morais7',
//   'Mateus Junges7',
//   'Matheus Morais8',
//   'Mateus Junges9',
//   'Matheus Morais9',
//   'Mateus Junges10',
//   'Matheus Morais10',
// ];
