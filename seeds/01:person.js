
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE person CASCADE; ALTER SEQUENCE person_id_seq restart with 2')
    .then(function () {

      return knex('person').insert([
        {id: 1, first_name: 'Carter', last_name:'Hunter', email:'cchxp@virginia.edu', password:'password123'},
      //  {id: 2, first_name: 'Caroline', last_name:'Odonnell', email:'caroline.odonnell26@gmail.com', password:bcrypt.hashSync('cpassword', salt)},
      //  {id: 3, first_name: 'Todd', last_name:'Bracken', email:'charles.todd.bracken@gmail.com', password:bcrypt.hashSync('toddpassword', salt)},
      //  {id: 4, first_name: 'Emily', last_name:'Moore', email:'moorejet7891@gmail.com', password:bcrypt.hashSync('emilypassword123', salt)},
      //  {id: 5, first_name: 'Taylor', last_name:'Thomas', email:'ktt1234@gmail.com', password:bcrypt.hashSync('taylorpassword123', salt)}
      ]);
    });
};
