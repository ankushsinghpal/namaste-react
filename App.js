// //single element
// const heading =React.createElement("h1",{
//     "id":"heading"
// },"Hello All to the World of React!!!!!")

// console.log(heading) //give me object
// const root= ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading) //convert Javascript object into the h1 tag

//nested element

/*
<div id="parent">
<div id="child1">
<h1> </h1>
<h2> </h2>
</div>
<div id="child2">
<h1> </h1>
<h2> </h2>
</div>
</div>

*/
const parent= React.createElement("div",{"id":"parent"},
[React.createElement("div",{"id":"child1"},
[React.createElement("h1",{},"Hi i am H1 tag")
,React.createElement("h2",{},"Am H2 tag")]),
React.createElement("div",{"id":"child2"},
[React.createElement("h1",{},"Hi again H1 tag")
,React.createElement("h2",{},"you there Again H2 tag")])
]

)

console.log(parent) //Object
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)