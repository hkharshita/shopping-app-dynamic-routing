const Sequelize=require('sequelize');
const sequelize=new Sequelize('node-complete','root','HoaxNoax189#',{
    dialect:'mysql',
    host:'localhost'
});

module.exports=sequelize;