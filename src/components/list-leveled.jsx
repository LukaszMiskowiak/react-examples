import React from 'react';

const subList = () =>
    Array(Math.floor(Math.random() * 2))
        .fill({
            value: 'sublist item',
            ...!!(Math.floor(Math.random() * 2)) && {children: subList()}
        });
const list = Array(5)
    .fill({value: 'list item', children: subList()});

const List = ({list, children}) => (
  list.map((item, index) => (
    <li key={`#${Math.random()}`}>
      {`${item.value}-${index}`}
      {children && item.children &&
        React.cloneElement(children, { list: subList()})}
    </li>
  ))
);

const OrderedList = (props) => 
    <ol><List {...props} /></ol>
const UnorderedList = (props) => 
    <ul><List {...props} /></ul>

function LeveledList() {
  return (
    <OrderedList list={list}>
      <UnorderedList>
          <OrderedList>
              <OrderedList>
                  <UnorderedList/>
              </OrderedList>
          </OrderedList>
      </UnorderedList>
    </OrderedList>
  );
}

export default LeveledList;
