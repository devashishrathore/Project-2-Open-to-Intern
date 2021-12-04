# radium
Repository for backend cohort - Radium


# step 1
install mongoose : npm i mongoose (from parent folder)


# step 2
use MOdel to interact with DB


#step 3
break your code into correct folder structure 


 validate:{
            validator:validator.isEmail,
            message:'{VALUE} is not a valid email',
            isAsync:false
        }

validate: { 
  validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
  message: 'Must be a Valid URL' 
}


mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/group7database?retryWrites=true&w=majority
mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/jagdishshinde?retryWrites=true&w=majority