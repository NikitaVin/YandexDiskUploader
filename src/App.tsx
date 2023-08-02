import React, { FC } from 'react';
import { DivApp } from './App.styles';
import { GlobalStyles } from './styles/global.styles';
import { FilesUpload } from './components/FilesUpload';

const App: FC = () => {
  return (
    <DivApp>
      <GlobalStyles />
      <FilesUpload />
    </DivApp>
  );
};

export default App;
