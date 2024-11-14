console.log("Hello React");
const parent=document.getElementById("root");
      const root=ReactDOM.createRoot(parent);
    //  const h2=React.createElement("h2",{style:{color:'red'}},"Welcome to React Js");
    //  const li1=React.createElement("li",{},"Orange");
    //  const li2=React.createElement("li",{style:{color:'red'}},"Apple");
    //  const li3=React.createElement("li",{},"banana");
    //  const li4=React.createElement("li",{},"Guava");
    //  const ul=React.createElement("ul",{style:{backgroundColor:"cyan"}},[li1,li2,li3,li4]);
   
   //JSX
    const h1=React.createElement("h1",{},"By React Create Element");
   const h11=<h1>Creating h1 using JSX</h1>;// jSX Code
  const li1=<li>Orange</li>;
  const li2=<li>Apple</li>;
  const li3=<li>Banana</li>;
  const li4=<li>Guava</li>
const ul=<ul>{li1}{li2}{li3}{li4}</ul>;

const mystyle={

}
const container=(
<div style={mystyle}>
    <div>Welcome to React Application Development</div>
<div>{ul}</div>
<div>{h11}</div>

</div>


);
       
     root.render(container);