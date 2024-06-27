const databaseType = {
   userType: "admin", 
   typeData: "datalocal",
};


async function connectToDatabase(dataName){
   // lógica de conexao de bancos 
console.log(`conectado ao Banco  ${dataName}`);
}

async function disconnectDatabase(){
   console.log("desconetando do banco de dados");
}

export {connectToDatabase, disconnectDatabase, databaseType};


//connectToDatabase;
//module.exports ={
   //connectToDatabase,
  // disconnectDatabase,
//