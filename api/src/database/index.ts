import { Connection, createConnection, getConnection, getConnectionOptions } from "typeorm";


export default async (): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();  //puxa a config do ormconfig  
  //fazer isso para na hora do teste não usar o banco de produção...
  return createConnection()
    Object.assign(defaultOptions, {   
      database:                       //if pra quando tiver a variavel de ambiente que passei no package.json  
      process.env.NODE_ENV === "test" //if process.env.node = test o else é depois dos : 
      ? "./src/database/database.test.sqlite" 
      : defaultOptions.database,
    })
}




