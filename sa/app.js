var nm=require("./cur.js")
var ExpSvr=require("express")
var ExpSvrFnc=ExpSvr()
var spcbp=require("body-parser")
var mdbvap=require("mongodb").MongoClient
var mdburl="mongodb://localhost:27017"
mdbvap.connect(mdvar,function(errmdbvar,svrmdbvar)
{
    if(errmdbvar)throw errmdbvar

    var svrvar=svrmdbvar.db("db")
    var 
})
ExpSvrFnc.use(spcbp.json())

nm.inlinearrowfunc("yo yo")


ExpSvrFnc.listen(8080,function()
{
    console.log("server started")
}
)
ExpSvrFnc.get("/",function(Req,Res)
{
    Res.send("<h1>welcome to my website</h1>")
})
ExpSvrFnc.get("/contact",function(Req,Res)
{
    Res.send(`<h1>contact:contact trio india</h1>
    contact:ceo tri0 india`)
})

var jobarvar=[]
// ExpSvrFnc.get("/job",function(Req,Res)
// {
//     var canvar = Req.body   
//     // var mobile=Req.body
//     // var mail=Req.body
//     var prson={
//          NamVar:canvar.name,
//          mbvar:canvar.mobile,
//         mylvar:canvar.mail
//     }
//     jobarvar.push(prson)
//     Res.json(jobarvar)
//     //Res.send(`<h1>Hello ${canva},plzz come for recruitment wih mob no ${canvar} and email ${canvar}</h1>`)
// })
ExpSvrFnc.delete("/job/:index",function(Req,Res)
{
    var reqindx=Req.params.index
    // var reqmob=Req.params.mobile
    // var canvar = Req.body 
      
    // // var mobile=Req.body
    // // var mail=Req.body
    // var prson={
    //      NamVar:canvar.name,
    //      mbvar:canvar.mobile,
    //     mylvar:canvar.mail
    // }
    // jobarvar[reqindx]=prson
    jobarvar.splice(reqindx,1)
    Res.json(jobarvar)
    //Res.send(`<h1>Hello ${canva},plzz come for recruitment wih mob no ${canvar} and email ${canvar}</h1>`)
})
var cartaryvar=[
    {
    "uid":123,
    "Name":"dji camera",
    "cost":50000
    },
    {
        "uid":456,
        "Name":"nikkon",
        "cost":80000
    }, 
    {
        "uid":789,
        "Name":"mackbbok air",
        "cost":100000
     },
     {
        "uid":111,
        "Name":"samsung edge",
        "cost":545455
        },
        {
            "uid":122,
            "Name":"galaxy note",
            "cost":8000
        },
        {
            "uid":222,
            "Name":"dji camera",
            "cost":200000
        }
]
function getidxfrmuid(uidpassvar)
{
    var srchindxvar=0
    // var srchitemvar=
    cartaryvar.find(function(item)
    {
        if(item.uid==uidpassvar)
        return item.uid==uidpassvar
        else
        srchindxvar++
    })
    return srchindxvar
}
// var catch1 = getidxfrmuid(456)
// console.log(catch1)

//cur operations

//read operation
ExpSvrFnc.get("/cart",function(Req,Res)
{
    Res.json(cartaryvar)

}
)
//create operation
ExpSvrFnc.post("/cart",function(Req,Res)
{
    var BodyReq =Req.body
    var AddItemvar={
        "uid":BodyReq.uid,
        "Name":BodyReq.Name,
        "cost": BodyReq.cost
    }
    cartaryvar.push(AddItemvar) 
    Res.json(cartaryvar)
})

//update operation

ExpSvrFnc.put("/cart/uid",function(Req,Res)
{
    var Requidvar=Req.params.uid
    var BodyReq =Req.body
    var updItemvar={
        "uid":BodyReq,
        "Name":BodyReq.Name,
        "cost": BodyReq.cost
    }
    var Reqindxvar=getidxfrmuid(Requidvar)
    cartaryvar[Reqindxvar]=updItemvar
    Res.json(cartaryvar)
})

// cartaryvar.splice(2,1,
//     {
//         "uid":221,
//         "Name":"pizza",
//         "cost":400
//     }
//     )



//Delete operation

ExpSvrFnc.delete("/cart/uid",function(Req,Res)
{
    var Requidvar=Req.params.uid
   
    var Reqindxvar=getidxfrmuid(Requidvar)
    cartaryvar.splice(Reqindxvar,1)
    Res.json(cartaryvar)
})

console.log(cartaryvar)
