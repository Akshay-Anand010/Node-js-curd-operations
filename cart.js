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
var catch1 = getidxfrmuid(456)
console.log(catch1)
