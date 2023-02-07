// const heading1 = React.createElement('h2',{ className: 'head'}, 'My heading 1');
// const heading2 = React.createElement('h2',{ className: 'head'}, 'My heading 2'); THis gives a key warning when we add both the
// using array.

const heading1 = React.createElement('h2',{ className: 'head', key: 1}, 'My heading 1');
const heading2 = React.createElement('h2',{ className: 'head', key: 2}, 'My heading 2');

const section = React.createElement('section', null, [heading1, heading2]);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(section);

// or try using a foreach/map and update the key instead of adding them there.

// let heading1 = React.createElement('h2',{ className: 'head'}, 'My heading 1');
// let heading2 = React.createElement('h2',{ className: 'head'}, 'My heading 2');

// let list = [heading1, heading2].map((RE, index) => {
//     console.log(RE.type);
//     RE.type = index;
//     console.log(RE.type);
//     return RE;
// });
// const section = React.createElement('section', null, list);
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(section);

// The above is not possible because ReactElements are immutable. So your changes will not reflect.
// So, the only option for keys to exist is when you create an element, you need to add them.