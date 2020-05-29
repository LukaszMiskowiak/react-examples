import React from 'react';

const list = Array(5).fill('list item');
const subList = () =>
    Array(Math.floor(Math.random() * 7))
        .fill('sublist item');

const List = ({list, children}) => (
  list.map((item, index) => (
    <li key={`#${Math.random()}`}>
      {`${item}-${index}`}
      {children && children}
    </li>
  ))
);

const OrderedList = (props) =>
    <ol><List {...props} /></ol>
const UnorderedList = (props) => 
    <ul><List {...props} /></ul>

function SimpleList() {
  return (
    <OrderedList list={list}>
      <UnorderedList list={subList()}/>
    </OrderedList>
  );
}

export default SimpleList;
