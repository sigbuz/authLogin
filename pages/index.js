import style from "../styles/Home.module.css"

export default function home(){
  return (
    <div className = {style.main}>
      <h1>Hello Wordl</h1>
      {/* <input /> */}
      <h3>Log In</h3>
      <button type="submit" >Google</button>
      <button type="submit">Facebook</button>
    </div>
    
  )
}