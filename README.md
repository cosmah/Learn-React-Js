# Learn-React-Js
1.Creating react App
    -We can use the official tool (CRA)
    -We can use Vite i.e `npm create vite@latest`, `cd project root folder` then `npm install`
    -`npm run dev` to run the server
    -react component us .tsx extension

2.Create a listgroup component
    -install bootstrap `npm install bootstrap@latest`

3.A component can not return more than one element.i.e
`<h1>List</h1>
<ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
</ul>` will throw an error.
        it can be resolved by wrapping the two elements into a fragment.
        `<Fragment>
      <h1>LIST</h1>
    <ul className="list-group">
      <li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
    </Fragment>`
    We can also use `<></>`

We dont have for loops in tsx.We render data using map method.
When rendering data using map() we give each data a prop key to identify it uniquely.