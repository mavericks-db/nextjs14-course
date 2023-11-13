export default function Menu(props: any) {
    console.log(props)
    return (
        <>
            <h1>Menu</h1>
            {props.name}
            {props.age}
            {props.isMan}
            {props.children}
       </> 
    )
} 
        
        