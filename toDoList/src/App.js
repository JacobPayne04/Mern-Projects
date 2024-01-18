import './App.css';
import Form from './components/Form'
import Display from './components/Display'
import { useState } from 'react';

function App() {

  const [listItem, setListItem] = useState([
    {
      item: "check the box",
      checked: false
    },
    {
      item: "uncheck the box",
      checked: true
    }
  ])




  const deleteItem = (theIndex) => {
    const filteredItems = listItem.filter((eachElem, idx) => {
      return idx !== theIndex
    });
    setListItem(filteredItems)
  };

  const addItem = (theItemToAdd) => {
    setListItem([...listItem, theItemToAdd])
  };

  const changeStatus = (index) => {
    const copyCheck = [...listItem];
    copyCheck[index].checked = !copyCheck[index].checked;
    setListItem(copyCheck);
  }


  return (
    <div>
      < Form addItem={addItem} />

      {
        listItem.map((eachItem, index) => {
          return < Display eachItem={eachItem} index={index} deleteItem={deleteItem} changeStatus={changeStatus} />

        })
      }

    </div>
  );
}

export default App;