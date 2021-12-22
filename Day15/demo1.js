
let jsonObj={
    fname:"sumit",
    lname:"raokhande",
    id:9
}

//dot operator
//square operator

// console.log("First name "+jsonObj["fname"]);
// console.log("Last name "+jsonObj["lname"]);
// console.log("ID "+jsonObj["id"]);

//Array of Object
var arrobj=[
    {
        fname:"sumit",
        lname:"raokhande",
        id:9,
        country:{
            cid:1,
            cname:"India"
        },
        month:["jan","Feb"],
        result:[
            {
                subj:"M1",
                marks:40
            },
            {
                subj:"M2",
                marks:55
            },
            {
                subj:"M3",
                marks:65
            },
        ]
    },
    {
        fname:"Kiran",
        lname:"raokhande",
        id:6,
        country:{
            cid:3,
            cname:"USA"
        },
        month:["jan","Feb","May"],
        result:[
            {
                subj:"M1",
                marks:55
            },
            {
                subj:"M2",
                marks:70
            },
            {
                subj:"M3",
                marks:85
            },
        ]
    },
    {
        fname:"Spruha",
        lname:"raokhande",
        id:3,
        country:{
            cid:2,
            cname:"Den Mark"
        },
        month:["jan","Feb","May","Dec"],
        result:[
            {
                subj:"M1",
                marks:46
            },
            {
                subj:"M2",
                marks:87
            },
            {
                subj:"M3",
                marks:78
            },
        ]
    }

];

for (let i = 0; i < arrobj.length; i++) {
   console.log("First name :: "+arrobj[i].fname)
   console.log("last name :: "+arrobj[i].lname)
   console.log("ID :: "+arrobj[i].id)
   console.log("Country Name "+arrobj[i].country.cname)
   console.log("Month "+arrobj[i].month.join(" $ "))
console.log("----- Result-------");
   for(let j=0;j<arrobj[i].result.length;j++){
       console.log("Subject name "+arrobj[i].result[j].subj);
       console.log("Subject Marks "+arrobj[i].result[j].marks);
   }
   console.log("------------------------------")
 
}

