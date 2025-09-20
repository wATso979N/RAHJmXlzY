// 代码生成时间: 2025-09-20 22:48:00
// unzipper_component.tsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

// 定义组件的Props类型
const propTypes = {
  file: PropTypes.instanceOf(File).isRequired,
};

// 使用TypeScript定义组件的Props接口
interface UnzipperProps {
  file: File;
};

// 使用TypeScript定义组件的状态接口
interface UnzipperState {
  isLoading: boolean;
  error?: Error;
  files?: File[];
};

const UnzipperComponent: React.FC<UnzipperProps> = ({ file }) => {
  // 组件状态
  const [state, setState] = useState<UnzipperState>({ isLoading: false });

  // 解压文件
  const unzipFile = async () => {
    setState({ isLoading: true });
    try {
      // 使用JSZip库来读取和解压文件
      const zip = new JSZip();
      const zipContent = await zip.loadAsync(file);
      const files = Object.keys(zipContent.files).map((path) => {
        const content = zipContent.files[path];
        const blob = await content.async('blob');
        return new File([blob], path);
      });
      setState({ isLoading: false, files });
    } catch (error) {
      setState({ isLoading: false, error });
    }
  };

  // 保存文件
  const saveFiles = (files: File[]) => {
    files.forEach((file) => {
      saveAs(file);
    });
  };

  // 渲染组件
  return (
    <div>
      <button onClick={unzipFile}>解压文件</button>
      {state.isLoading && <p>解压中...</p>}
      {state.error && <p>发生错误: {state.error.message}</p>}
      {state.files && (
        <div>
          <p>解压完成，点击保存文件:</p>
          {state.files.map((file, index) => (
            <button key={index} onClick={() => saveFiles([file])}>保存文件 {file.name}</button>
          ))}
        </div>
      )}
    </div>
  );
};

UnzipperComponent.propTypes = propTypes;

export default UnzipperComponent;