var n1="Akshay mukund"
var no=121212
var func1=()=>
{
    console.log("hello")
};
module.exports={name:n1,
              num:no,
              func1:func1,
            inlineFnc:function()
        {
           console.log("Inline func") 
        },
        inlinearrowfunc:(namepasvar)=>
        {
            console.log(namepasvar)
        }
    }
// module.exports=no
// module.exports.func1=func1;