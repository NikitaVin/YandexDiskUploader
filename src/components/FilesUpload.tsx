import React, { ChangeEvent, useRef, useState } from 'react';
import axios from 'axios';
import { Button, Input, Label, Li, P, Ul, Wrapper } from './FilesUpload.styles';

export const FilesUpload = () => {
  const [fileList, setFileList] = useState<FileList | null>(null);
  const [isError, setIsError] = useState('');
  const [isSuccses, setIsSuccses] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
    setIsSuccses(false);
  };

  const handleUploadClick = async () => {
    const data = new FormData();
    let href = '';

    [...(fileList ?? [])]?.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });

    for (let i = 0; i < [...(fileList ?? [])].length; i++) {
      if (fileList && [...fileList].length <= 100) {
        try {
          const { data } = await axios.get(
            `https://cloud-api.yandex.net/v1/disk/resources/upload?path=${[...fileList][i].name}`,
            {
              headers: {
                Authorization: 'y0_AgAAAAAEGxRgAApFJwAAAADpI9O5-D0UT-9MTPKgzFpRjNaOWSgHSzs',
              },
            }
          );
          href = data.href;
        } catch (error) {
          console.log(error);
          setIsError('Ошибка! Файл(ы) уже существуют');
        }

        if (!fileList) {
          return;
        }

        try {
          await axios.put(`${href}`);
          setFileList(null);
          setIsSuccses(true);
        } catch (error) {
          console.log(error);
          setIsError('Ошибка! Файл(ы) уже существуют');
          setIsSuccses(false);
        }
      } else {
        console.error('Превышен лимит');
      }
    }
  };
  return (
    <Wrapper>
      <P>Лимит 100 файлов</P>
      <Label htmlFor="upload-file">
        <Input
          ref={inputRef}
          value={inputRef.current?.value}
          type="file"
          name="upload"
          id="upload-file"
          onChange={handleFileChange}
          multiple
        />
        {inputRef.current?.value ? inputRef.current?.value : 'Выберите файл(ы)'}
      </Label>

      {inputRef.current?.value && (
        <Ul>
          {[...(fileList ?? [])].map((file, i) => (
            <Li key={i}>
              {i + 1}. {file.name} - {file.type}
            </Li>
          ))}
        </Ul>
      )}
      {isSuccses && <p>Успешно</p>}
      {isError && isError}
      {[...(fileList ?? [])].length > 0 && <Button onClick={handleUploadClick}>Загрузить</Button>}
    </Wrapper>
  );
};
