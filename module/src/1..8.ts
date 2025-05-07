// Destructuring in typescript
const user1 = {
    id:345,
    name:{
        name : "Saidee hasan ",
        last:"llk"
    },
    contactNo :"01764984545",
    address:"Uganda"

}

const {
    contactNo,
    name:{last}
} = user1;

// arrow
const vigatable = ['kola',"khai",'chai ',"nai"]
const [a,b,c]=vigatable;
