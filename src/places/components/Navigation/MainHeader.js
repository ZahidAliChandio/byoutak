const MainHeader=(props)=>{
    return(
        <header className="main-header flex items-center w-full h-10 z-20 bg-[#212020] card-shadow">
            {props.children}
        </header>
    )
}
export default MainHeader;