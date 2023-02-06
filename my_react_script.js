const heading = React.createElement(
    'h2',
    {
        className: 'head2'
    },
    'My heading using react');

const uo_list = React.createElement(
                    'ul',
                    null, 
                    React.createElement('li', null, 'list1'),
                    React.createElement('li', null, 'list2'),
                    React.createElement('li', null, 'list3'),
                    React.createElement('li', null, 'list4')
                );

const division = React.createElement('div', null, heading, uo_list);
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(division);
// root.render(heading, uo_list); // not possible as we can only render one object. So uo_list will not be accepted.