import axios from "axios";
import { useEffect, useState } from "react";
import { TbEdit, TbTrash } from 'react-icons/tb'

export function BookRegistered() {
  const baseURL = "http://localhost:3001/";
  const inputClassname = "bg-brand placeholder:text-elementary ml-2"
  const [livros, setLivros] = useState([{
    _id: "",
    nome: "",
    autor: "",
    data: ""
  }]);

  useEffect(() => {
    axios
    .get(baseURL)
    .then((response) => {
      setLivros(response.data);
    })
    .catch((err) => {
      console.log("Ocorreu um erro");
    })
  }, []);

  function deletePost(id: String){
    axios
      .delete(`${baseURL}${id}`)
      .then(() => {
        document.location.reload()
      })
      .catch((err) => {
        console.log("Erro ao deletar")
      })
  }

  return (
    <section className="w-1/2 h-full flex items-center flex-col">
      <h1 className="text-elementary text-6xl font-bold max-w-md text-center h-fit">
        Livros cadastrados
      </h1>
      {livros.length === 0 ? 
      <div>Nada aqui</div> 
      : 
      <section className="w-full h-full mt-4 flex items-center flex-col space-y-5">
        {livros.map(livro => (
             <form className="w-full max-w-3xl bg-brand h-10 flex items-center px-5 rounded-md gap-2 justify-center" key={livro._id}>
              <div>
                <b>Nome:</b>
                <input type="text" placeholder={livro.nome} className={inputClassname} />
              </div>
              <div>  
                <b>Autor:</b>
                <input type="text" placeholder={livro.autor}
                disabled 
                className={inputClassname}
                />
              </div>
              <div className="flex ">
                <b>Data: </b>
                <input type="text" className={`${inputClassname} w-28`} placeholder={livro.data} />
              </div>
              <TbEdit />
              <TbTrash onClick={() => deletePost(livro._id)} className="cursor-pointer hover:opacity-50 transition-opacity"/>
             </form>
         ))}
      </section>
      }
    </section>
  );
}
