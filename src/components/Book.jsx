import React,{useState} from 'react'


const Book = (props) => {
  const { img, title , author } = props.book
  const [counter, setCounter] = useState(0)
  console.log(counter)

  const handleClick = (e) => {
    let target = e.target.className
    if(target === "add"){
      setCounter(counter + 1)
    } else if(target === "lower"){
        (counter > 0) ? setCounter(counter - 1) : setCounter(0)
    } else if(target === "reset") {
      setCounter(0)
    }
  }

  // const addCounter = () => {
  //   return(
  //     setCounter(counter + 1)
  //   )
  // }

  //  const lowerCounter = () => {
  //    if(counter > 0){
  //      setCounter(counter - 1)
  //    } else {
  //      resetCounter()
  //    }
  // }

  // const resetCounter = () => {
  //   return(
  //     setCounter(0)
  //   )
  // }

  return(
     <div className="book">
        <img src={img} className="img-thumbnail image border-dark"/>
        <div className="titles">
          <p>
            <span className="title me-2">Book Name :</span> 
            {title}
          </p>
          <p>
            <span className="title me-2">Author :</span> 
            {author}
          </p>
          <button className="add" onClick={handleClick}>Add</button>
          <button className="lower" onClick={handleClick}>Lower</button>
          <button className="reset" onClick={handleClick}>Reset</button>
          <p className="mt-2">
            <span className="title me-2">Count</span> 
            {counter}
          </p>
        </div>
     </div>
  )
}

export default Book

