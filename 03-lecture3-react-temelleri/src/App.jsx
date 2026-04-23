/* function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
} */

/* --- lecture 1 exercises --- */

const person = {
  name: 'Serhat Camadan',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};
export function Serhat(){
  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.name} is a software developer.</p>
    </div>
  )
}
export function Fadis() {
  return (
    <div>
      <h1>Fadis</h1>
      <p>Fadis is a industrial engineer.</p>
    </div>
  )
}

/* export default function Fasea(){
  return (
    <section>
      <h1>Fasea</h1>
      <Serhat />
      <Fadis />
    </section>
  )
} */

  export default function Fasea(){
  return (
    <section style ={person.theme}>
      <h1>Fasea</h1>
      <Serhat />
      <Fadis />
    </section>
  )
}