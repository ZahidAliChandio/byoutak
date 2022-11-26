const MainHeader=(props)=>{
    return(
        <header className="main-header fixed flex items-center md:justify-between top-0 left-0 w-full h-12 px-4 z-30 bg-[#ff0055] card-shadow">
            {props.children}
        </header>
    )
}
export default MainHeader;