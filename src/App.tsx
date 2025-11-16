import React, { useState } from 'react';


import errorDataJson from './error_code.json';

type ErrorData = {
  [model: string]: { [code: string]: string };
};

const errorData: ErrorData = errorDataJson;

const App: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [selectedCode, setSelectedCode] = useState<string>('');

  const models = Object.keys(errorData);
  const codes = selectedModel ? Object.keys(errorData[selectedModel]) : [];

  const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedModel(e.target.value);
    setSelectedCode(''); // reset code when model changes
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
  };

  const description = selectedModel && selectedCode ? errorData[selectedModel][selectedCode] : '';

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>錯誤碼查詢</h1>

      <div style={{ marginBottom: '10px' }}>
        <label>選擇機種: </label>
        <select value={selectedModel} onChange={handleModelChange}>
          <option value="">--請選擇機種--</option>
          {models.map((model) => (
            <option key={model} value={model}>{model}</option>
          ))}
        </select>
      </div>

      {selectedModel && (
        <div style={{ marginBottom: '10px' }}>
          <label>選擇錯誤代碼: </label>
          <select value={selectedCode} onChange={handleCodeChange}>
            <option value="">--請選擇代碼--</option>
            {codes.map((code) => (
              <option key={code} value={code}>{code}</option>
            ))}
          </select>
        </div>
      )}

      {description && (
        <div>
          <strong>錯誤描述:</strong> {description}
        </div>
      )}
    </div>
  );
};

export default App;
