Sequelize
-npx sequelize-cli init

npx sequelize-cli db:create // create database
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string //model create
npx sequelize-cli db:migrate // run migration file & create all database table
npx sequelize-cli seed:generate --name demo-user //create seed files
npx sequelize-cli db:seed:all //run seed file
npx sequelize-cli migration:generate --name migration-skeleton
