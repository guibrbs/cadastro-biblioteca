interface inputInterface{
    inputText: String;
    setProps: React.Dispatch<React.SetStateAction<string>>;
}

export function InputLayout({ inputText, setProps }: inputInterface){
    return(
        <div className="mt-6">
            <h2 className="font-bold text-elementary text-xl">{inputText} do livro</h2>
            <input 
                type={inputText === "Data de publicação" ? "date" : "text"} 
                className="w-full h-[60px] bg-brand border border-elementary rounded-lg p-5"
                onChange={(e) => setProps(e.target.value)}
            />
        </div>
    )
}