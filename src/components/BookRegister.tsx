import { useState } from 'react';
import ManReading from '../assets/man-reading.svg';
import { InputLayout } from './InputLayout';
import api from '../services/api';

export function BookRegister() {
  const [nomeLivro, setNomeLivro] = useState('')
  const [nomeAutor, setNomeAutor] = useState('')
  const [dataPublicacao, setDataPublicacao] = useState('')
  const baseURL = "http://localhost:3001/"

  const handleSubmitNewBook = () => {
    api
    .post(baseURL,{
      "nome": `${nomeLivro}`,
      "autor": `${nomeAutor}`,
      "data": `${dataPublicacao}`,
    })
    .then(() => {
      console.log("Cadastrado com sucesso")
    })
    .catch((err) => {
      console.log("Algo deu errado" + err);
    })
  }

  return (
    <section className="w-1/2 h-full bg-brand rounded-3xl flex justify-center items-center p-[4.5rem]">
      <div className="flex flex-col">
        <div className="w-full h-[320px] flex justify-between">
          <div className=" w-[45%] h-full text-elementary flex flex-col gap-5">
            <h1 className="font-bold text-6xl">
              Sistema de cadastro de livros
            </h1>
            <p className="font-thin text-3xl w-[302px] leading-8">Cadastre seus livros <span>disponíveis</span> agora mesmo</p>
          </div>
          <img src={ManReading} alt="Man Reading Illustration" className='w-[55%] h-full '/>
        </div>
        <form onSubmit={handleSubmitNewBook}>
          <InputLayout inputText="Nome" setProps={setNomeLivro}/>
          <InputLayout inputText="Autor" setProps={setNomeAutor}/>
          <InputLayout inputText="Data de publicação" setProps={setDataPublicacao} />
          <button 
          type='submit'
          className='w-full h-[60px] bg-constrast mt-6 rounded-lg text-xl font-bold hover:bg-constrastDarker transition-colors duration-300'>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  );
}
