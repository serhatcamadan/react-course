/* const person = {
  name: 'Serhat Camadan',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
}; */
export function Serhat(size){
  return (
    <div>
{/*       <h1>{person.name}</h1>
      <p>{person.name} is a software developer.</p> */}
          <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
      width = {size}
    />
    </div>
  )
}
export function Fadis({size}) {
  return (
    <div>
      <h1>Fadis</h1>
      <p>Fadis is a industrial engineer.</p>
                <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
      width = {size}
    />
    </div>
  )
}
  export default function Fasea(){
  return (
    <section>
      <h1>Fasea</h1>
      <Serhat 
      size = {500}
      />
      <Fadis 
      size = {100}
      />
    </section>
  );
}