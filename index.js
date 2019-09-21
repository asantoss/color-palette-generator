// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )


// const App = (props) => {
//     const [Boxes, setBoxes] = React.useState([{ color: '#FFFFFF', isLocked: false }, { color: '#FFFFFF', isLocked: false }, { color: '#FFFFFF', isLocked: false }, { color: '#FFFFFF', isLocked: false }, { color: '#FFFFFF', isLocked: false }])
//     const [Colors, setColors] = React.useState('#')
//     const randomColor = () => {
//         return '#' + Math.floor(Math.random() * 16777215).toString(16);
//     }

//     React.useEffect(() => {
//         setColors(randomColor())
//         Boxes.forEach((box) => )
//         return () => {
//             setColors('#FFFFFF')
//         };
//     }, [])
//     return (
//         <div>
//             {/* {  <ColorBox onClick={() => console.log(Boxes)} />} */}
//         </div>

//     )
// }


ReactDOM.render(<div><BoxesContainer /></div>, document.getElementById('root'))